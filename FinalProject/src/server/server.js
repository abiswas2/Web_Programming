const bodyParser = require('body-parser');
const app = require('express')();
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");
const json2xls = require('json2xls');

const dbConfig = require('./dao/config.js');
const eventsHelper = require('./apihelper/eventshelper');

app.use(cors());
app.use(bodyParser.json({
    limit: '2mb'
}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length - 1]) === -1) {
            return callback({
                msg: 'Wrong extension type',
                code: 400
            });
        }
        return callback(null, true);
    }
}).single('file');

app.get('/', function (req, res) {
    return res.send('Hello Server')
});

app.post('/events', (req, res) => {
    const events = req.body;
    console.log('Events to register', events);
    return eventsHelper.createEvents(
        events
    ).then(data => {
        res.status(data.code || 200).json(data);
    }).catch(err => {
        res.status(err.code || 500).json(err);
    });
});

app.get('/events', (req, res) => {
    return eventsHelper.getEvents(
        // No Args
    ).then(data => {
        res.status(data.code || 200).json(data);
    }).catch(err => {
        res.status(err.code || 500).json(err);
    });
});

app.post('/events/:eventName/upload', (req, res) => {
    console.log('POST /upload API called! for event', req.params.eventName);
    let exceltojson;

    upload(req, res, function (err) {
        if (err) {
            console.error(err);
            return res.status(err.code || 500).json(err)
        }

        if (!req.file) {
            return res.status(400).json({
                code: 400,
                msg: 'No file passed'
            });
        }

        /** Check the extension of the incoming file and
         *  use the appropriate module
         */
        if (req.file.originalname.split('.')[req.file.originalname.split('.').length - 1] === 'xlsx') {
            exceltojson = xlsxtojson;
        } else {
            exceltojson = xlstojson;
        }

        try {
            exceltojson({
                input: req.file.path,
                output: null, //since we don't need output.json
                lowerCaseHeaders: true
            }, function (err, result) {
                if (err) {
                    return res.status(err.code || 500).json({
                        code: err.code || 500,
                        msg: err, data: null
                    });
                }

                const data = result.filter(d => d['panther_id'] && d['panther_id'] !== '').map(d => {
                    d['checked_in'] = false;
                    return d;
                });

                res.json({
                    code: 201,
                    msg: 'Data Imported Successfully',
                    data: data
                });

                eventsHelper.uploadEventData(req.params.eventName, data);
            });
        } catch (e) {
            res.json({
                code: 400,
                msg: "Corrupted excel file"
            });
        }
    })
});

app.get('/events/:eventName', (req, res) => {
    return eventsHelper.getEventData(
        req.params.eventName
    ).then(data => {
        res.status(data.code || 200).json(data);
    }).catch(err => {
        res.status(err.code || 500).json(err);
    });
});

app.get('/events/:eventName/download', (req, res) => {
    return eventsHelper.getEventData(
        req.params.eventName
    ).then(data => {
        let fileName = req.params.eventName;

        if (req.query.hasOwnProperty('checkedIn')) {
            data.eventData = data.eventData.filter(d => d['checked_in'].toString() === req.query['checkedIn'].toLowerCase());
            fileName += `-${req.query['checkedIn'].toLowerCase() === 'true' ? 'checked-in' : 'not-checked-in'}`;
        }
        
        const xls = json2xls(data.eventData);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats');
        res.setHeader("Content-Disposition", `attachment; filename= ${fileName}.xlsx`);
        res.end(xls, 'binary');
    }).catch(err => {
        res.status(err.code || 500).json(err);
    });
});

app.patch('/events/:eventName/:pantherId', (req, res) => {
    return eventsHelper.updateEventData(
        req.params.eventName, req.params.pantherId, req.query['checkin'] && req.query['checkin'] === 'true' || false
    ).then(data => {
        res.status(data.code || 200).json(data);
    }).catch(err => {
        res.status(err.code || 500).json(err);
    });
});

dbConfig.checkConnection().then(() => {
    app.listen(8000, function () {
        console.log('App running on port 8000');
    });
});
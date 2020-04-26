var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())
const readXlsxFile = require('read-excel-file/node');
global.__basedir = __dirname;

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
     },
     filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
     }
  })
  
  var upload = multer({ storage: storage }).array('file')
  
app.get('/',function(req,res){
    return res.send('Hello Server')
})

app.post('/upload', (req, res) =>{
    
    upload(req, res, function (err) {
     
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          // A Multer error occurred when uploading.
        } else if (err) {
            return res.status(500).json(err)
          // An unknown error occurred when uploading.
        } 
        console.log(req.files[0].filename);
        // readExcelFile(__basedir + '/uploads/' + req.file.filename);
        return res.status(200).send(req.file);
        // Everything went fine.
      })
});

function readExcelFile(filePath){
    // File path.
    readXlsxFile(filePath).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.   
      console.log(rows);
    });
}

app.listen(8000, function() {
    console.log('App running on port 8000');
});
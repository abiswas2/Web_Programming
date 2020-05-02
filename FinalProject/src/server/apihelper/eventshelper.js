const path = require('path');
const async = require('async');
const dbConfig = require(path.join(__dirname, '..', 'dao', 'config.js'));

const createEventCollection = event => {
    return dbConfig.createCollection('Webprogramming', event.eventName);
}

const createEvents = data => {
    const events = Object.assign({}, data);
    let result = null;
    return dbConfig.insertDocuments(
        'Webprogramming', 'events', data
    ).then(inserted => {
        result = inserted
        console.log(`Successfully inserted: ${JSON.stringify(inserted, null, 2)}`);
        return new Promise((resolve, reject) => {
            async.map(events, ((event, cb) => {
                createEventCollection(event).then(data => {
                    return cb(null, data);
                }).catch(err => cb(err));
            }), (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }).then(() => {
        return {
            msg: `Successfully inserted: ${result.insertedCount} events`,
            code: 201
        };
    }).catch(err => {
        console.error('Error While Creating Events', err.message, err.code);
        // eslint-disable-next-line no-throw-literal
        throw {
            msg: `Error While Creating Events - ${err.message}`,
            code: err.code && (err.code === 11000) ? 409 : err.code || 500
        };
    });
};

const getEvents = () => {
    return dbConfig.getDocuments(
        'Webprogramming', 'events'
    ).then(items => {
        console.log(`Successfully fetched: ${JSON.stringify(items, null, 2)}`);
        const events = items.map(item => {
            delete item._id;
            return item;
        }).filter(item => item.eventName !== 'Event 2' && item.eventName !== 'Test Event 01');

        return {
            msg: `Successfully fetched: ${events.length} events`,
            code: 200,
            events: events
        };
    }).catch(err => {
        console.error('Error While Fetching Events', err.message, err.code);
        // eslint-disable-next-line no-throw-literal
        throw {
            msg: `Error While Fetching Events - ${err.message}`,
            code: err.code && (err.code === 11000) ? 409 : err.code || 500
        };
    });
};

const uploadEventData = (eventName, data) => {
    const eventData = data.map(d => {
        d['_id'] = d['panther_id'];
        delete d['panther_id'];
        return d;
    });

    console.log(JSON.stringify(eventData, null, 2));

    dbConfig.insertDocuments(
        'Webprogramming', eventName, data
    ).then(inserted => {
        console.log('Data Uploaded', inserted.insertedCount);
    }).catch(console.error);
};

const getEventData = eventName => {
    return dbConfig.getDocuments(
        'Webprogramming', eventName
    ).then(items => {
        console.log(`Successfully fetched: ${JSON.stringify(items, null, 2)}`);
        return {
            msg: `Successfully fetched: ${items.length} events`,
            code: 200,
            eventData: items.map(item => {
                item['panther_id'] = item._id;
                delete item._id;
                return item;
            })
        };
    }).catch(err => {
        console.error('Error While Fetching Events', err.message, err.code);
        // eslint-disable-next-line no-throw-literal
        throw {
            msg: `Error While Fetching Events - ${err.message}`,
            code: err.code && (err.code === 11000) ? 409 : err.code || 500
        };
    });
};

const updateEventData = (eventName, id, value) => {
    return dbConfig.updateDocumentById(
        'Webprogramming', eventName, id, {checked_in: value}
    ).then(items => {
        console.log(`Successfully Updated: ${JSON.stringify(items, null, 2)}`);
        return {
            msg: `Successfully Updated: ${items.result.nModified} data`,
            code: 200
        };
    }).catch(err => {
        console.error('Error While Updating Events', err.message, err.code);
        // eslint-disable-next-line no-throw-literal
        throw {
            msg: `Error While Fetching Events - ${err.message}`,
            code: err.code && (err.code === 11000) ? 409 : err.code || 500
        };
    });
};

module.exports = {
    createEvents,
    getEvents,
    uploadEventData,
    getEventData,
    updateEventData
};

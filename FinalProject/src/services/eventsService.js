import axios from "axios";


const EventsService =  {

    postEventService(data) {
        return new Promise(function(resolve, reject) {
            console.log(data);
            try{
                axios.post("http://localhost:8000/events", data).then(res => {
                    if(res.data.code === 201){
                        resolve(res);
                    } else{
                        reject("Event not created");
                    }
                })
                .catch( (err) => {
                });
            } catch(e){
                console.log(e);
            }
        });
    },
    getEventService(){
        return new Promise(function(resolve, reject) {
            try{
                axios.get("http://localhost:8000/events").then(res => {
                    if(res){
                        resolve(res);
                    } else{
                        reject("Event not created");
                    }
                })
                .catch( (err) => {
                });
            } catch(e){
                console.log(e);
            }
        });
    },
    downloadEventService(eventName){
        return new Promise(function(resolve, reject) {
            try{
                axios.get(`http://localhost:8000/events/${eventName}/download`).then(res => {
                    if(res){
                        resolve(res);
                    } else{
                        reject("Event not created");
                    }
                })
                .catch( (err) => {
                });
            } catch(e){
                console.log(e);
            }
        });
    }
}

export default EventsService;
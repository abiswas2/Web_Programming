import axios from "axios";


const EventsService =  {

    postEventService(data) {
        return new Promise(function(resolve, reject) {
            console.log(data);
            try{
                axios.post("https://9b3d5fa0.ngrok.io/events", data).then(res => {
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
                axios.get("https://9b3d5fa0.ngrok.io/events").then(res => {
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
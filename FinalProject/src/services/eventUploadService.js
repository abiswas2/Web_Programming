import axios from "axios";

function UploadEventDataService(data, eventName){
        return new Promise(function(resolve, reject) {
            console.log(data);
            try{
                axios.post(`http://localhost:8000/events/${eventName}/upload`, data, {}).then(res => {
                    if(res){
                        resolve(res);
                    } else{
                        reject("Upload service failed");
                    }
                })
                .catch( (err) => {
                    reject(err.message);
                });
            } catch(e){
                console.log(e);
            }
    });
}

export default UploadEventDataService;
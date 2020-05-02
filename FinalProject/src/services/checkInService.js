import axios from "axios";

function CheckInService(pantherId, eventName, status){
        return new Promise(function(resolve, reject) {
            try{
                axios.patch(`http://localhost:8000/events/${eventName}/${pantherId}/?checkin=${status}`).then(res => {
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

export default CheckInService;
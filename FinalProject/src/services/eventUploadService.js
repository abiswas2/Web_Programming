import axios from "axios";

function UploadEventData(data){
    console.log(data);
        axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
        console.log(res.statusText);
    })
}

export default UploadEventData;
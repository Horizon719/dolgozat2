import axios from "axios";


class DataService {

    constructor() {
        axios.defaults.baseURL = "http://localhost:8001/api";
    }

    get(vegpont, callbackFn, errFn = (param) => {} ) {
        axios.get(vegpont)
            .then(response => {
                callbackFn(response);
            })
            .catch(error => {
                errFn(error);
            });
    }
}

export default DataService;
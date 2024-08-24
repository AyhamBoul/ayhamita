import axios from "axios";

export default axios.create({
    baseURL :'https://api.rawg.io/api',
    params:{
        key: '6821a8325e044dff9a67df724e3fffe2'

    }
})
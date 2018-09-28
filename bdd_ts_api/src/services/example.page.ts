import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class Bank{
    
    public static data = null;
    postBank(){
        
        return  axios.post('/bank', Bank.data)

    }
    
}
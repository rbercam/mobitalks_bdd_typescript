import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class Bank{
    
    public static data: any = null;

    public static dataPut: any = null;

    postBank(){
        
        return  axios.post('/bank', Bank.data)

    }

    getBank(){

        return axios.get('/bank')

    }

    getBankById(id){

        return axios.get(`/bank/${id}`)

    }

    putBank(id){

        return axios.put(`/bank/${id}`, Bank.dataPut)

    }

    deleteBank(id){

        return axios.delete(`/bank/${id}`)

    }
    
}
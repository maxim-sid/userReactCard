import {DATA_URL} from './../config/api';
import queryString from 'query-string'
import axios from 'axios'

const urlcon = axios.create({
    baseUrl: 'https://randomuser.me/api',
    responseType: 'json',
    timeout: 5000,
})

export const getUsers = async () => {
    try {
        const {
            data: { results },
        } = await urlcon.get('?results=10');
        return results;
    }catch (err){
        console.log(err)
    }
};
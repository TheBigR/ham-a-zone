import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID EAyXcmy8fRueFqkN6tbk6EXanOHTR2KZYYbtlp1vue0'
    }
});
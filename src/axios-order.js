import axios from 'axios'

const instance =  axios.create({
    baseURL: 'https://react-starter-project-84cbc.firebaseio.com/'
});

export default instance
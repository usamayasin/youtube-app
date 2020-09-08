import axios from 'axios';

const KEY = 'AIzaSyC30cR9eJ0b3ycjb-zVLCPG2WzcVMbuCgQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key : KEY
    }
});

import axios from 'axios'

const breakingbad =  axios.create({
    baseURL:'https://www.breakingbadapi.com/api/'
})

export default breakingbad
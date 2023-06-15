'https://api-deslocamento.herokuapp.com/'

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-deslocamento.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

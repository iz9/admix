import axios from 'axios'

const getBaseUrl = () => 'https://services.admixplay.com/challenge-v1/fetch'

export const client = axios.create({
  baseURL: getBaseUrl(),
  responseType: 'json',
  method: 'POST',
  headers: {
    'admix-api-key': '63c412d9-11c2- 4a7f-9d2b-8a6aafc9c596',
  },
})

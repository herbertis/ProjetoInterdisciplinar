import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://carterinhaifsuldeminas.online',
  headers: { Accept: 'application/json' },
})

export default api;
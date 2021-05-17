import { create } from 'apisauce'

const api = create({
  baseURL: 'https://carterinhaifsuldeminas.online',
  headers: { Accept: 'application/json' },
})

export default api;
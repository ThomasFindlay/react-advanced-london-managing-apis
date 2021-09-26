import api from './api'

export const fetchQuotes = () => {
  return api.get('quotes/top_quotes').then(res => res.data.quotes)
}

export const searchQuotes = (query, config = {}) => {
 return api.get('/quotes/search', {...config, params: {query}}).then(res => res.data.quotes) 
}
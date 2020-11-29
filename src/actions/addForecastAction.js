
export function getForecast(data) {
  return {
    type: 'GET_FORECAST',
    payload: data
  }

}

export function handleSearch(e) {
  return {
    type: 'ADD_SEARCH_VALUE',
    payload: e.target.value
  }
}

export function setError() {
  return {
    type: 'SET_ERROR',
  }
}
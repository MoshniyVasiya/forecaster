const initialState = {
  data: [],
  city: '',
  search_value: '',
  err: ''
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_FORECAST':
      return {
        ...state,
        city: action.payload.data.city.name,
        data: action.payload.data.list.map(el => ({
          Date: el.dt_txt.slice(0, 10),
          Time: el.dt_txt.slice(11, 16),
          Temperature: Math.round(el.main.temp)
        })),
        err: ''
      };
    case 'SET_ERROR':
      return {
        data: [],
        city: '',
        search_value: '',
        err: 'City not found'
      };
      case 'ADD_SEARCH_VALUE':
      return {
        ...state,
        search_value: action.payload
      };
    case 'CLEAR_SEARCH_VALUE':
      return {
        ...state,
        search_value: ''
      };

    default:
      return state
  }
};

export default rootReducer;
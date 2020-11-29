import React, {Fragment} from 'react';
import './SearchField.css';
import { bindActionCreators } from 'redux';
import { handleSearch, getForecast, setError } from '../../actions/addForecastAction';
import { connect } from "react-redux";
import axios from "axios";


const SearchField = ({ getForecast, handleSearch, search_value, setError }) => {
    const getCityForecast = () => {
        if (search_value.length >= 3 )
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${search_value}&units=metric&appid=a7de7b4671f7e1618c95e50705e1db8c`)
                .then(response => getForecast(response))
                .catch(error => setError(error))
    };

  return(
      <Fragment>
          <div className="input_wrapper">
              <input
                  type="text"
                  placeholder="Type here"
                  onChange={handleSearch}
              />
              <button onClick={getCityForecast}>
                  search
              </button>
          </div>
      </Fragment>
  )
};

function mapStateToProps(state) {
    return {
        search_value: state.search_value,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            handleSearch,
            getForecast,
            setError
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
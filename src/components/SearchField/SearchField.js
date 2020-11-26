import React, {Fragment} from 'react';
import './SearchField.css';


const SearchField = ({onChange, onClick}) => {
  return(
      <Fragment>
          <div className="input_wrapper">
              <input
                  type="text"
                  placeholder="Type here"
                  onChange={onChange}
              />
              <button onClick={onClick}>
                  search
              </button>
          </div>
      </Fragment>
  )
};

export default SearchField;
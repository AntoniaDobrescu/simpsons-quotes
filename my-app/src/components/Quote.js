import React from 'react';

const Quote = (props) => {
  return (
    <div>
      <p>{props.quote}</p>
      <p>{props.character}</p>
      <img src = {props.image}/>
    </div>
  )
};

export default Quote;

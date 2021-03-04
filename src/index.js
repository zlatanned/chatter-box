import React from 'react';
import ReactDom from 'react-dom'; 

const Greeting = () => {
  return (
    <p>This is a demo component</p>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'));

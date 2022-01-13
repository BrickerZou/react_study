import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
  return <div>
     <h1>Hello World!</h1>
     <code>this is react</code>
    </div>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));
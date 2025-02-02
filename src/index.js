import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from '../src/components/CoordinatesButton';
import DelayedButton from '../src/components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
    <DelayedButton 
     onDelayedClick={ event => console.log(event) }
     delay={1500} />
  </div>,
  document.getElementById('global')
);



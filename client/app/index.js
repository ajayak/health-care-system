import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('main'));

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import {renderDevTools} from '../utils/devTools';

import AppBar from 'material-ui/lib/app-bar';
import Button from 'material-ui/lib/raised-button';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import materialTheme from '../materialTheme';

const store = configureStore();

class App extends Component {
  constructor(){
    super();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext(){
    return {
      muiTheme: ThemeManager.getMuiTheme(materialTheme)
    }
  }

  render() {
    return (
      <div>
        <AppBar title="Medical Care System"/>
        <Button label="My Button" primary={true} />
        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <Home />
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
}

export default App;

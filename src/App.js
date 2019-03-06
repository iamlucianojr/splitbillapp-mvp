import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from "./store";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

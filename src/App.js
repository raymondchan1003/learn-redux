import React from "react";
import { Provider } from "react-redux";
import configuredStore from "./store";
import Header from './components/Header'

const store = configuredStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <Header/>
      </>
    </Provider>
  );
}

export default App;

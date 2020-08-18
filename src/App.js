import React from "react";
import { Provider } from "react-redux";
import configuredStore from "./store";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";

const store = configuredStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <ImageGrid />
      </>
    </Provider>
  );
}

export default App;

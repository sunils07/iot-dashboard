import React from 'react';
import { Provider } from "react-redux";
import BoardHeader from "./Components/BoardHeader/BoardHeader.Index";
import GasBoard from "./Components/GasBoard/GasBoard.Index";
import store from "./lib/redux/store";

import './styles/common.style.scss';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <div id="iot-board" className="container iot-board">
        <div className="row">
          <BoardHeader />
        </div>
        <div className="row">
          <div className="col">
            <GasBoard />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

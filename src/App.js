import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TabOne from "./Components/TabOne";
import TabTwo from "./Components/TabTwo";
import TabThree from "./Components/TabThree";
import { rootReducer } from "./Redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<TabOne />} />
            <Route path="/tab-one" element={<TabOne />} />
            <Route path="/tab-two" element={<TabTwo />} />
            <Route path="/tab-three" element={<TabThree />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;

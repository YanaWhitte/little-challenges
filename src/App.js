import "./App.css";
import RandomColorBtn from "./projects/RandomColorBtn/RandomColorBtn";
import TextInputState from "./projects/TextInputState/TextInputState";
import SliderWithState from "./projects/SliderWithState/SliderWithState";
import SliderWithRandomColor from "./projects/SliderWithRandomColor/SliderWithRandomColor";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./MainComponents/Header";
import Navbar from "./MainComponents/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/random-col-btn" render={() => <RandomColorBtn />} />
          <Route path="/input-state" render={() => <TextInputState />} />
          <Route path="/slider-state" render={() => <SliderWithState />} />
          <Route
            path="/random-col-slider"
            render={() => <SliderWithRandomColor />}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

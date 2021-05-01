import "./App.css";
import RandomColorBtn from "./projects/RandomColorBtn";
import TextInputState from "./projects/TextInputState";
import SliderWithState from "./projects/SliderWithState";
import SliderWithRandomColor from "./projects/SliderWithRandomColor";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./MainComponents/Header";
import Navbar from "./MainComponents/Navbar";
import GradientSlider from "./projects/GradientSlider";
import BasicToggle from "./projects/BasicToggle";
import ModalWindow from "./projects/ModalWindow";
import FormField from "./projects/FormField";
import FormLogin from "./projects/FormLogin";
import MousePosition from "./projects/MousePosition";
import ShapeSelector from "./projects/ShapeSelector";
import ShapeCreator from "./projects/ShapeCreator";
import ShapeColoredCreator from "./projects/ShapeColoredCreator";
import RandomNumberGen from "./projects/RandomNumberGen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/random-col-btn" component={RandomColorBtn} />
          <Route path="/input-state" component={TextInputState} />
          <Route path="/slider-state" component={SliderWithState} />
          <Route
            path="/random-col-slider"
            render={() => <SliderWithRandomColor />}
          />
          <Route path="/gradient-slider" component={GradientSlider} />
          <Route path="/basic-toggle" component={BasicToggle} />
          <Route path="/modal-window" component={ModalWindow} />
          <Route path="/form-field" component={FormField} />
          <Route path="/form-login" component={FormLogin} />
          <Route path="/mouse-coordinates" component={MousePosition} />
          <Route path="/shape-selector" component={ShapeSelector} />
          <Route path="/shape-creator" component={ShapeCreator} />
          <Route
            path="/shape-colored-creator"
            component={ShapeColoredCreator}
          />
          <Route path="/random-number" component={RandomNumberGen} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

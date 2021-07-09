import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
  return <>
    <ol className={s.nav}>
      <li><NavLink to="/random-col-btn" activeClassName={s.active}>Random color button</NavLink></li>
      <li><NavLink to="/input-state" activeClassName={s.active}>Text input with shared state</NavLink></li>
      <li><NavLink to="/slider-state" activeClassName={s.active}>Slider with shared state</NavLink></li>
      <li>
        <NavLink to="/random-col-slider" activeClassName={s.active}>Slider & randomly colored rectangles</NavLink>
      </li>
      <li><NavLink to="/gradient-slider" activeClassName={s.active}>Slider with gradient row</NavLink></li>
      <li><NavLink to="/basic-toggle" activeClassName={s.active}>Basic toggle</NavLink></li>
      <li><NavLink to="/modal-window" activeClassName={s.active}>Modal window example</NavLink></li>
      <li><NavLink to="/form-field" activeClassName={s.active}>Form text field</NavLink></li>
      <li><NavLink to="/form-login" activeClassName={s.active}>Form login/password</NavLink></li>
      <li><NavLink to="/mouse-coordinates" activeClassName={s.active}>Mouse position coordinates</NavLink></li>
      <li><NavLink to="/shape-selector" activeClassName={s.active}>Shape selector</NavLink></li>
      <li><NavLink to="/shape-creator" activeClassName={s.active}>Shape creator</NavLink></li>
      <li><NavLink to="/shape-colored-creator" activeClassName={s.active}>Shape creator with custom colors</NavLink></li>
      <li><NavLink to="/random-number" activeClassName={s.active}>Random number generation</NavLink></li>
      <li><NavLink to="/mouse-down-up-events" activeClassName={s.active}>Mouse Down & Mouse Up Events</NavLink></li>
      <li><NavLink to="/mouse-drawing" activeClassName={s.active}>Mouse drawing</NavLink></li>
      <li><NavLink to="/seconds-counter" activeClassName={s.active}>Seconds counter</NavLink></li>
      <li><NavLink to="/random-balls" activeClassName={s.active}>Balls with random numbers</NavLink></li>
      <li><NavLink to="/rgb-to-hsv" activeClassName={s.active}>RGB to HSV</NavLink></li>
      <li><NavLink to="/click-balls" activeClassName={s.active}>Clickable random balls</NavLink></li>
      <li><NavLink to="/checkboxes-field" activeClassName={s.active}>Field Of Checkboxes</NavLink></li>
      <li><NavLink to="/tic-tac-toe" activeClassName={s.active}>Tic Tac Toe</NavLink></li>
    </ol>
  </>
}

export default Navbar;
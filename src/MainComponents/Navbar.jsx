import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
  return <>
    <ol className={s.nav}>
      <li>
        <NavLink to="/random-col-btn" activeClassName={s.active}>Random color button</NavLink>
      </li>
      <li>
        <NavLink to="/input-state" activeClassName={s.active}>Text input with shared state</NavLink>
      </li>
      <li>
        <NavLink to="/slider-state" activeClassName={s.active}>Slider with shared state</NavLink>
      </li>
      <li>
        <NavLink to="/random-col-slider" activeClassName={s.active}>
          Slider which makes a column of divs with random color
        </NavLink>
      </li>
    </ol>
  </>
}

export default Navbar;
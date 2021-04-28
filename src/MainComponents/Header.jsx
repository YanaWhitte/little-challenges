import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

const Header = () => {
  return <div className={s.header}>
    <NavLink to="/home">Home</NavLink>
  </div>
}

export default Header;
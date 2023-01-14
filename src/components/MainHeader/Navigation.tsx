import React, { useContext} from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props: any) => {

  const ctx = useContext(AuthContext);
 
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/" onClick={props.onClickUsers}>Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/" onClick={props.onClickAdmin}>Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/" onClick={props.onClickSearch}>
                    MPRN Search
                  </a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
};

export default Navigation;

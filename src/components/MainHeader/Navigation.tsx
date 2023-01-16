import React, { useContext} from "react";
import AuthContext from "../../store/auth-context";
import NavigationContext from "../../store/navigation-context";
import { NavigationContextProvider } from "../../store/navigation-context";

import classes from "./Navigation.module.css";

const Navigation = (props: any) => {

  const ctx = useContext(AuthContext);
  const navCtx = useContext(NavigationContext);
 
        return (
          <NavigationContextProvider>
                      <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/" onClick={navCtx.onClickUsers}>Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/" onClick={navCtx.onClickAdmin}>Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/" onClick={navCtx.onClickSearch}>
                    MPRN Search
                  </a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
          </NavigationContextProvider>

        );
};

export default Navigation;

import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Search from './components/Search/Search';
import AuthContext from './store/auth-context';
import Admin from './components/Admin/Admin';
import Users from './components/Users/Users';
import NavigationContext from './store/navigation-context';

function App() {

  const onSearchHandler = (mprnToSearch: string) => {
    console.log("You searched " + mprnToSearch);
  }

  const ctx = useContext(AuthContext);
  const navCtx = useContext(NavigationContext)

  return (
    <React.Fragment>
      <MainHeader />
            <main>
              {!ctx.isLoggedIn  && <Login />}
              {ctx.isLoggedIn && !(navCtx.isSearching || navCtx.isOnAdminPage || navCtx.isOnUsersPage) && <Home />}
              {ctx.isLoggedIn && navCtx.isSearching && <Search onSearch={onSearchHandler}/>}
              {ctx.isLoggedIn && navCtx.isOnAdminPage && <Admin />}
              {ctx.isLoggedIn && navCtx.isOnUsersPage && <Users />}
            </main>
    </React.Fragment> 
  );
}

export default App;

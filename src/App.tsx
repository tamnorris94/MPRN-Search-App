import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Search from './components/Search/Search';
import AuthContext from './store/auth-context';
import Admin from './components/Admin/Admin';
import Users from './components/Users/Users';

function App() {

  const onSearchHandler = (mprnToSearch: string) => {
    console.log("You searched " + mprnToSearch);
  }

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
            <main>
              {!ctx.isLoggedIn  && <Login />}
              {ctx.isLoggedIn && !(ctx.isSearching || ctx.isOnAdminPage || ctx.isOnUsersPage) && <Home />}
              {ctx.isLoggedIn && ctx.isSearching && <Search onSearch={onSearchHandler}/>}
              {ctx.isLoggedIn && ctx.isOnAdminPage && <Admin />}
              {ctx.isLoggedIn && ctx.isOnUsersPage && <Users />}
            </main>
    </React.Fragment> 
  );
}

export default App;

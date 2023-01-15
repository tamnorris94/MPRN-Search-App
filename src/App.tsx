import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Login2 from './components/Login/Login2';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Search from './components/Search/Search';
import AuthContext from './store/auth-context';
import Admin from './components/Admin/Admin';
import Users from './components/Users/Users';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearch] = useState(false);
  const [isOnAdminPage, setIsOnAdmin] = useState(false);
  const [isOnUsersPage, setIsOnUsers] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInfo === '1'){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    console.log(email);
    console.log(password);
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const onClickSearchHandler = (event: any) => {
    event.preventDefault();
    console.log("You clicked search");
    setIsSearch(true);
    setIsOnUsers(false);
    setIsOnAdmin(false);
  }

  const onSearchHandler = (mprnToSearch: string) => {
    //event.preventDefault();
    console.log("You searched " + mprnToSearch);
  }

  const onClickAdminHandler = (event: any) => {
    event.preventDefault();
    console.log("You clicked on Admin");
    setIsOnAdmin(true);
    setIsOnUsers(false);
    setIsSearch(false);
  }

  const onClickUsersHandler = (event: any) => {
    event.preventDefault();
    setIsOnAdmin(false);
    setIsSearch(false);
    setIsOnUsers(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isSearching: isSearching,
        isOnAdminPage: isOnAdminPage,
        onLogout: logoutHandler,
        onClickSearch: onClickSearchHandler,
        onClickAdmin: onClickAdminHandler,
        onClickUsers: onClickUsersHandler
      }}>
        <MainHeader />
      <main>
        {!isLoggedIn  && <Login onLogin={loginHandler} />}
        {isLoggedIn && !(isSearching || isOnAdminPage || isOnUsersPage) && <Home onLogout={logoutHandler} />}
        {isLoggedIn && isSearching && <Search onSearch={onSearchHandler}/>}
        {isLoggedIn && isOnAdminPage && <Admin />}
        {isLoggedIn && isOnUsersPage && <Users />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;

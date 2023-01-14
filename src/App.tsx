import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Login2 from './components/Login/Login2';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Search from './components/Search/Search';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const searchHandler = (searchInput: string) => {
    console.log("You searched");
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        {isLoggedIn && <Search onSearch={searchHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

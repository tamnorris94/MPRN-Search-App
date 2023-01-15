import React, { useState, useEffect} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isSearching: false,
  isOnUsersPage: false,
  isOnAdminPage: false,
  onLogout: ()=>{},
  onLogin: (email: any, password: any)=> {},
  onClickSearch: (event:any)=>{},
  onClickAdmin: (event:any)=>{},
  onClickUsers: (event:any)=>{}
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearch] = useState(false);
  const [isOnAdminPage, setIsOnAdmin] = useState(false);
  const [isOnUsersPage, setIsOnUsers] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    console.log("Login handler runs");
    //console.log(password);
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

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

  const onClickSearchHandler = (event: any) => {
    event.preventDefault();
    console.log("You clicked search");
    setIsSearch(true);
    setIsOnUsers(false);
    setIsOnAdmin(false);
  }

  // const onSearchHandler = (mprnToSearch: string) => {
  //   //event.preventDefault();
  //   console.log("You searched " + mprnToSearch);
  // }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isSearching: isSearching,
        isOnUsersPage: isOnUsersPage,
        isOnAdminPage: isOnAdminPage,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onClickSearch: onClickSearchHandler,
        onClickAdmin: onClickAdminHandler,
        onClickUsers: onClickUsersHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
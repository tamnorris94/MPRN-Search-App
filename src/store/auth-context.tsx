import React, { useState} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isSearching: false,
  isOnAdminPage: false,
  onLogout: ()=>{},
  onClickSearch: (event:any)=>{},
  onClickAdmin: (event:any)=>{},
  onClickUsers: (event:any)=>{}
});


export default AuthContext;
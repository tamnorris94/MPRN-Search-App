import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isSearching: false,
  isOnAdminPage: false,
  onLogout: {}
});

export default AuthContext;
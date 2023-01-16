import React, { useState} from 'react';

const NavigationContext = React.createContext({
  isSearching: false,
  isOnUsersPage: false,
  isOnAdminPage: false,
  onClickSearch: (event:any)=>{},
  onClickAdmin: (event:any)=>{},
  onClickUsers: (event:any)=>{}
});

  export const NavigationContextProvider = (props: any) => {
      const [isSearching, setIsSearch] = useState(false);
      const [isOnAdminPage, setIsOnAdmin] = useState(false);
      const [isOnUsersPage, setIsOnUsers] = useState(false);

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

      return (
        <NavigationContext.Provider
          value={{
            isSearching: isSearching,
            isOnUsersPage: isOnUsersPage,
            isOnAdminPage: isOnAdminPage,
            onClickSearch: onClickSearchHandler,
            onClickAdmin: onClickAdminHandler,
            onClickUsers: onClickUsersHandler,
          }}
        >
          {props.children}
        </NavigationContext.Provider>
      );
  }


export default NavigationContext;
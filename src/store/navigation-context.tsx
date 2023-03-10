import React, { useState} from 'react';

const NavigationContext = React.createContext({
  isOnSearchPage: false,
  isOnUsersPage: false,
  isOnAdminPage: false,
  onClickSearch: (event:any)=>{},
  onClickAdmin: (event:any)=>{},
  onClickUsers: (event:any)=>{}
});

  export const NavigationContextProvider = (props: any) => {
      const [isOnSearchPage, setIsOnSearchPage] = useState(false);
      const [isOnAdminPage, setIsOnAdmin] = useState(false);
      const [isOnUsersPage, setIsOnUsers] = useState(false);
      const [isMPRNSearched, setIsMPRNSearched] = useState(false);

      const onClickAdminHandler = (event: any) => {
        event.preventDefault();
        console.log("You clicked on Admin");
        setIsOnAdmin(true);
        setIsOnUsers(false);
        setIsOnSearchPage(false);
      }
    
      const onClickUsersHandler = (event: any) => {
        event.preventDefault();
        setIsOnAdmin(false);
        setIsOnSearchPage(false);
        setIsOnUsers(true);
      }
    
      const onClickSearchHandler = (event: any) => {
        event.preventDefault();
        console.log("You clicked search");
        setIsOnSearchPage(true);
        setIsOnUsers(false);
        setIsOnAdmin(false);
      }

      return (
        <NavigationContext.Provider
          value={{
            isOnSearchPage: isOnSearchPage,
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
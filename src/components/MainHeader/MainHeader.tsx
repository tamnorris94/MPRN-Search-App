import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props: any) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} 
        onClickSearch={props.onClickSearch} 
        onClickAdmin={props.onClickAdmin} 
        onClickUsers={props.onClickUsers}/>
    </header>
  );
};

export default MainHeader;
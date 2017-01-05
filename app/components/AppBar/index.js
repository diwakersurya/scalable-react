/**
*
* AppBar
*
*/

import React from 'react';


import styles from './styles.css';
import FontAwesome from "react-fontawesome";
import {Link} from "react-router";
import IconButton from "../IconButton"

function AppBar({toggleDrawer,email}) {
  const loginLink=email||  (<Link to="login">Login</Link>);
  return (
    <div className={styles.appBar}>
      <IconButton icon="bars" onClick={toggleDrawer} iconClass={styles.icon} buttonClass={styles.iconButton}/>
      <div className={styles.heading}>
        Coder Daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}
AppBar.propTypes={
  toggleDrawer:React.PropTypes.func.isRequired,
  email:React.PropTypes.string
}
export default AppBar;

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import NavigationContainer from "../NavigationContainer";

import styles from './styles.css';

export default class HomePage extends React.Component {
static propTypes={
  children:React.PropTypes.element,
}
  render() {
    return(
      <div>
        <NavigationContainer/>
        {this.props.children}
      </div>
    );
  }
}

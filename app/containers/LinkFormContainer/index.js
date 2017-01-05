/*
 *
 * LinkFormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkFormContainer from './selectors';
import styles from './styles.css';
import LinkForm from "../../components/LinkForm";
import {addLink,addLinkCancel} from "./actions";

export class LinkFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.linkFormContainer}>
        <LinkForm {...this.props}/>
          </div>
    );
  }
}

const mapStateToProps = selectLinkFormContainer();

function mapDispatchToProps(dispatch) {
  return {
    addLink:(link)=>dispatch(addLink(link)),
    addLinkCancel:()=>dispatch(addLinkCancel())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkFormContainer);

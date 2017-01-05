/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export function NotFound(props) {
  return (
    <article>
      <button
        handleRoute={function redirect() {
          props.changeRoute('/');
        }}
      > go to home page
      </button>
    </article>
  );
}

NotFound.propTypes = {
  changeRoute: React.PropTypes.func,
};

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(NotFound);

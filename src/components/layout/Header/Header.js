import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar>
        <Button href="https://google.com" variant="contained" color="primary" size="large">
          Login with Google
        </Button>
        <Button href="/" variant="contained" color="primary" size="large">
          My Ads
        </Button>
        <Button href="/" variant="contained" color="primary" size="large">
          Logout
        </Button>
        {children}
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};

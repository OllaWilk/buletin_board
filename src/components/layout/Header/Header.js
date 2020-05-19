import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Bulletin Board</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://google.com">
          <i className="fas fa-user-alt"></i>{' '}
          Login with Google
        </Nav.Link>
        <Nav.Link href="/">
          <i className="far fa-address-card"></i>{' '}
          My ads
        </Nav.Link>
        <Nav.Link href="/">
          <i className="fas fa-sign-out-alt"></i>{' '}
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  </div >
);

Component.propTypes = {
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

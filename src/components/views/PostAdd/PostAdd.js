import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostAdd.module.scss';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Container from '@material-ui/core/Container';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Component = ({ className }) => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Container  maxWidth="lg">
        <Form autoComplete="off" onSubmit={e => handleSubmit(e)}>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle" >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="use catching words"  required />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="postContent">
            <Form.Label>Description</Form.Label>
            <Form.Control required as="textarea" rows="3" placeholder="Describe the object or matter of your post" />
          </Form.Group>

          <Form.Row >
            <Form.Group as={Col} sm={12} md={4} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Type price, for free item type 0" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4} controlId="formGridLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control required type="text" placeholder="Enter your location"/>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}scontrolId="formGridEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control required type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm={12} md={4} controlId="postForm">
              <Form.Label>What is state of item you are selling</Form.Label>
              <Form.Control as="select">
                <option>new</option>
                <option>used</option>
                <option>broken</option>
                <option>in parts</option>
                <option>other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="postDelivery">
              <Form.Label>Shipping</Form.Label>
              <Form.Control as="select">
                <option>Only pickup</option>
                <option>After payment</option>
                <option>Only Cash on delivery</option>
                <option>All options possible</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group id="formGridCheckbox">
            <Form.File
              id="custom-file"
              label="add youre photo"
              custom
            />
          </Form.Group>
          <Button type="submit" variant="success" >Save</Button>
          <Button color="secondary" href="/" variant="contained" >Return</Button>
        </Form>
      </Container>
    </div>
  );
};

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
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};

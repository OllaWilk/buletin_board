import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { getUser } from '../../../redux/userRedux';

import styles from './PostEdit.module.scss';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Component = ({className, post, user}) => (
  <div className={clsx(className, styles.root)}>
    <h2>PostEdit</h2>

    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridTitle" >
          <Form.Label>Title</Form.Label>
          <Form.Control defaultValue={post.title} required type="text" minLength="10" />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="postContent">
        <Form.Label>Description</Form.Label>
        <Form.Control required as="textarea" rows="3" defaultValue={post.description} minLength="20" />
      </Form.Group>

      <Form.Row >
        <Form.Group as={Col} sm={12} md={4} controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" defaultValue={post.price} />
        </Form.Group>
        <Form.Group as={Col} sm={12} md={4} controlId="formGridLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control required type="text" defaultValue={post.location} />
        </Form.Group>
        <Form.Group as={Col} sm={12} md={4}scontrolId="formGridEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control required type="email" defaultValue={post.mail} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={12} md={4} controlId="postForm">
          <Form.Label>What is state of item you are selling</Form.Label>
          <Form.Control as="select"  >
            <option>{post.sellingState}</option>
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
            <option >{post.shipping}</option>
            <option>Only pickup</option>
            <option>Delivery</option>
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
      <Button type="submit" variant="success" >Update post</Button>
      <Button color="secondary" href="/" variant="contained" >Return</Button>
    </Form>
  </div>
);

Component.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.id),
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,

};

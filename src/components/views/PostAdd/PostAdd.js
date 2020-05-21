import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostAdd.module.scss';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class Component extends React.Component {

  state = {
    postData: {
      title: '',
      description: '',
      mail: '',
      sellingState: '',
      location: '',
      shipping: '',
      image: '',
      price: '',
    },
  }

  static propTypes = {
    className: PropTypes.string,
    addPost: PropTypes.func,
  }

  updateInputValue = ({ target }) => {
    const { postData } = this.state;
    const { value, name } = target;

    this.setState({ postData: { ...postData, [name]: value } });
  };

  submitPost = e => {
    e.preventDefault();
  };

  render() {
    const { className } = this.props;
    const { submitPost, updateInputValue } = this;
    const { postData } = this.state;

    return (
      <div className={clsx(className, styles.root)}>
        <div  maxWidth="lg">
          <Form onSubmit={submitPost}>

            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridTitle"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  onChange={updateInputValue}
                  value={postData.title}
                  placeholder="use catching words"
                  minLength="10"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="postContent">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                onChange={updateInputValue}
                value={postData.description}
                placeholder="Describe the object or matter of your post"
                minLength="20"
                required
                rows="3"
              />
            </Form.Group>

            <Form.Row >
              <Form.Group
                as={Col}
                sm={12}
                md={4}
                controlId="formGridPrice"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  type="text"
                  onChange={updateInputValue}
                  value={postData.price}
                  placeholder="Type price, for free item type 0"
                  required
                />
              </Form.Group>
              <Form.Group
                as={Col}
                sm={12}
                md={4}
                controlId="formGridLocation"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name="location"
                  type="text"
                  onChange={updateInputValue}
                  value={postData.location}
                  placeholder="Enter your location"
                  required
                />
              </Form.Group>
              <Form.Group
                as={Col}
                sm={12}
                md={4}
                scontrolId="formGridEmail"
              >
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  name="mail"
                  type="email"
                  onChange={updateInputValue}
                  value={postData.mail}
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                sm={12}
                md={4}
                controlId="postForm"
              >
                <Form.Label>What is state of item you are selling</Form.Label>
                <Form.Control
                  name="sellingState"
                  onChange={updateInputValue}
                  value={postData.sellingState}
                  required
                  as="select"
                >
                  <option>new</option>
                  <option>used</option>
                  <option>broken</option>
                  <option>in parts</option>
                  <option>other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="postDelivery"
              >
                <Form.Label>Shipping</Form.Label>
                <Form.Control
                  name="shipping"
                  onChange={updateInputValue}
                  value={postData.shipping}
                  required
                  as="select"
                >
                  <option>Only pickup</option>
                  <option>Delivery</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group id="formGridImg">
              <Form.File
                id="img"
                label="add youre photo"
                custom
                onChange={updateInputValue}
                value={postData.image}
              />
            </Form.Group>
            <Button type="submit" variant="success" >Save</Button>
            <Button color="secondary" href="/" variant="contained" >Return</Button>
          </Form>
        </div>
      </div>
    );
  }

}


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};

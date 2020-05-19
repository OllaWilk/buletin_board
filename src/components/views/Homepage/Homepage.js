import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Toolbar from '@material-ui/core/Toolbar';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';

const Component = ({className, posts }) => (
  <div className={clsx(className, styles.root)}>
    <Button  className={styles.button} href="/post/add" variant="success">+ write new ad</Button>
    <Toolbar />
    <CardDeck className={styles.cards}>
      <Col lg={12}>
        {posts.map(el => (
          <Card   className={styles.el} key= {el.id} >
            <Card.Img className={styles.cardImage} src={el.image} variant="top" />
            <Card.Body>
              <Card.Title><a href={`/post/edit/:${el.id}`}>{el.title}</a></Card.Title>
              <Card.Text>
                {el.description}
              </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item >
                {el.price} $
              </ListGroup.Item>
              <ListGroup.Item >
                <i className="fas fa-map-marker-alt"></i>
                {' '} Location: {el.location}
              </ListGroup.Item>
            </ListGroup>

            <Card.Footer>
              <small className="text-muted">Published: {el.publishDate}</small>
            </Card.Footer>
          </Card>
        ))}
      </Col>
    </CardDeck>
    <Toolbar />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const HomepageContainer = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};

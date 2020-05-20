import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

const mockProps = {
  post: {
    id: '1',
    title: 'disposable Face Masks - Packs',
    description: 'Lorem ipsum. Lorem lorem.',
    date: '11.05.2020',
    mail: 'medical@example.com',
    sellingState: 'New',
    location: 'London',
    shipping: 'After payment',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    price: 0.99,
  },
  user: {
    authenticated: true,
  },
};

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});

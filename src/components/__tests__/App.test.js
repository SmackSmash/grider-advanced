import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

afterEach(() => {
  wrapper.unmount();
});

it('shows a single comment box component', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a single comment list component', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});

import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('shows a textarea and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the textarea', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'test'
      }
    });
    wrapper.update();
  });

  it('allows user input into the textarea', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('test');
  });

  it('clears textarea on submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});

import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Test 1' }, { name: 'Test 2' }]
  });
});

afterEach(() => {
  wrapper.unmount();
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  wrapper.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
  });
});

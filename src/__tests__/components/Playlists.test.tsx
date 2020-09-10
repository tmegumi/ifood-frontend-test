import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Playlists from '../../pages/Playlists';

Enzyme.configure({ adapter: new Adapter() });

describe('Playlists component', () => {
  it('renders', () => {
    const wrapper = mount(<Playlists />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show filters if token exists', () => {
    const wrapper = mount(<Playlists />);

    expect(wrapper.find('h1').text()).toEqual('Explore featured playlists');
  });
});

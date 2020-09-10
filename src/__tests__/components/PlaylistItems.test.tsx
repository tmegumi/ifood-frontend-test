import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaylistItems from '../../pages/Playlists/components/PlaylistItems';

Enzyme.configure({ adapter: new Adapter() });

const playlists = [
  {
    name: 'Evening Acoustic',
    description: 'Stay cozy as the sounds of the evening unfold...',
    external_urls: {
      spotify: 'http://localhost:3000/spotify',
    },
    images: [
      {
        url: 'http://localhost:3000/some_image',
      },
    ],
    id: '37i9dQZF1DXcWBRiUaG3o5',
  },
  {
    name: 'Night Rain',
    description: 'Pouring rain and occasional rolling thunder.',
    external_urls: {
      spotify: 'http://localhost:3000/spotify',
    },
    images: [
      {
        url: 'http://localhost:3000/some_image',
      },
    ],
    id: '37i9dQZF1DXbcPC6Vvqudd',
  },
];

describe('PlaylistItems component', () => {
  it('renders', () => {
    const wrapper = mount(<PlaylistItems items={playlists} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('initially displays 2 items', () => {
    const wrapper = shallow(<PlaylistItems items={playlists} />);

    expect(wrapper.find('a')).toHaveLength(2);

    expect(wrapper.find('img').first().props()).toHaveProperty(
      'src',
      playlists[0].images[0].url,
    );
    expect(wrapper.find('strong').first().text()).toEqual(playlists[0].name);
    expect(wrapper.find('p').first().text()).toEqual(playlists[0].description);
  });
});

import React from 'react';
import MemberLayout from './index';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

test('MemberLayout should match snapshot', () => {
    const memberLayout = shallow(
        <MemberLayout />
    );
    expect(memberLayout).toMatchSnapshot();
});


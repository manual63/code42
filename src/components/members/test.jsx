import React from 'react';
import Members from './index';

test('Members should match snapshot', () => {
    const list = [];

    const members = shallow(
        <Members members={list} />
    );
    expect(members).toMatchSnapshot();
});



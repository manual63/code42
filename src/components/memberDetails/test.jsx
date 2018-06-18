import React from 'react';
import MemberDetails from './index';

test('MemberDetails should match snapshot', () => {
    const list = [];
    const details = {};

    const memberDetails = shallow(
        <MemberDetails memberDetails={details} memberRepoList={list} />
    );
    expect(memberDetails).toMatchSnapshot();
});



import React from 'react';
import RepoList from './index';

test('RepoList should match snapshot', () => {
    const list = [];

    const repoList = shallow(
        <RepoList repoList={list} />
    );
    expect(repoList).toMatchSnapshot();
});



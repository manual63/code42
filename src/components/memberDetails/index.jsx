import React from 'react';

import RepoList from '../repoList';

class MemberDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const memberDetails = this.props.memberDetails;
        console.log(memberDetails.repos_url);
        if (memberDetails.login) {
            console.log(memberDetails.repos_url);
            return (
                <div>
                    <h1>Member Details</h1>
                    <div>{memberDetails.login}</div>
                    <div><img src={memberDetails.avatar_url} /></div>
                    <RepoList reposUrl={memberDetails.repos_url} />
                </div>
            ); 
        } else {
            return (
                <div></div>
            );
        }

    }
}

export default MemberDetail;
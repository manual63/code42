import React from 'react';
import PropTypes from 'prop-types';

import RepoList from '../repoList';

class MemberDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const memberDetails = this.props.memberDetails;

        if (memberDetails.login) {
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

MemberDetail.propTypes = {
    memberDetails: PropTypes.object
}

export default MemberDetail;
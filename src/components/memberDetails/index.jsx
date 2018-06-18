import React from 'react';
import PropTypes from 'prop-types';

import RepoList from '../repoList';

import styles from './styles.less';

class MemberDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const memberDetails = this.props.memberDetails;

        if (memberDetails.name) {
            return (
                <div className={styles.wrapper}>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Member Details</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"><img src={memberDetails.imageUrl} /></div>
                        <div className="col-md-9">
                            <div>{memberDetails.name}</div>
                            <div>{memberDetails.location}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <RepoList repoList={this.props.memberRepoList} />
                        </div>
                    </div>
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
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.less';

class Members extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const members = this.props.members;

        return (
            <div className={styles.listWrapper}>
                <h2>Member List</h2>
                <ul>
                    {
                        members.map(member => {
                            return <li onClick={() => this.props.showMemberDetails(member.id)}>{member.login}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

Members.propTypes = {
    members: PropTypes.array
}

export default Members;
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
                <h3>Member List</h3>
                <ul>
                    {
                        members.map(member => {
                            return (
                                <li onClick={() => this.props.getMemberDetails(member.id)} className={this.props.selectedMember === member.id ? styles.active : ''}>
                                    {member.login}
                                </li>
                            )
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
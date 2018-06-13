import React from 'react';

import Members from '../members';
import MemberDetails from '../memberDetails';

class MemberLayout extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <Members/>
                </div>
                <div className="col-md-9">
                    <MemberDetails/>
                </div>
            </div>
        );
    }
}

export default MemberLayout;
import React from 'react';

class RepoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repoList: []
        }

        fetch(this.props.reposUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({'repoList': this.state.repoList});
        });
    }

    componentDidMount() {
        console.log(this.props.reposUrl);

    }

    render() {
        const repoList = this.state.repoList;

        return (
            <div>
                <div>Repos</div>
                <ul>
                {
                    repoList.map(repo => {
                        return <li>{repo.name}</li>;
                    })
                }
                </ul>
            </div>
        );
    }
}

export default RepoList;
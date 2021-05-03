import React, { Component } from "react";
import * as actions from "../store/actions/index";
import { connect } from 'react-redux';

class ReduxTest extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.retrieveUserFromToken()
    }

    render() {
        return <div>
            <h1>this is test page</h1>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        username: state.auth.username,
        fullname: state.auth.fullname,
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        signin: (username, password, remember) =>
            dispatch(actions.signin(username, password, remember)),
        register: (username, email, password, first_name, last_name, remember) =>
            dispatch(actions.register(username, email, password, first_name, last_name, remember)),
        signout: (token) => dispatch(actions.signout(token)),
        retrieveUserFromToken: (token) => dispatch(actions.retrieveUserFromToken(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
import React, { Component } from "react";
import * as actions from "../store/actions/index";
import { connect, useSelector } from 'react-redux';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function ReduxTest(props) {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        console.log(auth)
        dispatch(actions.retrieveUserFromToken(auth.token))
    }, [])




    return <div>
        <h1>this is test page</h1>
        <p>{auth.loading}</p>
    </div>
}

// const mapStateToProps = (state) => {
//     return {
//         loading: state.auth.loading,
//         error: state.auth.error,
//         username: state.auth.username,
//         fullname: state.auth.fullname,
//         token: state.auth.token,
//         userId: state.auth.userId,
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         signin: (username, password, remember) =>
//             dispatch(actions.signin(username, password, remember)),
//         register: (username, email, password, first_name, last_name, remember) =>
//             dispatch(actions.register(username, email, password, first_name, last_name, remember)),
//         signout: (token) => dispatch(actions.signout(token)),
//         retrieveUserFromToken: (token) => dispatch(actions.retrieveUserFromToken(token))
//     };
// };

export default ReduxTest;
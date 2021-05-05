
import { useState } from 'react';
import Login from '../General/Components/Auth/Login'
import Register from '../General/Components/Auth/Register'

import { signout } from '../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';

export default function Auth() {
    const [state, changeState] = useState(0);
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return auth.userId
        ? <button onClick={() => dispatch(signout())}>Log out</button>
        : <div>
            <button
                onClick={
                    () => {
                        changeState(state === 0 ? 1 : 0)
                    }
                }
            >To {state === 0 ? "login" : "register"}</button>
            {state === 0
                ? <Register />
                : <Login />
            }
        </div>
}

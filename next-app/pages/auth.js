
import { useState } from 'react';
import Login from '../General/Components/Auth/Login'
import Register from '../General/Components/Auth/Register'
export default function Auth() {
    const [state, changeState] = useState(0);
    return (
        <div>
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
    );
}

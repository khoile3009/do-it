import { useState } from 'react';
import { register } from '../../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

export default function Register(props) {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    const [email, changeEmail] = useState('');
    const [first_name, changeFirstname] = useState('');
    const [last_name, changeLastname] = useState('');
    const [phone_number, changePhoneNumber] = useState('');
    const [checked, check] = useState(false);

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return <div>
        <h1>Register</h1>
        <form onSubmit={
            (event) => {
                event.preventDefault()
                dispatch(register(username, email, password, first_name, last_name, parseInt(phone_number), checked))
            }
        }>
            <input type="text" placeholder="username" onChange={(event) => changeUsername(event.target.value)} value={username} />
            <input type="password" placeholder="password" onChange={(event) => changePassword(event.target.value)} value={password} />
            <input type="text" placeholder="email" onChange={(event) => changeEmail(event.target.value)} value={email} />
            <input type="text" placeholder="first name" onChange={(event) => changeFirstname(event.target.value)} value={first_name} />
            <input type="text" placeholder="last name" onChange={(event) => changeLastname(event.target.value)} value={last_name} />
            <input type="number" placeholder="phone number" onChange={(event) => changePhoneNumber(event.target.value)} value={phone_number} />
            <input type="checkbox" onChange={(event) => check(event.target.checked)} checked={checked} />
            <button type="submit">Submit</button>
        </form>

    </div>

}
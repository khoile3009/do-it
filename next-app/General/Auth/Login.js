import { useState } from "react";
import { signin } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Login(props) {
	const [username, changeUsername] = useState("");
	const [password, changePassword] = useState("");
	const [checked, check] = useState(false);
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	return (
		<div>
			<h1>Login</h1>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					dispatch(signin(username, password, checked));
				}}
			>
				<input
					type="text"
					placeholder="username"
					onChange={(event) => changeUsername(event.target.value)}
					value={username}
				/>
				<input
					type="password"
					placeholder="password"
					onChange={(event) => changePassword(event.target.value)}
					value={password}
				/>
				<input
					type="checkbox"
					onChange={(event) => check(event.target.checked)}
					checked={checked}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

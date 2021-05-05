import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveUserFromToken } from "../../store/actions/index";

export default function Initializer() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    // This is a replacement for component did mount because it launch once with no other condition to launce
    useEffect(() => {
        if (!auth.userId) {
            dispatch(retrieveUserFromToken(auth.token))
        }
    }, [])

    return null;
}


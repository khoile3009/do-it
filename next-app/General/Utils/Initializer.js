import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveUserFromToken } from "../../store/actions/index";

export default function Initializer() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        if (!auth.userId) {
            dispatch(retrieveUserFromToken(auth.token))
        }

    }, [])

    return null;
}


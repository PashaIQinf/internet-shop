import {useSelector} from "react-redux"

export function useAuth() {
    const {email, token, id} = useSelector(state=> state.user);

    return {
        isAuth: !!email,
        isUid: !!id,
        email,
        token,
        id,

    };
}
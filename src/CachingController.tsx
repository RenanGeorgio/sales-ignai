import { useEffect } from "react"
import useAuth from "./hooks/useAuth";
import { connect, useDispatch } from "react-redux";

const CachingController = () => {
    const { isAuthenticated, user } = useAuth();

    console.log(user)
    useEffect(() => {
        if(isAuthenticated){
           console.log(user)
        }
    }, [isAuthenticated])

    return null;
}

export default connect()(CachingController);
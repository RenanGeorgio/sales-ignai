import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { connect, useDispatch } from "react-redux";
import authApi from "./services/auth";
import { userActions } from "./store/store";
import { useQuery } from "react-query";

const CachingController = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  const { data, error } = useQuery("user", async () => {
    const response = await authApi.get("/user");
    return response.data;
  }, {
    staleTime: 1000 * 60
  });

  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(userActions.updateUser(data));
    }
  }, [data, dispatch]);

  return null;
};

export default connect()(CachingController);

import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { connect, useDispatch } from "react-redux";
import authApi from "./services/auth";
import { userActions, leadsActions } from "./store/store";
import { useQuery } from "react-query";

const CachingController = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  // tratar possíveis erros, adicionando status offline etc
  const { data, error } = useQuery(
    "appData",
    async () => {
      const userRequest = authApi.get("/user");
      const leadsRequest = authApi.get("/leads");

      const [user, leads] = await Promise.all([userRequest, leadsRequest]).then(function (
        values
      ) {
        return values;
      });
      return { user: user.data, leads: leads.data };
    },
    {
      staleTime: 1000 * 60,
      enabled: isAuthenticated,
    }
  );

  useEffect(() => {
    if (data) {
      const { user, leads } = data;
      dispatch(userActions.updateUser(user));
      dispatch(leadsActions.updateLeads(leads));
    }
  }, [data, dispatch]);

  return null;
};

export default connect()(CachingController);

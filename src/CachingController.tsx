import { useEffect } from "react";
import { AxiosError, isAxiosError } from "axios";
import { useQuery } from "react-query";
import { connect, useDispatch } from "react-redux";
import useAuth from "@hooks/useAuth";
import authApi from "@services/auth";
import { userActions, leadsActions } from "@store/store";

const CachingController = () => {
  const { isAuthenticated, signOut } = useAuth();
  const dispatch = useDispatch();

  // tratar possíveis erros, adicionando status offline etc
  const { data } = useQuery(
    "appData",
    async () => {
      const userRequest = authApi.get("/user");
      const leadsRequest = authApi.get("/leads");

      const [user, leads]: any = await Promise.all([userRequest, leadsRequest]).then(function (values) {
        return values;
      }).catch(function (e) {
        if(isAxiosError(e)) {
          if (e.response?.status === 403 || e.response?.status === 401) {
            signOut();
          }
          if(e.code === "ERR_NETWORK") {
            alert("Você está offline");
          }
        }
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
}

export default connect()(CachingController);
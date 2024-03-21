import { useEffect } from "react";
import { AxiosError, isAxiosError } from "axios";
import { useQuery } from "react-query";
import { connect, useDispatch } from "react-redux";
import useAuth from "@hooks/useAuth";
import { authApi } from "@services";
import { userActions, leadsActions, clientsActions } from "@store/store";

const CachingController = () => {
  const { isAuthenticated, signOut } = useAuth();
  const dispatch = useDispatch();

  // Implementar RTK Query no lugar do React Query e melhorar controle do cache
  const { data } = useQuery(
    "appData",
    async () => {
      const userRequest = authApi.get("/user");
      const leadsRequest = authApi.get("/leads");
      const clientsRequest = authApi.get("/clients");

      const [user, leads, clients]: any | AxiosError = await Promise.all([
        userRequest,
        leadsRequest,
        clientsRequest,
      ])
        .then(function (values) {
          return values;
        })
        .catch(function (e) {
          if (isAxiosError(e)) {
            if (e.response?.status === 403 || e.response?.status === 401) {
              signOut();
            }
            if (e.code === "ERR_NETWORK") {
              alert("Você está offline");
            }
          }
        });
      return { user: user.data, leads: leads.data, clients: clients.data };
    },
    {
      staleTime: 1000 * 60,
      enabled: isAuthenticated,
    }
  );

  useEffect(() => {
    if (data) {
      const { user, leads, clients } = data;
      dispatch(userActions.updateUser(user));
      dispatch(leadsActions.updateLeads(leads));
      dispatch(clientsActions.updateClients(clients));
    }
  }, [data, dispatch]);

  return null;
}

export default connect()(CachingController);
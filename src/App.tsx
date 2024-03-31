import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Sidebar from "@components/Sidebar";
import { AuthProvider } from "@contexts/auth/provider/AuthProvider";
import SignInPage from "@pages/Auth/SignInPage";
import { persistor, store } from "@store/store";
import { SidebarProvider } from "@contexts/sidebar/SidebarContext";
import NotFound from "@components/NotFound";
import { ChatProvider } from "@contexts/chat/ChatContext";
import CachingController from "./CachingController";
import RequireAuth from "./RequireAuth";
import Anonymous from "./Anonymous";
import { routes } from "@routes";
import "@styles/app.module.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <CachingController />
          <ChatProvider>
            <SidebarProvider>
              <div className="app-container">
                <Sidebar />
                <Routes>
                  <Route element={<Anonymous />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    {/* <Route path='/sign-up' element={<SignUpPage/>} /> */}
                  </Route>
                  <Route element={<RequireAuth />}>
                    {routes.map(({ path, Component }) => (
                      <Route key={path} path={path} element={<Component />} />
                    ))}
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </SidebarProvider>
          </ChatProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
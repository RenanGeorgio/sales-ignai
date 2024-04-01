import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "@contexts/auth/provider/AuthProvider";
import { persistor, store } from "@store/store";
import { SidebarProvider } from "@contexts/sidebar/SidebarContext";
import { ChatProvider } from "@contexts/chat/ChatContext";
import CachingController from "./CachingController";
import { Main } from "@views";
import "@styles/app.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <CachingController />
          <ChatProvider>
            <SidebarProvider>
              <div className="app-container">
                <Main />
              </div>
            </SidebarProvider>
          </ChatProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
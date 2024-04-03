import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBot from "./pages/ChatBot";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import Suporte from "./pages/Suporte";
import Whatsapp from "./pages/Whatsapp";
import Configuracoes from "./pages/Configuracoes";
import Forms from "./pages/Forms";
import Chat from "./pages/Chat";
import Leads from "./pages/Leads";
import Statistics from "./pages/Statistics";
import Calendar from "./pages/Calendar";
import Negocios from "./pages/Business";
import Contact from "./pages/Contacts";
import Details from "./pages/Details";
import Invoice from "./pages/Invoice";
import EmailLogin from "./components/Email/login/login"
import CachingController from "./CachingController";
import { AuthProvider } from "./contexts/auth/provider/AuthProvider";
import SignInPage from "./pages/Auth/SignInPage";
import RequireAuth from "./RequireAuth";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import Anonymous from "./Anonymous";
import { SidebarProvider } from "./contexts/sidebar/SidebarContext";
import "./styles/app.css";
import NotFound from "./components/NotFound/NotFound";
import { ChatProvider } from "./contexts/chat/ChatContext";
import EmailAutomation from "pages/EmailAutomation";

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
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/formulario" element={<Forms />} />
                    <Route path="/email" element={<Email />} />
                    <Route path="/emailautomation" element={<EmailAutomation />} />
                    <Route path="/email-login" element={<EmailLogin />} />
                    <Route path="/estatisticas" element={<Statistics />} />
                    <Route path="/chatbot" element={<ChatBot />} />
                    <Route path="/whatsapp" element={<Whatsapp />} />
                    <Route path="/configuracoes" element={<Configuracoes />} />
                    <Route path="/suporte" element={<Suporte />} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/negocios" element={<Negocios />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact/details" element={<Details />} />
                    <Route path="/invoice" element={<Invoice />} />
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

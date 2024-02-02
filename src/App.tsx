import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Sidebar from './components/Sidebar';
import ChatBot from './pages/ChatBot';
import Dashboard from './pages/Dashboard';
import Email from './pages/Email';
import Suporte from './pages/Suporte';
import Whatsapp from './pages/Whatsapp';
import Configuracoes from './pages/Configuracoes';
import Forms from './pages/Forms';
import Chat from './pages/Chat';
import Leads from  './pages/Leads';
import Layout from './components/Layout/Layout';
import Statistics from './pages/Statistics';
import Calendar from './pages/Calendar';
import CachingController from './CachingController';
import { AuthProvider } from './context/provider/authProvider';
import SignInPage from './pages/Auth/SignInPage';
import RequireAuth from './RequireAuth';


import { Provider } from 'react-redux'
import store from './store/store';

function App() {
  return (
    <Provider store={store} >
      <CachingController />
      <AuthProvider>
       <Sidebar />
        <Routes>
          <Route path='/sign-in' element={<SignInPage/>} />
          <Route  element={<RequireAuth/>} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/formulario" element={<Forms />} />
            <Route path="/email" element={<Email />} />
            <Route path="/estatisticas" element={<Statistics />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/whatsapp" element={<Whatsapp />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/leads" element={<Leads />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;

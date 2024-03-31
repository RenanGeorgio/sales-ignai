import ChatBot from "@pages/ChatBot";
import Dashboard from "@pages/Dashboard";
import Email from "@pages/Email";
import Suporte from "@pages/Suporte";
import Whatsapp from "@pages/Whatsapp";
import Configuracoes from "@pages/Configuracoes";
import Forms from "@pages/Forms";
import Chat from "@pages/Chat";
import Leads from "@pages/Leads";
import Statistics from "@pages/Statistics";
import Calendar from "@pages/Calendar";
import Negocios from "@pages/Business";
import Contact from "@pages/Contacts";
import Details from "@pages/Details";
import Invoice from "@pages/Invoice";
import EmailLogin from "@components/Email/login/login"

import slugs from "./slugs";

type Route = {
  path: string;
  Component: (() => JSX.Element) | React.FC<{}>;
  name: string;
  isVisible?: boolean;
};

const routes: Route[] = [
  {
    path: '/',
    Component: Dashboard,
    name: 'Home',
    isVisible: true,
  },
  {
    path: '/chat',
    Component: Chat,
    name: 'Chat',
    isVisible: true,
  },
  {
    path: '/calendar',
    Component: Calendar,
    name: 'Calendar',
    isVisible: true,
  },
  {
    path: '/chatbot',
    Component: ChatBot,
    name: 'Chatbot',
    isVisible: true,
  },
  {
    path: '/contact',
    Component: Contact,
    name: 'Contact',
    isVisible: true,
  },
  {
    path: '/contact/details',
    Component: Details,
    name: 'Details',
    isVisible: true,
  },
  {
    path: '/formulario',
    Component: Forms,
    name: 'Formulario',
    isVisible: true,
  },
  {
    path: '/email',
    Component: Email,
    name: 'Email',
    isVisible: true,
  },
  {
    path: '/email-login',
    Component: EmailLogin,
    name: 'Email Login',
    isVisible: true,
  },
  {
    path: '/estatisticas',
    Component: Statistics,
    name: 'Estatisticas',
    isVisible: true,
  },
  {
    path: '/whatsapp',
    Component: Whatsapp,
    name: 'Whatsapp',
    isVisible: true,
  },
  {
    path: '/configuracoes',
    Component: Configuracoes,
    name: 'Configuracoes',
    isVisible: true,
  },
  {
    path: '/suporte',
    Component: Suporte,
    name: 'Suporte',
    isVisible: true,
  },
  {
    path: '/leads',
    Component: Leads,
    name: 'Leads',
    isVisible: true,
  },
  {
    path: '/invoice',
    Component: Invoice,
    name: 'Invoice',
    isVisible: true,
  },
  {
    path: '/negocios',
    Component: Negocios,
    name: 'Negocios',
    isVisible: true,
  }
];

export {
  routes,
  slugs
}
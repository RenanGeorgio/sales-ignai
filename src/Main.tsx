import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import { routes } from "@routes";
import { Routes, Route } from 'react-router-dom';
import '@styles/global.scss';
import { classes } from '@utils/classes';
import useTheme from './hooks/useTheme';

function Main() {
  // eslint-disable-next-line no-console
  console.log('source map enabled in development mode');
  const yourEnvVariable = process.env.REACT_APP_YOUR_ENV_VARIABLE;
  // eslint-disable-next-line no-console
  console.log(yourEnvVariable);

  const { mode } = useTheme();

  return (
    <div className="app-container">
      <Header />
      <main className={classes('main', mode)}>
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
      </main>
      <Footer />
    </div>
  );
}

export default Main;
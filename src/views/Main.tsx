import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "@components/Layout";
import Sidebar from "@components/Sidebar";
import SignInPage from "@pages/Auth/SignInPage";
import NotFound from "@components/NotFound";
import RequireAuth from "../RequireAuth";
import Anonymous from "../Anonymous";
import { routes } from "@routes";
import { classes } from "@utils/classes";
import useTheme from "@hooks/useTheme";
import "@styles/global.scss";

function Main() {
  // eslint-disable-next-line no-console
  console.log('source map enabled in development mode');
  const yourEnvVariable = process.env.REACT_APP_YOUR_ENV_VARIABLE;
  // eslint-disable-next-line no-console
  console.log(yourEnvVariable);

  const { mode } = useTheme();

  return (
    <>
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
    </>
  );
}

export default Main;
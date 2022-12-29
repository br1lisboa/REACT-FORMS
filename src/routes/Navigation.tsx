import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { FormikAbstract, FormikBasicPage, FormikComponents, FormikYouPage, RegisterPage } from "../forms/pages";

import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formikyup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formikcomponent" activeClassName="nav-active" exact>Formik Component</NavLink>
            </li>
            <li>
              <NavLink to="/formikabstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik">
            <FormikBasicPage />
          </Route>
          <Route path="/formikyup">
            <FormikYouPage />
          </Route>
          <Route path="/formikcomponent">
            <FormikComponents />
          </Route>
          <Route path="/formikabstraction">
            <FormikAbstract />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
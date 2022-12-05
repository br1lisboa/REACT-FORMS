import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { RegisterPage } from '../forms/pages/RegisterPage';

import logo from '../logo.svg';
import { FormikBasicPage } from '../forms/pages/FormikBasicPage';
import { FormikYouPage } from '../forms/pages/FormikYupPage';


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
        </Switch>
      </div>
    </Router>
  );
}
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// components 
import AdminToolbar from './components/AdminToolbar';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts //
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
 
// pages //
import Homepage from './pages/Homepage';
import About from './pages/About';
import EmployeeRegistration from './pages/EmployeeRegistration';
import EmployerRegistration from './pages/EmployerRegistration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import './default.scss';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, [])

    return (
      <div className="App">
        <AdminToolbar />
        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} 
          />
          <Route path='/employeeregistration' render={() =>  (
            <MainLayout>
              <EmployeeRegistration />
            </MainLayout>
          )} />
          <Route path='/employerregistration' render={() =>  (
            <MainLayout>
              <EmployerRegistration />
            </MainLayout>
          )} />
          <Route path='/login' 
          render={() =>  (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
          <Route path='/recovery' render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path='/dashboard' render={() => (
          <WithAuth>
          <MainLayout>
            <Dashboard />
          </MainLayout>
          </WithAuth>
        )} />
        <Route path='/about'
        render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )} />
        <Route path='/admin' render={() => ( 
          <WithAdminAuth>
          <MainLayout>
            <Admin />
          </MainLayout>   
          </WithAdminAuth>
        )} />
        </Switch>
      </div>
    );
  }

export default App;

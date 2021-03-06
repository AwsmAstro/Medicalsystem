import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
// import CustomerListView from 'src/views/patients/PatientsView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
// import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
// import SettingsView from 'src/views/settings/SettingsView';
import FormView from 'src/views/loadForm/FormView';
import PatientsView from 'src/views/patients/PatientsView';
import MedicalForm from './views/medicalForm/MedicalFormView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'accounts', element: <AccountView /> },
      { path: 'patients', element: <PatientsView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'medicalform', element: <MedicalForm /> },
      { path: 'loadForm', element: <FormView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;

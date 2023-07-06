import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeScreen from './components/Home/HomeScreen';
import LoadingScreen from './components/Start/LoadingScreen';
import StartScreen from './components/Start/StartScreen';
import Main1 from './components/Main/Main1';
import Login from './components/Login/Login';
import LoginPopup from './components/Popup/LoginPopup';
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <StartScreen /> },
      { path: '/loadingscreen', element: <LoadingScreen /> },
      { path: '/startscreen', element: <StartScreen /> },
      { path: '/homescreen', element: <HomeScreen /> },
      { path: '/mainscreen1', element: <Main1 /> },
      { path: '/login_popup', element: <LoginPopup /> },
      { path: '/loginscreen', element: <Login /> },
    ],
  },
  {
    path: '/loginscreen',
    element: <Login />,
    children: [{ index: true, element: <Login /> }],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
const id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={id}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
import Notice from './components/Notice/Notice';
import Join from './components/Join/Join';
import JoinEmail from './components/Join/Joins/JoinEmail';
import JoinPw from './components/Join/Joins/JoinPw';
import JoinName from './components/Join/Joins/JoinName';
import JoinPhone from './components/Join/Joins/JoinPhone';
import JoinSkill from './components/Join/Joins/JoinSkill';
import JoinPhoto from './components/Join/Joins/JoinPhoto';
import JoinTerms from './components/Join/Joins/JoinTerms';
import JoinComplete from './components/Join/Joins/JoinComplete';

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
      { path: '/joinscreen', element: <Join /> },
      { path: '/noticescreen', element: <Notice /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <Join /> },
      { path: '/joinemail', element: <JoinEmail /> },
      { path: '/joinpw', element: <JoinPw /> },
      { path: '/joinname', element: <JoinName /> },
      { path: '/joinphone', element: <JoinPhone /> },
      { path: '/joinskill', element: <JoinSkill /> },
      { path: '/joinphoto', element: <JoinPhoto /> },
      { path: '/jointerms', element: <JoinTerms /> },
      { path: '/joincomplete', element: <JoinComplete /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

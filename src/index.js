import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeScreen from './components/Home/HomeScreen';
import LoadingScreen from './components/Start/LoadingScreen';
import StartScreen from './components/Start/StartScreen';
import Login from './components/Login/Login';
import LoginPopup from './components/Popup/LoginPopup';
import Notice from './components/Notice/Notice';
import Join from './components/Join/Join';
import JoinEmail from './components/Join/Joins/JoinEmail';
import JoinCheckEmail from './components/Join/Joins/JoinCheckEmail';
import JoinPw from './components/Join/Joins/JoinPw';
import JoinName from './components/Join/Joins/JoinName';
import JoinPhone from './components/Join/Joins/JoinPhone';
import JoinSkill from './components/Join/Joins/JoinSkill';
import JoinPhoto from './components/Join/Joins/JoinPhoto';
import JoinTerms from './components/Join/Joins/JoinTerms';
import JoinComplete from './components/Join/Joins/JoinComplete';
import Main1 from './components/Main/Main1/Main1';
import Main2 from './components/Main/Main2';
import Main3 from './components/Main/Main3';
import Main4 from './components/Main/Main4/Main4';
import Main5 from './components/Main/Main5/Main5';
import Main6 from './components/Main/Main6/Main6';
import Main7 from './components/Main/Main7/Main7';
import Main8 from './components/Main/Main8/Main8';
import Main9 from './components/Main/Main9';
import FindId from './components/Login/FindIdPw/FindId';
import FindPw from './components/Login/FindIdPw/FindPw';
import ShowId from './components/Login/FindIdPw/ShowId';
import ShowPw from './components/Login/FindIdPw/ShowPw';

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
      { path: '/joincheckemail', element: <JoinCheckEmail /> },
      { path: '/joinpw', element: <JoinPw /> },
      { path: '/joinname', element: <JoinName /> },
      { path: '/joinphone', element: <JoinPhone /> },
      { path: '/joinskill', element: <JoinSkill /> },
      { path: '/joinphoto', element: <JoinPhoto /> },
      { path: '/jointerms', element: <JoinTerms /> },
      { path: '/joincomplete', element: <JoinComplete /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <Main1 /> },
      { path: '/main1', element: <Main1 /> },
      { path: '/main2', element: <Main2 /> },
      { path: '/main3', element: <Main3 /> },
      { path: '/main4', element: <Main4 /> },
      { path: '/main5', element: <Main5 /> },
      { path: '/main6', element: <Main6 /> },
      { path: '/main7', element: <Main7 /> },
      { path: '/main8', element: <Main8 /> },
      { path: '/main9', element: <Main9 /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: '/findid', element: <FindId /> },
      { path: '/findpw', element: <FindPw /> },
      { path: '/showid', element: <ShowId /> },
      { path: '/showpw', element: <ShowPw /> },
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

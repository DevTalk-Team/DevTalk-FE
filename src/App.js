import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/Home/HomeScreen';
import LoadingScreen from './components/Start/LoadingScreen';
import StartScreen from './components/Start/StartScreen';

const router = createBrowserRouter([
  {
    path: '/',
    //element: <Root />,
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <StartScreen /> },
      { path: '/loadingscreen', element: <LoadingScreen /> },
      { path: '/startscreen', element: <StartScreen /> },
      { path: '/homescreen', element: <HomeScreen /> },
    ],
  },
  // {
  //     path:'/videos',
  //     element: <Videos/>,
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

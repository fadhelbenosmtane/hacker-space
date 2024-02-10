import './App.css';
import MyEvent from './components/home page/MyEvent';
import HomePage from './components/home page/HomePage';
import NotificationPage from './components/home page/Notification';
import { BrowserRouter, Routes,Route } from 'react-router-dom'; // Use Route instead of Routes
import Layout from './components/home page/Layout';
import ReactDOM from "react-dom/client";



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/my-event" element={<MyEvent />} /> 
        <Route path="/notification" element={<NotificationPage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

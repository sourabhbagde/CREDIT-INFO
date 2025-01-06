import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCards from './pages/MyCards';
import SpendingTracker from './pages/SpendingTracker';
import Settings from './pages/Settings';
import SideBar from './components/SideBar';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* rendering the NavigationBar inside the Router */}
        {/* title is passed as props to NavigrationBar.jsx */}
        <MenuIcon className="menu-icon" />
        <NavigationBar title="Credit Info" />

        <SideBar />

        <Routes>
          {/* usage of exact for the path - do not partial render for a component. */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-cards" element={<MyCards />} />
          <Route exact path="/spending-tracker" element={<SpendingTracker />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>

        {/* this is a sidebar menu for items.     */}
      </BrowserRouter>
    </div>
  );
}

export default App;

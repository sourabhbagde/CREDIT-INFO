import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCards from './pages/MyCards';
import SpendingTracker from './pages/SpendingTracker';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      {/* rendering the NavigationBar inside the Router */}
      {/* title is passed as props to NavigrationBar.jsx */}

      <NavigationBar title="Credit Info" />
      <Routes>
        {/* usage of exact for the path - do not partial render for a component. */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my-cards" element={<MyCards />} />
        <Route exact path="/spending-tracker" element={<SpendingTracker />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

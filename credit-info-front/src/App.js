import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      {/* here title is passed as props to NavigrationBar.jsx */}
      <NavigationBar title="Credit Info" />
    </div>
  );
}

export default App;

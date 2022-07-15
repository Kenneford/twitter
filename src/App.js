
import './App.css';
import LeftPane from './components/LeftPane';
import MainPane from './components/MainPane';
import RightPane from './components/RightPane';

function App() {
  return (
    <div className="App">
      <LeftPane />
      <MainPane />
      <RightPane />
    </div>
  );
}

export default App;

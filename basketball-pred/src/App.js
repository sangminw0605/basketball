import './App.css';
import Header from './components/header.js';
import Progress from './components/prog.js';

import { Helmet } from 'react-helmet';

import Sidebar from './components/sidebar.js';


function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #1f2937; }'}</style>
      </Helmet>

      <Sidebar />
      <Progress />
    </div>

  );
}

export default App;

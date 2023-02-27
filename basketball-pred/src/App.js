import './App.css';
import Footer from './components/footer.js';
import Progress from './components/prog.js';

import { Helmet } from 'react-helmet';

import Table from './components/table.js';

import Sidebar from './components/sidebar.js';


function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #dadada; }'}</style>
      </Helmet>

      <Sidebar />
      <Progress />
      <Table />
      
    </div>
  );
}

export default App;

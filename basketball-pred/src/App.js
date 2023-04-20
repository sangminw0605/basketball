import { Route, Routes, Link } from "react-router-dom";
import React, { Component } from "react";

import csvFile from './win_predictions.csv';
import Papa from 'papaparse';
import { Helmet } from 'react-helmet';
import Table from './components/table.js';

class App extends Component {
  state = {
    games: []
  }

  componentDidMount() {
    let temp = [];
    Papa.parse(csvFile, {
      download: true,
      step: function (row) {
        temp.push(row.data)
      },
    });
    this.setState(() => ({
      games: temp
    }));
  }


  render() {

    //console.log(this.state.games);


    return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #dadada; }'}</style>
        </Helmet>

        <Table games={this.state.games} />

      </div>
    );
  }
}

export default App;

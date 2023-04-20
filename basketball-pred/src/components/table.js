import Game from './game';
import React, { Component } from "react";


class Table extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        this.setState(() => ({
          games: this.props.games
        }));
      }

    render() {
        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Teams
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Predicted Winner
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Game info={this.props.games[0]} />
                        <Game info={this.props.games[1]} />
                        <Game info={this.props.games[2]} />
                        <Game info={this.props.games[3]} />
                        <Game info={this.props.games[4]} />
                        <Game info={this.props.games[5]} />
                        <Game info={this.props.games[6]} />
                        <Game info={this.props.games[7]} />
                        <Game info={this.props.games[8]} />
                        <Game info={this.props.games[9]} />
                        <Game info={this.props.games[10]} />
                        <Game info={this.props.games[11]} />
                        <Game info={this.props.games[12]} />
                        <Game info={this.props.games[13]} />
                        <Game info={this.props.games[14]} />
                        <Game info={this.props.games[15]} />
                        <Game info={this.props.games[16]} />
                        <Game info={this.props.games[17]} />
                        <Game info={this.props.games[18]} />
                        <Game info={this.props.games[19]} />
                        <Game info={this.props.games[20]} />
                        <Game info={this.props.games[21]} />
                        <Game info={this.props.games[22]} />
                        <Game info={this.props.games[23]} />
                        <Game info={this.props.games[24]} />
                        <Game info={this.props.games[25]} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
import celtics from '../resources/celts.png';
import sixers from '../resources/sixers.png';
import pelicans from '../resources/pelicans.png';
import knicks from '../resources/knicks.png';
import bucks from '../resources/bucks.png';
import suns from '../resources/suns.png';
import cavaliers from '../resources/cavaliers.png';
import raptors from '../resources/raptors.png';
import hornets from '../resources/hornets.png';
import timberwolves from '../resources/timberwolves.png';
import nets from '../resources/nets.png';
import nuggets from '../resources/nuggets.png';
import rockets from '../resources/rockets.png';
import lakers from '../resources/lakers.png';
import jazz from '../resources/jazz.png';
import spurs from '../resources/spurs.png';
import heat from '../resources/heat.png';
import pistons from '../resources/pistons.png';
import wizards from '../resources/wizards.png';
import warriors from '../resources/warriors.png';
import hawks from '../resources/hawks.png';
import pacers from '../resources/pacers.png';
import clippers from '../resources/clippers.png';
import bulls from '../resources/bulls.png';
import blazers from '../resources/blazers.png';
import thunder from '../resources/thunder.png';
import mavs from '../resources/mavs.png';
import grizzlies from '../resources/grizzlies.png';
import kings from '../resources/kings.png';
import magic from '../resources/magic.png';

function Game(props) {
    if (!props.info) {
        return <></>;
    }
    //let info = ['LAL vs LAC: today LAC WIN'][0].split(' ');


    let dict = {
        'BOS': ['BOS', 'Boston Celtics', celtics],
        'CLE': ['CLE', 'Cleveland Cavaliers', cavaliers],
        'ORL': ['ORL', 'Orlando Magic', magic],
        'TOR': ['TOR', 'Toronto Raptors', raptors],
        'CHA': ['CHA', 'Charlotte Hornets', hornets],
        'MIN': ['MIN', 'Minnesota Timberwolves', timberwolves],
        'BKN': ['BKN', 'Brooklyn Nets', nets],
        'PHI': ['PHI', 'Philadelphia 76ers', sixers],
        'NOP': ['NOP', 'New Orleans Pelicans', pelicans],
        'DEN': ['DEN', 'Denver Nuggets', nuggets],
        'NYK': ['NYK', 'New York Knicks', knicks],
        'HOU': ['HOU', 'Houston Rockets', rockets],
        'LAL': ['LAL', 'Los Angeles Lakers', lakers],
        'MIL': ['MIL', 'Milwaukee Bucks', bucks],
        'PHX': ['PHX', 'Phoenix Suns', suns],
        'UTA': ['UTA', 'Utah Jazz', jazz],
        'SAS': ['SAS', 'San Antonio Spurs', spurs],
        'MIA': ['MIA', 'Miami Heat', heat],
        'DET': ['DET', 'Detroit Pistons', pistons],
        'WAS': ['WAS', 'Washington Wizards', wizards],
        'GSW': ['GSW', 'Golden State Warriors', warriors],
        'ATL': ['ATL', 'Atlanta Hawks', hawks],
        'IND': ['IND', 'Indiana Pacers', pacers],
        'LAC': ['LAC', 'Los Angeles Clippers', clippers],
        'CHI': ['CHI', 'Chicago Bulls', bulls],
        'POR': ['POR', 'Portland Trailblazers', blazers],
        'OKC': ['OKC', 'Oklahoma City Thunder', thunder],
        'DAL': ['DAL', 'Dallas Mavericks', mavs],
        'MEM': ['MEM', 'Memphis Grizzlies', grizzlies],
        'SAC': ['SAC', 'Sacramento Kings', kings],
    };

   // console.log(props);
    let info = props.info[0].split(' ');

    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img class="w-10 h-10 rounded-full" src={dict[info[0]][2]} />
                <div class="pl-3">
                    <div class="text-base font-bold">{dict[info[0]][1]}</div>
                </div>
            </th>
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img class="w-10 h-10 rounded-full" src={dict[info[2].substring(0, 3)][2]} />
                <div class="pl-3">
                    <div class="text-base font-bold">{dict[info[2].substring(0, 3)][1]}</div>
                </div>
            </th>
            <td class="px-6 py-4">
                <div class="flex items-center">
                {info[3]}
                </div>
            </td>
            <td class="px-6 py-4">
                {info[4]}
            </td>
        </tr>
    );
}

export default Game;
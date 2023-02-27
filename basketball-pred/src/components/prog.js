import celtics from '../celts.png';
import sixers from '../sixers.png';
import pelicans from '../pelicans.png';
import knicks from '../knicks.png';
import bucks from '../bucks.png';
import suns from '../suns.png';


function Progress() {
    return (
        <div style={{ "padding-left": '200px'}} class="grid grid-cols-8 gap-4 mt-2">
            <div class="col-start-2 col-end-8 text-lg font-extrabold">
                Saturday, February 25th
            </div>

            <div class="flex col-start-2 items-center text-lg">
                <img class="mr-3" src={celtics} />
                Boston Celtics
            </div>
            <div class="flex col-end-8 text-lg">
                Philadelphia 76ers
                <img class="ml-3" src={sixers} />
            </div>
            <div class="col-start-2 col-end-8 ...">
                <div class="relative pt-1">
                    <div class=" overflow-hidden h-5 mb-4 text-xs flex rounded bg-amber-200">
                        <div style={{ "width": "63%" }} class="font-extrabold shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-green-500">63%</div>
                        <div style={{ "width": "37%" }} class="font-extrabold shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-white">37%</div>
                    </div>
                </div>
            </div>

            <div class="flex col-start-2 items-center text-lg">
                <img class="mr-3" src={knicks} />
                New York Knicks
            </div>
            <div class="flex col-end-8 text-lg">
                New Orleans Pelicans
                <img class="ml-3" src={pelicans} />
            </div>
            <div class="col-start-2 col-end-8 ...">
                <div class="relative pt-1">
                    <div class=" overflow-hidden h-5 mb-4 text-xs flex rounded bg-amber-200">
                        <div style={{ "width": "51%" }} class="font-extrabold shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-orange-300">51%</div>
                        <div style={{ "width": "49%" }} class="font-extrabold shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-blue-900">49%</div>
                    </div>
                </div>


            </div>

            <div class="col-start-2 col-end-8 font-extrabold text-lg ">
                Sunday, February 26th
            </div>

            <div class="flex col-start-2 items-center text-lg ">
                <img class="mr-3" src={suns} />
                Phoenix Suns
            </div>
            <div class="flex col-end-8 text-lg ">
                Milwaukee Bucks
                <img class="ml-3" src={bucks} />
            </div>
            <div class="col-start-2 col-end-8 ...">
                <div class="relative pt-1">
                    <div class=" overflow-hidden h-5 mb-4 text-xs flex rounded bg-amber-200">
                        <div style={{ "width": "30%" }} class="font-extrabold shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-orange-500">30%</div>
                        <div style={{ "width": "70%" }} class="font-extrabold shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-green-800">70%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress;
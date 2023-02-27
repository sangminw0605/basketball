import celtics from '../celts.png';
import sixers from '../sixers.png';
import pelicans from '../pelicans.png';
import knicks from '../knicks.png';
import bucks from '../bucks.png';
import suns from '../suns.png';

function Table() {
    return (
        <div style={{ "padding-left": '400px' }}>
            <div class="col-start-1 col-end-2 text-lg font-extrabold">
                Saturday, February 25th
            </div>
            <div class="grid grid-cols-4 gap-4">


                <div class="flex flex-row max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="flex flex-col">
                            <img class="w-25 h-25" src={celtics} />

                            <h3 class="font-normal text-white dark:text-white">Boston Celtics</h3>
                            <p class="font-normal text-white dark:text-white ">63%</p>

                        </div>
                        <div class="flex flex-col">
                            <img class="w-25 h-25" src={sixers} />

                            <p class="font-normal text-gray-700 dark:text-white">Philadelphia 76ers</p>
                            <p class="font-normal text-gray-700 dark:text-white">37%</p>

                        </div>
                    </div>
                </div>

                <div class="flex flex-row max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="flex flex-col">
                            <img class="w-25 h-25" src={knicks} />

                            <h3 class="font-normal text-white dark:text-white">New York Knicks</h3>
                            <p class="font-normal text-white dark:text-white ">51%</p>

                        </div>

                        <div class="flex flex-col">
                            <img class="w-25 h-25" src={pelicans} />

                            <p class="font-normal text-gray-700 dark:text-white">New Orleans Pelicans</p>
                            <p class="font-normal text-gray-700 dark:text-white">49%</p>

                        </div>
                    </div>

                </div>

            </div>
            <div class="col-start-2 col-end-3 text-lg font-extrabold">
                Sunday, February 26th
            </div>
            <div class="grid grid-cols-4 gap-4">


                <div class="flex flex-row max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="flex flex-col">
                            <img class="w-25 h-25" src={suns} />

                            <h3 class="font-normal text-white dark:text-white">Phoenix Suns</h3>
                            <p class="font-normal text-white dark:text-white ">70%</p>

                        </div>

                        <div class="flex flex-col">
                            <img class="w-25 h-25" src={bucks} />

                            <p class="font-normal text-gray-700 dark:text-white">Milwaukee Bucks</p>
                            <p class="font-normal text-gray-700 dark:text-white">30%</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
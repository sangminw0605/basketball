import celtics from '../celts.png';
import sixers from '../sixers.png';

function Progress() {
    return(
    <div style={{"padding-left": '200px'}} class="grid grid-cols-8 gap-4">
          <div class="flex col-start-2 items-center text-lg dark:text-white font-extrabold">
            <img class="mr-3" src={celtics} />
            Boston Celtics
          </div>
          <div class="flex col-end-8 dark:text-white text-lg font-extrabold">
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
        </div>
    );
}

export default Progress;
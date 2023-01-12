import {data} from "../data.js";
import { getTimeComponent } from "../component/time.js";
import { resetTimer } from "../logic/resetTimer.js"



export const resetHandler = () => {

    if (data.interval != null) {
        data.interval = clearInterval(data.interval);
    }

    resetTimer();
    const timeComponent = getTimeComponent();
    document.getElementById('time').innerHTML = "";
    document.getElementById('time').append(timeComponent);
}
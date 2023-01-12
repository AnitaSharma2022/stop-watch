import { data } from "../data.js";
import { getTimeComponent } from "../component/time.js";
import { getWatchTime } from "../logic/time.js";


export const  startHandler = () =>
{
    if(data.interval != null)
    {
        data.interval =clearInterval(data.interval);
    }
    data.interval=setInterval(function () {
        let timeWatch =getWatchTime();
        const timeComponent =getTimeComponent(timeWatch);
        document.getElementById('timer').innerHTML="";
        document.getElementById('timer').append(timeComponent);
    }, 10)
}

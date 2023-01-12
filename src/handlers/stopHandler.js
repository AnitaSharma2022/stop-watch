import { data } from "../data.js";

export const stopHandler = () => {
    if (data.interval != null) {
        data.interval = clearInterval(data.interval);

    }

}


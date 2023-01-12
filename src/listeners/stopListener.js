import { stopHandler } from "../handlers/stopHandler.js"

export const stopListener = () => {
    document.getElementById('stop').addEventListener('click', stopHandler)

}
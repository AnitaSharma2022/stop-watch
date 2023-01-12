import { startHandler } from "../handlers/startHandler.js"

export const startListener = () => {
    document.getElementById('start').addEventListener('click', startHandler)

}
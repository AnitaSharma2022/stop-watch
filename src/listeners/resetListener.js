import { resetHandler } from "../handlers/resetHandler.js"

export const resetListener = () => {
    document.getElementById('reset').addEventListener('click', resetHandler)

}
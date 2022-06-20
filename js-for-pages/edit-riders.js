import {URL} from "../settings.js";
import {makeOptions} from "../fetchUtils.js";
import {getRiders} from "./riders.js";
import { encode } from "../utils.js"

export function riderHandlers() {
    document.getElementById("btn-add-rider").onclick = addRider
}

function addRider() {
    let rider = {}
    console.log("Called addRider")

    const options = makeOptions("POST", (rider = {
        name : encode(this.name = document.getElementById("name").value),
        age : this.age = document.getElementById("age").value,
        mountainPoints : this.mountainPoints = document.getElementById("mountainPoints").value,
        sprintPoints : this.sprintPoints = document.getElementById("sprintPoints").value,
        bestTime : this.bestTime = document.getElementById("bestTime").value,
        teamId : this.teamId = document.getElementById("team-id").value}
            )
        )

    fetch(URL + "/riders", options)
        .then(res => res.json())
        .then(person => {
            document.getElementById("rider-info").innerText =
                "Ny rytter tilføjet: " + JSON.stringify(rider.name)
        })
        .catch(e => document.getElementById("error").innerText = e.message)
}
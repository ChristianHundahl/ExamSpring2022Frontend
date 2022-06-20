import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"

const ridersURL = URL + "/riders"

let id = 0

export async function deleteRider(event) {
    document.getElementById(event.target.id)
    await fetch(ridersURL + "/" + event.target.id, {
        method: "DELETE"
    }).then(getRiders)
}

const riders = await fetch(ridersURL).then(res=> handleHttpErrors(res))

export async function getRidersV2() {
    return fetch(ridersURL).then(res=> handleHttpErrors(res))
}


export async function getRiders(riders) {

    try {
        const riders = await fetch(ridersURL).then(res=> handleHttpErrors(res))
        console.log(riders)
        document.getElementById("rider-table-body").innerHTML = riders.map(rider => `
        <tr>
            <td>${rider.name}</td>
            <td>${rider.age}</td>
            <td>${rider.mountainPoints}</td>
            <td>${rider.sprintPoints}</td>
            <td>${rider.bestTime}</td>
            <td><button id="${rider.id}">Slet</td> <!--- Not functional: solved with use event bubbling, then set servicelayer on backend to remove rider from team as teh rider was deleted --->
        </tr>    
        `).join(`\n`)
        riders.map(rider =>
            document.getElementById(rider.id).onclick = deleteRider
            )
        } catch(err) {
        console.log(err.message)
    }
}

async function sortById() {
    let idSorting = false

    const riders = await getRidersV2()
    if (idSorting === false) {
        const ridersSortedByIdAsc = riders.sort(function(a, b) {return a.id - b.id})
        idSorting = true
        console.log(idSorting)

    }
    else {
        const ridersSortedByIdDsc = riders.sort(function(a, b) {return b.id - a.id})
        idSorting = false
        console.log(idSorting)
    }
}



const first = document.getElementById('first').querySelectorAll('div')
const second = document.getElementById('second').querySelectorAll('div')
const troisieme = document.getElementById('troisieme').querySelectorAll('div')
const quatorzieme = document.getElementById('quatorzieme').querySelectorAll('div')

const minuteur = [first, second, troisieme, quatorzieme]

const pattern = {
    0: [1, 2, 3, 6, 7, 8],
    1: [3, 7],
    2: [1, 3, 4, 5, 6, 8],
    3: [1, 3, 4, 5, 7, 8],
    4: [2, 3, 4, 5, 7],
    5: [1, 2, 4, 5, 7, 8],
    6: [1, 2, 4, 5, 6, 7, 8],
    7: [1, 3, 7],
    8: [1, 2, 3, 4, 5, 6, 7, 8],
    9: [1, 2, 3, 4, 5, 7, 8]
}

let duration = 600

const interval = setInterval(() => {

    const seconde = based(duration % 60)
    const minute = based(Math.floor(duration / 60) % 60)

    const minuteries = `${minute}${seconde}`

    console.log(minuteries);

    for (let i = 0; i < minuteur.length; i++) {

        for (let j = 0; j < minuteur[i].length; j++) {

            console.log(pattern[minuteries[i]]);
            console.log(pattern[minuteries[i]].includes(j + 1));

            if (pattern[minuteries[i]].includes(j + 1)) {
                minuteur[i][j].style.opacity = 1
            }

            if (!pattern[minuteries[i]].includes(j + 1)) {
                minuteur[i][j].style.opacity = 0.3
            }

        }
    }

    duration--

}, 1 * 1000)

function based(str) {
    return str < 10 ? `0${str}` : `${str}`
}
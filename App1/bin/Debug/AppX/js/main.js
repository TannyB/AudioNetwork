
const url = 'https://private-dcdc80-audionetworkrecruitment.apiary-mock.com/tracks';
const app = document.getElementById('root');

const container = document.createElement('div');

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i].firstName + " " + array[i].lastName;
        }
    }
    return null;
}

app.appendChild(container);

var requestTracks = fetch('https://private-dcdc80-audionetworkrecruitment.apiary-mock.com/tracks').then(function (response) {
    return response.json()
});

var requestComposers = fetch('https://private-dcdc80-audionetworkrecruitment.apiary-mock.com/composers').then(function (response) {
    return response.json()
});
//debugger

Promise.all([requestTracks, requestComposers]).then(function (data) {
    var requestTracks = data[0];
    var requestComposers = data[1];
    
    requestTracks.sort();

    requestTracks.forEach(track => {
        if (track.genre == 'rock') {
            const card = document.createElement('div');
            const h3 = document.createElement('h5');
            h3.textContent = "Track Name: " + track.title;
            
            var compo = findObjectByKey(requestComposers, 'id', track.composerId);
            const p = document.createElement('p');
            p.textContent = "Composer: " + compo;

            container.appendChild(card);
            card.appendChild(h3);
            card.appendChild(p);
        }
    });
});










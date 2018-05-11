// Your code here!
//const ul = document.getElementById('authors');
const url = 'https://private-dcdc80-audionetworkrecruitment.apiary-mock.com/tracks';
// const url = 'https://randomuser.me/api/?results=10';

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var requestTracks = fetch('https://private-dcdc80-audionetworkrecruitment.apiary-mock.com/tracks').then(function (response) {
    return response.json()
});

var requestComposers = fetch('https://private-dcdc80-audionetworkrecruitment.apiary-mock.com/composers').then(function (response) {
    return response.json()
});
debugger
var finalData = { "requestTracks": {}, "requestComposers": {} };

Promise.all([requestTracks, requestComposers]).then(function (data) {
    finalData["requestTracks"] = data[0];
    finalData["requestComposers"] = data[1];
    return finalData;
});






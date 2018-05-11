var request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    data.sort();

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {

            if (movie.genre == 'rock') {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const h1 = document.createElement('h1');
                h1.textContent = movie.title;

                const p = document.createElement('p');
                //p.textContent = `${movie.description}...`;
                p.textContent = movie.composerId;

                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            }
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();

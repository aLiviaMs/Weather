document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8ed0e362e0895788a77065e1401214a5`;
        //20 min clima video.
    }


})

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}
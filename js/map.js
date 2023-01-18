const st1 = document.querySelectorAll('.st1');

const lands = {
    Bayern: [
        'Munchen',
        'Nurnberg',
        'Stuttgart',
        'Augsburg',
        'Regensburg',
        'Wuerzburg',
        'Ingolstadt',
    ]
}

st1.forEach((item) => {
    item.addEventListener('click', () => {
        // show tooltip with land name
        
        document.getElementsByClassName('bmap')[0].innerHTML = `
        <img class="board" src="img/board.png">
        <div class="bcity">Land name</div>
            <table class="btable">
                <tbody>
                </tbody>
            </table>`;
        document.getElementsByClassName('bcity')[0].innerHTML = item.id;

        let res = '';
        const cities = lands[item.id];
        cities.forEach((city, k) => {
            res += `
                <td class="btd">
                    <a href="/${item.id}/${city}">
                        ${city}
                    </a>
                </td>`
            if ((k + 1) % 3 === 0) {
                res = `<tr class="btr">
                            ${res}
                        </tr>`
            }
        })
        document.querySelector('.btable').innerHTML = res;
    })
})
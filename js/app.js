const mileStone = JSON.parse(data).data;

console.log(mileStone);

function loadMileStone() {
    const mileStoneData = document.getElementById('right');

    mileStoneData.innerHTML = mileStone.map(function (element) {
        return `
        <div class="drop-down">
            <div class="flex">
                <div class="checkbox">
                    <input type="checkbox">
                </div>
                <div class="name">
                    <h4>${element.name}</h4>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
            <div class="hidden-menu">
                    ${
                        element.modules.map(function (module) {
                        return `
                            <div class="module-item">
                                <p>${module.name}</p>
                            </div>`
                        }).join('')
                    }
            </div>
        </div>
        `;
    }).join('');

}

loadMileStone();

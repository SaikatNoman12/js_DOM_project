const mileStone = JSON.parse(data).data;


function loadMileStone() {
    const mileStoneData = document.getElementById('right');

    mileStoneData.innerHTML = mileStone.map(function (element) {
        return `
            <div class="drop-down"  id="${element._id}" >
                <div class="flex">
                    <div class="checkbox" >
                        <input type="checkbox" onclick="checkAndDone(this, ${element._id})">
                    </div>
                    <div class="name" onclick="openModuleMenu(this, ${element._id})">
                        <label>${element.name} 
                        <i class="fas fa-chevron-down"></i></label>
                    </div>
                </div>
    
                <div class="hidden-menu">
                        ${element.modules.map(function (module) {
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

function openModuleMenu(moduleTitle, id) {


    const hidden_module = moduleTitle.parentNode.nextElementSibling;
    const showPanel = document.querySelector('.show');
    const activePanel = document.querySelector('.active');

    // first remove previous active class if any [other than the clicked one]
    if (!moduleTitle.classList.contains('active') && activePanel) {
        activePanel.classList.remove('active');
    }

    // toggle current clicked one
    moduleTitle.classList.toggle('active');

    // first hide previous show panel class if open [other than the clicked element]
    if (!hidden_module.classList.contains('show') && showPanel)
        showPanel.classList.remove('show');

    hidden_module.classList.toggle('show');

    imageShow(id);

}

function imageShow(id) {

    const image = document.getElementById('img');
    const moduleTitle = document.getElementById('module-title-child');
    const moduleDetail = document.getElementById('module-detail');


    image.style.opacity = '0';
    image.src = mileStone[id].image;
    moduleTitle.innerText = mileStone[id].name;
    moduleDetail.textContent = mileStone[id].description ? mileStone[id].description : 'Not found!'

}

const image = document.querySelector('.image').firstElementChild;
image.onload = function () {
    this.style.opacity = '1';
}

function checkAndDone(checkbox, id) {
    const courseList = document.querySelector('#right');
    const doneList = document.querySelector('#check-milestone');
    const item = document.getElementById(id);

    if (checkbox.checked) {
        courseList.removeChild(item);
        doneList.appendChild(item);

    }
    else {
        doneList.removeChild(item);
        courseList.appendChild(item);
    }
}


loadMileStone();




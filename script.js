function quickSelector(id) {
  return document.querySelector(`#${id}`);
}
const carContianer = document.querySelector('.car-container');
const btnContainer = document.querySelector('.btn-container');

let copiedCarsCountry = [];
for (let i = 0; i < cars.length; i++) {
  copiedCarsCountry.push(cars[i].country);
}
const filter = copiedCarsCountry.filter((item, index) => {
  return copiedCarsCountry.indexOf(item) === index;
});
filter.push('All');
filter.sort();

const createBtn = () => {
  for (let i = 0; i < filter.length; i++) {
    let btnElement = `<button style="margin:5px" id=${filter[i]} type="button">${filter[i]}</button>`;
    btnContainer.innerHTML += btnElement;
  }
};
createBtn();
const listAllCars = () => {
  let listCar = '';
  cars.map(x => {
    listCar += createObject(x);
  });
  carContianer.innerHTML += listCar;
};

const listCar = car => {
  let listCar = '';
  cars.map(x => {
    x.country == car.toString() ? (listCar += createObject(x)) : '';
  });
  carContianer.innerHTML = listCar;
};

let btnAll = quickSelector('All').addEventListener('click', listAllCars);
let btnAmerica = quickSelector('America').addEventListener(
  'click',
  function () {
    listCar('America');
  }
);
let btnEngland = quickSelector('England').addEventListener(
  'click',
  function () {
    listCar('England');
  }
);
let btnFrance = quickSelector('France').addEventListener('click', function () {
  listCar('France');
});
let btnGermany = quickSelector('Germany').addEventListener(
  'click',
  function () {
    listCar('Germany');
  }
);
let btnIndia = quickSelector('India').addEventListener('click', function () {
  listCar('India');
});
let btnItaly = quickSelector('Italy').addEventListener('click', function () {
  listCar('Italy');
});
let btnJapan = quickSelector('Japan').addEventListener('click', function () {
  listCar('Japan');
});
let btnKorea = quickSelector('Korea').addEventListener('click', function () {
  listCar('Korea');
});
let btnSpain = quickSelector('Spain').addEventListener('click', function () {
  listCar('Spain');
});
let btnSweeden = quickSelector('Sweeden').addEventListener(
  'click',
  function () {
    listCar('Sweeden');
  }
);

const createObject = carName => {
  let item = `
    <div class="col-md-3 mt-3">
        <div class="card ${carName.id}" style="width: 18rem">
            <img
                src="${carName.img}"
                class="card-img-top photo"
            />
            <div class="card-body">
                <h4>${carName.title}</h4>
                <h5>${carName.country}</h4>
                <p class="card-text">
                    ${carName.category}
                </p>
            </div>
        </div>
    </div>
    `;
  return item;
};
listAllCars();

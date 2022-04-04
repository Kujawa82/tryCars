const accessories = [
  {
    name: "opony zimowe",
    price: 1200,
  },
  {
    name: "felgi",
    price: 1500,
  },
  {
    name: "nawigacja",
    price: 450,
  },
  {
    name: "gwarancja 1 rok",
    price: 5000,
  },
];

const cars = [
  {
    idNumber: 1,
    myImage: "images/1 vw polo.jpg",
    brand: "Volkswagen",
    model: "Polo",
    capacity: "1197",
    power: "110",
    year: "2014",
    mileage: "110077",
    price: "38500",
  },
  {
    idNumber: 2,
    myImage: "images/2 bmw z4.jpg",
    brand: "BMW",
    model: "Z4",
    capacity: "1997",
    power: "245",
    year: "2016",
    mileage: "75000",
    price: "160000",
  },
  {
    idNumber: 3,
    myImage: "images/3 audi a3.jpg",
    brand: "Audi",
    model: "A3",
    capacity: "1968",
    power: "150",
    year: "2012",
    mileage: "171300",
    price: "42900",
  },
  {
    idNumber: 4,
    myImage: "images/4 bmw x4.jpg",
    brand: "BMW",
    model: "X4",
    capacity: "2979",
    power: "306",
    year: "2016",
    mileage: "197000",
    price: "119000",
  },
  {
    idNumber: 5,
    myImage: "images/5 vw golf iv.jpg",
    brand: "Volksvagen",
    model: "Golf IV",
    capacity: "1390",
    power: "75",
    year: "2000",
    mileage: "240000",
    price: "7300",
  },

  //,{myImage:"", brand:"", model:"", capacity:"", power:"", year:"", mileage:"", price:""},
];



const isShownList = () => {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("cars-container").style.display = "block";

  

  for (let i = 0; i < x.length; i++) {
    let picture = document.createElement("img");
    picture.src = cars[i].myImage;
    let photoDiv = document.createElement("div");

    let pBrand = document.createElement("p");
    pBrand.innerText = "Marka: " + cars[i].brand;
    let pModel = document.createElement("p");
    pModel.innerText = "Model: " + cars[i].model;
    let pCapacity = document.createElement("p");
    pCapacity.innerText = "Pojemność: " + cars[i].capacity;
    let pPower = document.createElement("p");
    pPower.innerText = "Moc: " + cars[i].power;
    let pYear = document.createElement("p");
    pYear.innerText = "Rok: " + cars[i].year;
    let pMileage = document.createElement("p");
    pMileage.innerText = "Przebieg: " + cars[i].mileage;
    let pPrice = document.createElement("p");
    pPrice.innerText = "Cena: " + cars[i].price;
    let infoDiv = document.createElement("div");

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("offer");
    mainDiv.id = i;

    photoDiv.appendChild(picture);

    infoDiv.appendChild(pBrand);
    infoDiv.appendChild(pModel);
    infoDiv.appendChild(pCapacity);
    infoDiv.appendChild(pPower);
    infoDiv.appendChild(pYear);
    infoDiv.appendChild(pMileage);
    infoDiv.appendChild(pPrice);

    mainDiv.appendChild(photoDiv);
    mainDiv.appendChild(infoDiv);

    document.getElementById("cars-container").appendChild(mainDiv);
    //////////////////////////////////////////////////////////////////////
    document.getElementById(i).addEventListener(
      "click",
      (isShownForm = () => {
        document.getElementById("cars-container").style.display = "none";
        document.getElementById("form-container").style.display = "block";
        // jeśli idcars nie ma w memory to dodaj
        memory = [];
        memory.push(cars[i]);
        localStorage.setItem("carsMemory", JSON.stringify(memory));

        let mainDiv2 = document.createElement("div");
        mainDiv2.id = "form" + i;
        mainDiv2.classList.add("offer");
        document.getElementById("form-container").appendChild(mainDiv2);

        let formHeading = document.createElement("h1");
        formHeading.innerText = `Konfiguracja zakupu auta ${cars[i].brand} ${cars[i].model} ${cars[i].year}`;
        mainDiv2.appendChild(formHeading);

        const lineBreak = document.createElement("br");
        mainDiv2.appendChild(lineBreak);
        const lineBreak2 = document.createElement("br");
        mainDiv2.appendChild(lineBreak2);

        let accessoriesHeading = document.createElement("h2");
        accessoriesHeading.innerText = "Wybór akcesoriów";
        mainDiv2.appendChild(accessoriesHeading);

        for (let j = 0; j < accessories.length; j++) {
          let accessoriesAdd = document.createElement("input");
          accessoriesAdd.setAttribute("type", "checkbox");
          accessoriesAdd.id = j;
          mainDiv2.appendChild(accessoriesAdd);
          let accessoriesLabel = document.createElement("label");
          accessoriesLabel.setAttribute("for", j);
          accessoriesLabel.innerText =
            accessories[j].name + " = " + accessories[j].price;
          mainDiv2.appendChild(accessoriesLabel);

          const lineBreak3 = document.createElement("br");
          mainDiv2.appendChild(lineBreak3);

          accessoriesAdd.onclick = function () {
            if (accessoriesAdd.checked) {
              carPrice.innerText =
                Number(carPrice.innerText) + accessories[j].price;
            } else {
              carPrice.innerText =
                Number(carPrice.innerText) - accessories[j].price;
            }
            totalPrice.innerText =
              Number(cars[i].price) + Number(carPrice.innerText);
          };
        }
        let carPriceText2 = document.createElement("h3");
        carPriceText2.innerText = "Całkowta cena akcesoriów";
        mainDiv2.appendChild(carPriceText2);

        let carPrice = document.createElement("p");
        carPrice.innerText = 0;
        mainDiv2.appendChild(carPrice);

        let carPriceText = document.createElement("h3");
        carPriceText.innerText = "Całkowaita cena auta z akcesoriami";
        mainDiv2.appendChild(carPriceText);

        let totalPrice = document.createElement("p");
        mainDiv2.appendChild(totalPrice);
        totalPrice.innerText = cars[i].price;

        let wayOfPay = document.createElement("h2");
        mainDiv2.appendChild(wayOfPay);
        wayOfPay.innerText = "Sposób zapłaty";

        let payInput1 = document.createElement("input");
        payInput1.setAttribute("type", "radio");
        payInput1.id = "cash";
        payInput1.name = "wayOfPay";

        let payLabel1 = document.createElement("label");
        payLabel1.setAttribute("for", "cash");
        payLabel1.innerText = "gotówka";

        let payInput2 = document.createElement("input");
        payInput2.setAttribute("type", "radio");
        payInput2.id = "leasing";
        payInput2.name = "wayOfPay";

        let payLabel2 = document.createElement("label");
        payLabel2.setAttribute("for", "leasing");
        payLabel2.innerText = "leasing";

        mainDiv2.appendChild(payInput1);
        mainDiv2.appendChild(payLabel1);
        mainDiv2.appendChild(payInput2);
        mainDiv2.appendChild(payLabel2);

        const lineBreak4 = document.createElement("br");
        mainDiv2.appendChild(lineBreak4);

        let personalData = document.createElement("h2");
        personalData.innerText = "Dane osobowe";
        mainDiv2.appendChild(personalData);

        let nameAndSurnameLabel = document.createElement("label");
        nameAndSurnameLabel.setAttribute("for", "nameAndSurname");
        nameAndSurnameLabel.innerText = "imię i nazwisko";

        let nameAndSurname = document.createElement("input");
        nameAndSurname.setAttribute("type", "text");
        nameAndSurname.id = "nameAndSurname";

        mainDiv2.appendChild(nameAndSurnameLabel);
        mainDiv2.appendChild(nameAndSurname);

        const lineBreak5 = document.createElement("br");
        mainDiv2.appendChild(lineBreak5);
        const lineBreak6 = document.createElement("br");
        mainDiv2.appendChild(lineBreak6);

        let btnBack = document.createElement("button");
        btnBack.innerText = "wróć do listy";
        btnBack.id = "back" + i;
        mainDiv2.appendChild(btnBack);

        document.getElementById("back" + i).addEventListener(
          "click",
          (isbackToListPage = () => {
            document.getElementById("form" + i).remove();
            document.getElementById("cars-container").style.display = "block";
          })
        );
        let btnSummary = document.createElement("button");
        btnSummary.innerText = "Kupuję";
        btnSummary.id = "summary" + i;
        mainDiv2.appendChild(btnSummary);
        document.getElementById("summary" + i).addEventListener(
          "click",
          (isgoingToSummary = () => {
            document.getElementById("cars-container").style.display = "none";
            document.getElementById("form-container").style.display = "none";

            let mainDiv3 = document.createElement("div");
            document.getElementById("summary-container").appendChild(mainDiv3);

            let summaryHeading = document.createElement("h1");
            summaryHeading.innerText = `Dziękujemy za zakup auta ${cars[i].brand} ${cars[i].model} ${cars[i].year}`;
            mainDiv3.appendChild(summaryHeading);

            let picture2 = document.createElement("img");
            picture2.src = cars[i].myImage;
            mainDiv3.appendChild(picture2);

            let someDate = new Date();
            let numberOfDaysToAdd = 14;
            let result = someDate.setDate(
              someDate.getDate() + numberOfDaysToAdd
            );

            let dateObj = new Date(result);
            let month = dateObj.getUTCMonth() + 1;
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();

            let newdate = day + "/" + month + "/" + year;
            let dateOfGet = document.createElement("h2");
            dateOfGet.innerText = `Data odbioru samochodu: ${newdate}`;
            mainDiv3.appendChild(dateOfGet);
          })
        );
      })
    );
  }
};



const isChosen = () => {
  memory = [];

  if (localStorage.getItem("carsMemory") === null) {
    alert("Nie przeglądałeś jeszcze żadnego auta z naszej oferty...");
  } else {
    let memoryBack = JSON.parse(localStorage.getItem("carsMemory"));
    memoryBack = memory;
    console.log(memoryBack);
    x = memory
    isShownList();
  }
};

const isSearched = () => {
  x = cars;
  isShownList();
}

const isNearlyChosen = () => {
  x = cars
  isChosen()
}

document.getElementById("search_button").addEventListener("click", isSearched);

document.getElementById("chosen_button").addEventListener("click", isNearlyChosen);

// if (document.getElementById("try").value !== "wszystkie") {
//     const chosenBrand = cars.filter(
//       (car) => car.brand === document.getElementById("try").value
//     );
//     var x = chosenBrand;
//   }
//   if (document.getElementById("try").value && !"wszystkie") {
//     var x = cars;
//   }
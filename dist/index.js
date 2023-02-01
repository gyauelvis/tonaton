let numberOfAds = document.querySelectorAll("#numberOfAds");
let numberOfAdsForAllCats = 0;

numberOfAds.forEach((ad) => {
  numberOfAdsForAllCats = numberOfAdsForAllCats + parseFloat(ad.textContent);
});
document.querySelectorAll(".numberOfAllCat").forEach((cat) => {
  cat.textContent = `${numberOfAdsForAllCats} ads`;
});

const regionsInGhana = [
  {
    regionName: "Greater Accra",
    capital: "Accra",
    town1: "Tema",
    town2: "Achimota",
  },
  {
    regionName: "Ashanti Region",
    capital: "Kumasi",
    town1: "Obuasi",
    town2: "Ejisu",
  },
  {
    regionName: "Central Region",
    capital: "Cape Coast",
    town1: "Winneba",
    town2: "Commenda",
  },
  {
    regionName: "Brong Ahafo Region",
    capital: "Sunyani",
    town1: "Berekum",
    town2: "Goaso",
  },
  {
    regionName: "Western Region",
    capital: "Takoradi",
    town1: "Tarkwa",
    town2: "Wiawso",
  },
  {
    regionName: "Eastern Region",
    capital: "Koforidua",
    town1: "Aburi",
    town2: "Kwau",
  },
  {
    regionName: "Volta Region",
    capital: "Ho",
    town1: "Keta",
    town2: "Hohoe",
  },
  {
    regionName: "Northern Region",
    capital: "Tamale",
    town1: "Savelugu",
    town2: "Bimbila",
  },
  {
    regionName: "Eastern Region",
    capital: "Koforidua",
    town1: "Kade",
    town2: "Aburi",
  },
  {
    regionName: "Upper West Region",
    capital: "Wa",
    town1: "Nandom",
    town2: "Jirapa",
  },
  {
    regionName: "Upper East Region",
    capital: "Bolgatanga",
    town1: "Navrongo",
    town2: "Bawku",
  },
];

let regionSec = document.getElementById("regions");
const getRegions = (regionsInGhana) => {
  regionsInGhana.forEach((region) => {
    let buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.classList.add(
      "flex",
      "flex-col",
      "bg-blue-50",
      "my-2",
      "py-3",
      "w-11/12",
      "text-lg",
      "text-gray-700",
      "px-4"
    );
    buttonElement.textContent = `${region.regionName} - ${region.capital}`;
    regionSec.appendChild(buttonElement);
  });
};
getRegions(regionsInGhana);

let getLocBtn = document.querySelector("#locBtn");
let regStatus;
let getOverlay = document.querySelector("#overlay");
getLocBtn.addEventListener("click", (e) => {
  regionSec.style.display = "flex";
  getOverlay.style.display = "block";
});

getOverlay.addEventListener("click", (e) => {
  e.preventDefault;
  getOverlay.style.display = "none";
  regionSec.style.display = "none";
});

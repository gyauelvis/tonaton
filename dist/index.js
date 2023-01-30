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
  // {
  //   regionName: "Eastern Region",
  //   capital: "Koforidua",
  //   town1: "Aburi",
  //   town2: "Kwau",
  // },
];

const getRegions = (regionsInGhana) => {
  let regionSec = document.getElementById("regions");
  regionsInGhana.forEach((region) => {
    let buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.classList.add(
      "flex",
      "flex-col",
      "bg-white",
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

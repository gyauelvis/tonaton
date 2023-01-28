let numberOfAds = document.querySelectorAll("#numberOfAds");
let numberOfAdsForAllCats = 0;

numberOfAds.forEach((ad) => {
  numberOfAdsForAllCats = numberOfAdsForAllCats + parseFloat(ad.textContent);
});
document.querySelector(
  "#numberOfAllCat"
).textContent = `${numberOfAdsForAllCats} ads`;

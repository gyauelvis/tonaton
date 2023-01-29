let numberOfAds = document.querySelectorAll("#numberOfAds");
let numberOfAdsForAllCats = 0;

numberOfAds.forEach((ad) => {
  numberOfAdsForAllCats = numberOfAdsForAllCats + parseFloat(ad.textContent);
});
document.querySelectorAll(".numberOfAllCat").forEach((cat) => {
  cat.textContent = `${numberOfAdsForAllCats} ads`;
});

const dataTitle = document.getElementById("data-box-title");
const dataDescription = document.getElementById("data-box-description");
const returnToIntroButton = document.getElementById("returnToIntro");
returnToIntroButton.addEventListener("click", returnToIntroClick);

var map = L.map('map').setView([46.342000, -94.249750], 17.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var imageUrl = 'storeLayout.png';
var imageBounds = [[46.34098, -94.25095], [46.34255, -94.2479]];
var overlay = L.imageOverlay(imageUrl, imageBounds);
overlay.addTo(map);

var markerEmployeeScreening = L.marker([46.34224, -94.2503]).addTo(map);
var markerGrocery = L.marker([46.342, -94.2503]).addTo(map);
var markerChemicals = L.marker([46.3416, -94.2503]).addTo(map);
var markerPet = L.marker([46.34161, -94.2499]).addTo(map);
var markerBaby = L.marker([46.34184, -94.250]).addTo(map);
var markerOffice = L.marker([46.342, -94.2493]).addTo(map);
var markerHBA = L.marker([46.34221, -94.249]).addTo(map);


markerEmployeeScreening.bindPopup('<b>Employee Screening</b><br><button onclick="screeningClick()">View Details</button>');
markerGrocery.bindPopup('<b>Paper</b><br><button onclick="groceryClick()">View Details</button>');
markerChemicals.bindPopup('<b>Chemicals</b><br><button onclick="chemicalsClick()">View Details</button>');
markerPet.bindPopup('<b>Pet</b><br><button onclick="petClick()">View Details</button>');
markerBaby.bindPopup('<b>Baby</b><br><button onclick="babyClick()">View Details</button>');
markerOffice.bindPopup('<b>Home Office</b><br><button onclick="officeClick()">View Details</button>');
markerHBA.bindPopup('<b>Health & Beauty</b><br><button onclick="hbaClick()">View Details</button>');

function screeningClick() {
  const storeSection = "screening";
  onClick(storeSection);
}

function groceryClick() {
  const storeSection = "paper";
  onClick(storeSection);
}

function chemicalsClick() {
  const storeSection = "chemicals";
  onClick(storeSection);
}

function petClick() {
  const storeSection = "pet";
  onClick(storeSection);
}

function babyClick() {
  const storeSection = "baby";
  onClick(storeSection);
}

function officeClick() {
  const storeSection = "office";
  onClick(storeSection);
}

function hbaClick() {
  const storeSection = "hba";
  onClick(storeSection);
}

function returnToIntroClick() {
  const storeSection = "introduction";
  onClick(storeSection);
}


// Will need to developed more
function onClick(section) {
  for (i in data) {
    if (data[i].id == section) {
      const title = data[i].title;
      dataTitle.innerHTML = title;

      const description = data[i].description;
      console.log(data[i]);
      dataDescription.innerHTML = description;

      if (section == "introduction") {
        returnToIntroButton.style.display = "none";
      } else {
        returnToIntroButton.style.display = "block";
      }
    }
  }
}

function restartFunction() {
  document
  
  dataContainer
}
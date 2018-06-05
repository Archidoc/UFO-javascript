// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);
// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var sighting = filteredData[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dateInput.value.trim().toLowerCase();
    if (filterDate != "") {
    // Set filteredData to an array of all addresses whose "date" matches the filter
        filteredData = dataSet.filter(function (sighting) {
            var sightingDate = sighting.datetime.toLowerCase();
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
            return sightingDate === filterDate;
        });
    };

    var filterCity = $cityInput.value.trim().toLowerCase();
    if (filterCity != "") {
        filteredData = filteredData.filter(function (sighting) {
            var sightingCity = sighting.city;
            return sightingCity === filterCity;
        });
    };

    var filterState = $stateInput.value.trim().toLowerCase();
    if (filterState != "") {
        filteredData = filteredData.filter(function (sighting) {
            var sightingState = sighting.state;
            return sightingState === filterState;
        });
    };

    var filterCountry = $countryInput.value.trim().toLowerCase();
    if (filterCountry != "") {
        filteredData = filteredData.filter(function (sighting) {
            var sightingCountry = sighting.country;
            return sightingCountry === filterCountry;
        });
    };

    var filterShape = $shapeInput.value.trim().toLowerCase();
    if (filterShape != "") {
        filteredData = filteredData.filter(function (sighting) {
            var sightingShape = sighting.shape;
            return sightingShape === filterShape;
        });
    }; 

    renderTable();
};



// Reset the data and search form after a search
function handleResetButtonClick() {
    filteredData = dataSet;
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
    renderTable();
}
  
// Render the table for the first time on page load

renderTable();


// Function to embed Vega-Lite visualizations
function embedVisualization(spec, target) {
  vegaEmbed(target, spec).catch(console.error);
}

// Function to set the active button
function setActiveButton(button) {
  const buttons = document.querySelectorAll(".pure-button");
  buttons.forEach((btn) => btn.classList.remove("active")); // Remove active class from all buttons
  button.classList.add("active"); // Add active class to the clicked button
}

// Event listeners for buttons
document.getElementById("btn-0-14").addEventListener("click", function () {
  embedVisualization("0-14_pop_choropleth.json", "#visualization");
  setActiveButton(this); // Highlight this button
});

document.getElementById("btn-15-64").addEventListener("click", function () {
  embedVisualization("15-64_pop_choropleth.json", "#visualization");
  setActiveButton(this); // Highlight this button
});

document.getElementById("btn-65-plus").addEventListener("click", function () {
  embedVisualization("65+_pop_choropleth.json", "#visualization");
  setActiveButton(this); // Highlight this button
});

// Default load for 0-14 years map and highlight the button
document.addEventListener("DOMContentLoaded", function () {
  embedVisualization("0-14_pop_choropleth.json", "#visualization");
  setActiveButton(document.getElementById("btn-0-14")); // Highlight the default button
});

// Select the buttons and the map info element
const btn0to14 = document.getElementById("btn-0-14");
const btn15to64 = document.getElementById("btn-15-64");
const btn65plus = document.getElementById("btn-65-plus");
const mapInfo = document.getElementById("map-info");

// Define the text for each map selection
const mapInfoTexts = {
  "0-14":
    "This map shows the estimated resident population of children aged 0 to 14 years in 2023 across Australia.<br /><br />" +
    "<strong>Australia's remote and northern regions</strong>, such as the Northern Territory and parts of Queensland, " +
    "have a significantly higher proportion of <strong>young residents (aged 0-14)</strong>, reflecting larger family sizes and a younger population in these areas. " +
    "In contrast, <em>urban centers like Sydney and Melbourne</em> show lower percentages, indicating an older demographic with smaller family units.",
  "15-64":
    "This map shows the estimated resident population of people aged 15 to 64 years in 2023, the working-age group across Australia.<br /><br />" +
    "Australia’s working-age population (15-64 years) is concentrated in major urban centers such as <strong>Sydney, Melbourne, and Brisbane</strong>. " +
    "However, regions in <strong>Western Australia and the Northern Territory</strong>, rich in natural resources, also show high percentages of this age group due to employment opportunities in mining and related industries. " +
    "Coastal and regional areas, on the other hand, tend to have lower proportions, reflecting an aging population or a preference for these regions as retirement destinations.",
  "65-plus":
    "This map shows the estimated resident population of people aged 65 years and over in 2023 across Australia, reflecting the aging population trend.<br /><br />" +
    "The distribution of Australia's 65+ population shows a higher concentration along the <strong>coastal regions</strong>, particularly in parts of <strong>New South Wales, Victoria, and Queensland</strong>. " +
    "These areas are popular retirement destinations, offering amenities and lifestyle choices attractive to older Australians. " +
    "In contrast, the <em>more remote and inland regions</em> tend to have a much lower proportion of elderly residents, reflecting a younger or working-age demographic.",
};

// Set the default map info text (for 0-14) when the page loads
mapInfo.innerHTML = mapInfoTexts["0-14"];

// Update the map info when buttons are clicked
btn0to14.addEventListener("click", function () {
  mapInfo.innerHTML = mapInfoTexts["0-14"];
});

btn15to64.addEventListener("click", function () {
  mapInfo.innerHTML = mapInfoTexts["15-64"];
});

btn65plus.addEventListener("click", function () {
  mapInfo.innerHTML = mapInfoTexts["65-plus"];
});

// Section 3: State Visuals Logic
const stateSelect = document.getElementById("state-select");

// Event listener for state dropdown
stateSelect.addEventListener("change", function () {
  const selectedState = stateSelect.value;

  // Dynamically load the visuals based on selected state
  embedVisualization(`${selectedState}_age_and_sex.json`, "#pyramid-visual");
  embedVisualization(
    `${selectedState}_time_series.json`,
    "#time-series-visual"
  );
});

// Initial load of NSW visuals by default
document.addEventListener("DOMContentLoaded", function () {
  embedVisualization("nsw_age_and_sex.json", "#pyramid-visual");
  embedVisualization("nsw_time_series.json", "#time-series-visual");
});

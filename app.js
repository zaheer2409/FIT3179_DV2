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

const stateInfoTexts = {
  nsw: {
    pyramidTitle: "Sydney v/s New South Wales:<br>Age Distribution by Gender",
    pyramidText:
      "The population pyramid comparing <strong>Sydney</strong> and <strong>New South Wales (NSW)</strong> highlights key demographic trends. <em>Sydney</em> has a younger population, with a higher concentration of males and females in the 20-39 age group, likely due to education and job opportunities.<br> In contrast, regional <strong>NSW</strong> has a larger proportion of elderly residents, especially females, reflecting retirement trends.<br> The middle-age distribution remains balanced across both regions, indicating family-oriented populations in both urban and regional areas.",
    timeSeriesTitle:
      "Population Growth by Percentage (2001-2023):<br>Sydney v/s New South Wales",
    timeSeriesText:
      "The percentage change in population shows that <strong>Sydney</strong> experienced significant fluctuations, especially a decline from 2017 to 2020, likely due to housing affordability, migration trends, and the COVID-19 pandemic.<br>In contrast, the <strong>Rest of NSW</strong> has maintained stable growth with fewer fluctuations, driven by regional migration and affordability.<br>Sydney’s sharp recovery in 2022 reflects the return of international students and urban migration patterns.",
  },
  vic: {
    pyramidTitle: "Melbourne v/s Victoria:<br>Age Distribution by Gender",
    pyramidText:
      "The population pyramid comparing <strong>Melbourne</strong> and <strong>Victoria</strong> shows distinct demographic trends. <em>Melbourne</em> has a higher concentration of people aged 20-34, driven by job and education opportunities.<br> Regional <strong>Victoria</strong> has a larger elderly population, particularly those aged 65 and over, reflecting retirement patterns.<br> Middle-aged groups are evenly distributed, and there's a notable gender difference in older age groups, with more females than males.",
    timeSeriesTitle:
      "Population Growth by Percentage (2001-2023):<br>Melbourne v/s Victoria",
    timeSeriesText:
      "The population change in <strong>Melbourne</strong> shows significant fluctuations, particularly a sharp decline during the COVID-19 pandemic in 2020, followed by a rapid recovery in 2022.<br>In contrast, the <strong>Rest of Victoria</strong> remained relatively stable, with gradual growth over the years.<br>Melbourne's volatility is likely driven by migration trends and economic opportunities, while regional areas show more consistent, modest growth.",
  },
  qld: {
    pyramidTitle: "Brisbane v/s Queensland:<br>Age Distribution by Gender",
    pyramidText:
      " The population pyramid comparing <strong>Brisbane</strong> and <strong>Queensland</strong> shows notable trends. <em>Brisbane</em> has a larger population concentration in the 20-34 age group, likely due to urban job opportunities and education.<br>In contrast, regional <strong>Queensland</strong> has a higher percentage of elderly residents, particularly those aged 65 and over.<br> The gender distribution in older age groups is skewed towards females, reflecting longer life expectancy for women.",
    timeSeriesTitle:
      "Population Growth by Percentage (2001-2023):<br>Brisbane v/s Queensland",
    timeSeriesText:
      "The population change in <strong>Brisbane</strong> shows fluctuations, especially a sharp dip in 2020 during the COVID-19 pandemic, followed by a rapid recovery in 2022.<br>The <strong>Rest of Queensland</strong> has shown similar but less volatile growth over the years, maintaining a stable percentage increase with fewer fluctuations.<br>Brisbane's volatile trend reflects migration patterns and economic shifts, while regional areas exhibit more consistent, gradual growth.",
  },
  nt: {
    pyramidTitle:
      "Darwin v/s Northern Territory:<br>Age Distribution by Gender",
    pyramidText:
      "The population pyramid comparing <strong>Darwin</strong> and the <strong>Northern Territory (NT)</strong> reveals distinct trends. <em>Darwin</em> has a notably higher proportion of young adults (20-34), driven by job opportunities in the capital city.<br> In contrast, regional <strong>NT</strong> has a smaller population in this age group, but a more balanced distribution across other age groups.<br> The elderly population is much smaller in both Darwin and the broader NT, reflecting a youthful overall demographic.",
    timeSeriesTitle:
      "Population Growth by Percentage (2001-2023):<br>Darwin v/s Northern Territory",
    timeSeriesText:
      "The population change in <strong>Darwin</strong> is marked by sharp fluctuations, particularly around 2013 and 2020, showing a highly volatile trend.<br>Similarly, the <strong>Rest of the Northern Territory</strong> shows a volatile change, but less extreme variations.<br>Darwin's shifts are likely influenced by migration, economic activities, and government projects, while regional NT experiences more consistent growth.",
  },
  sa: {
    pyramidTitle: "Adelaide v/s South Australia:<br>Age Distribution by Gender",
    pyramidText:
      "The population pyramid comparing <strong>Adelaide</strong> and <strong>South Australia (SA)</strong> highlights significant differences. <em>Adelaide</em> has a greater concentration of younger adults (20-34), driven by urbanization and job opportunities.<br>In contrast, regional <strong>SA</strong> shows a higher proportion of elderly residents, especially those aged 65 and above, reflecting retirement trends.<br>The middle-aged population distribution remains fairly balanced between both Adelaide and the broader state.",
    timeSeriesTitle:
      "Population Growth by Percentage (2001-2023):<br>Adelaide v/s/ South Australia",
    timeSeriesText:
      "The population change in <strong>Adelaide</strong> shows significant fluctuations, particularly a sharp decline around 2020 due to the pandemic, followed by a rapid recovery in 2022.<br>The <strong>Rest of South Australia</strong> has seen steady and gradual growth, with minimal changes over the years.<br>Adelaide's population change reflects urban migration and economic opportunities, while regional SA maintains consistent, modest growth.",
  },
  wa: {
    pyramidTitle: "Perth v/s Western Australia:<br>Age Distribution by Gender",
    pyramidText:
      "The population pyramid comparing <strong>Perth</strong> and <strong>Western Australia (WA)</strong> reveals key differences. <em>Perth</em> shows a higher concentration of younger adults (20-39), likely driven by employment opportunities in the capital city.<br>In contrast, regional <strong>WA</strong> has a more balanced population distribution across various age groups, with a higher proportion of elderly residents, especially those aged 65 and over.<br> Gender distribution remains balanced across both regions.",
    timeSeriesTitle:
      "Population Growth by Percentage (2001-2023):<br>Perth v/s/ Western Australia",
    timeSeriesText:
      "The population change in <strong>Perth</strong> reflects significant volatility, particularly with sharp peaks around 2012 and 2022, showing rapid growth followed by declines.<br>The <strong>Rest of Western Australia</strong> has experienced steadier growth, with fewer fluctuations over the years.<br>Perth's population change highlights urban expansion and migration, while regional WA sees slower but consistent growth.",
  },
};

const stateSelect = document.getElementById("state-select");

// Function to update state info text
function updateStateInfoText(state) {
  // Get the relevant state information
  const stateInfo = stateInfoTexts[state];

  // Update the Population Pyramid title and text
  document.querySelector(".top-left h2").innerHTML = stateInfo.pyramidTitle;
  document.querySelector(".top-left p").innerHTML = stateInfo.pyramidText;

  // Update the Time Series title and text
  document.querySelector(".bottom-left h2").innerHTML =
    stateInfo.timeSeriesTitle;
  document.querySelector(".bottom-left p").innerHTML = stateInfo.timeSeriesText;
}

// Event listener for state dropdown
stateSelect.addEventListener("change", function () {
  const selectedState = stateSelect.value;

  // Update the visuals based on the selected state
  embedVisualization(`${selectedState}_age_and_sex.json`, "#pyramid-visual");
  embedVisualization(
    `${selectedState}_time_series.json`,
    "#time-series-visual"
  );

  // Update the state info text
  updateStateInfoText(selectedState);
});

// Initial load of NSW visuals and text by default
document.addEventListener("DOMContentLoaded", function () {
  embedVisualization("nsw_age_and_sex.json", "#pyramid-visual");
  embedVisualization("nsw_time_series.json", "#time-series-visual");

  // Set the default text for NSW
  updateStateInfoText("nsw");
});

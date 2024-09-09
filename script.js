const speeds = ["Red", "Yellow", "Green", "Blue"];
const pitchTypes = [
  "Fastball",
  "Left Cutter",
  "Right Cutter",
  "Sinker",
  "Knuckleball",
  "Left Hook",
  "Right Hook",
];
const locations = [
  "Inside Low",
  "Inside Middle",
  "Inside High",
  "High Middle",
  "Middle Middle",
  "Middle Low",
  "Outside Low",
  "Outside Middle",
  "Outside High",
];

let balls = 0;
let strikes = 0;

function randomizePitch() {
  const speed = speeds[Math.floor(Math.random() * speeds.length)];
  const pitchType = pitchTypes[Math.floor(Math.random() * pitchTypes.length)];

  let availableLocations = locations.filter(
    (loc) =>
      document.getElementById("allowMidsToggle").checked ||
      loc !== "Middle Middle"
  );

  const sliderValue = document.getElementById("ballStrikeSlider").value;
  let location;

  if (sliderValue == 0) {
    const strikeLocations = availableLocations.filter(
      (loc) => !loc.includes("Bait")
    );
    location =
      strikeLocations[Math.floor(Math.random() * strikeLocations.length)];
  } else if (sliderValue >= 1 && sliderValue <= 39) {
    if (Math.random() < 0.75) {
      const strikeLocations = availableLocations.filter(
        (loc) => !loc.includes("Bait")
      );
      location =
        strikeLocations[Math.floor(Math.random() * strikeLocations.length)];
    } else {
      location =
        availableLocations[
          Math.floor(Math.random() * availableLocations.length)
        ];
    }
  } else if (sliderValue >= 40 && sliderValue <= 60) {
    location =
      availableLocations[Math.floor(Math.random() * availableLocations.length)];
  } else if (sliderValue >= 61 && sliderValue <= 99) {
    if (Math.random() < 0.75) {
      const ballLocations = availableLocations.filter((loc) =>
        loc.includes("Bait")
      );
      location =
        ballLocations[Math.floor(Math.random() * ballLocations.length)];
    } else {
      location =
        availableLocations[
          Math.floor(Math.random() * availableLocations.length)
        ];
    }
  } else if (sliderValue == 100) {
    const ballLocations = availableLocations.filter((loc) =>
      loc.includes("Bait")
    );
    location = ballLocations[Math.floor(Math.random() * ballLocations.length)];
  }

  document.getElementById(
    "output"
  ).innerHTML = `Pitch: <span id="speedLabel">${speed}</span> ${pitchType} to ${location}`;
  colorSpeed(speed);
  highlightLocation(location);
}

function colorSpeed(speed) {
  const speedLabel = document.getElementById("speedLabel");
  if (speed === "Red") {
    speedLabel.style.color = "red";
  } else if (speed === "Yellow") {
    speedLabel.style.color = "yellow";
  } else if (speed === "Green") {
    speedLabel.style.color = "green";
  } else if (speed === "Blue") {
    speedLabel.style.color = "blue";
  }
}

function highlightLocation(location) {
  // Clear previous highlights
  document.querySelectorAll(".zone-cell").forEach((cell) => {
    cell.classList.remove("highlight");
  });

  // Get the ID that corresponds to the location
  const locationId = location.replace(/\s+/g, "");
  const locationElement = document.getElementById(locationId);
  if (locationElement) {
    locationElement.classList.add("highlight");
  }
}

function incrementBalls() {
  if (balls < 3) {
    balls++;
    updateCount();
  }
}

function incrementStrikes() {
  if (strikes < 2) {
    strikes++;
    updateCount();
  }
}

function resetCount() {
  balls = 0;
  strikes = 0;
  updateCount();
}

function updateCount() {
  document.getElementById(
    "count"
  ).innerText = `Count: ${balls} Balls, ${strikes} Strikes`;
}

function updateSliderLabel() {
  const value = document.getElementById("ballStrikeSlider").value;
  if (value == 0) {
    document.getElementById("sliderLabel").innerText = "All Strikes";
  } else if (value >= 1 && value <= 39) {
    document.getElementById("sliderLabel").innerText = "Mostly Strikes";
  } else if (value >= 40 && value <= 60) {
    document.getElementById("sliderLabel").innerText = "Random";
  } else if (value >= 61 && value <= 99) {
    document.getElementById("sliderLabel").innerText = "Mostly Balls";
  } else if (value == 100) {
    document.getElementById("sliderLabel").innerText = "All Balls";
  }
}

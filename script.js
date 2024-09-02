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
  "Inside Low Bait",
  "Inside Middle Bait",
  "Inside High Bait",
  "High Middle Bait",
  "Middle Low Bait",
  "Outside Low Bait",
  "Outside Middle Bait",
  "Outside High Bait",
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
    // All strikes
    const strikeLocations = availableLocations.filter(
      (loc) => !loc.includes("Bait")
    );
    location =
      strikeLocations[Math.floor(Math.random() * strikeLocations.length)];
  } else if (sliderValue >= 1 && sliderValue <= 39) {
    // Mostly strikes
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
    // Completely random
    location =
      availableLocations[Math.floor(Math.random() * availableLocations.length)];
  } else if (sliderValue >= 61 && sliderValue <= 99) {
    // Mostly balls
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
    // All balls
    const ballLocations = availableLocations.filter((loc) =>
      loc.includes("Bait")
    );
    location = ballLocations[Math.floor(Math.random() * ballLocations.length)];
  }

  document.getElementById(
    "output"
  ).innerHTML = `Pitch: <span id="speedLabel">${speed}</span> ${pitchType} to ${location}`;
  colorSpeed(speed);
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

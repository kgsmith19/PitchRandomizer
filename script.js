// Possible pitch speeds, types, and locations
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
  "Inside Low Out",
  "Inside Middle Out",
  "Inside High Out",
  "High Middle Out",
  "Middle Middle Out",
  "Middle Low Out",
  "Outside Low Out",
  "Outside Middle Out",
  "Outside High Out",
  "Inside Low Way Out",
  "Inside Middle Way Out",
  "Inside High Way Out",
  "High Middle Way Out",
  "Middle Middle Way Out",
  "Middle Low Way Out",
  "Outside Low Way Out",
  "Outside Middle Way Out",
  "Outside High Way Out",
];

let balls = 0;
let strikes = 0;

function randomizePitch() {
  const speed = speeds[Math.floor(Math.random() * speeds.length)];
  const pitchType = pitchTypes[Math.floor(Math.random() * pitchTypes.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];

  document.getElementById(
    "output"
  ).innerText = `Pitch: ${speed} ${pitchType} to ${location}`;
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

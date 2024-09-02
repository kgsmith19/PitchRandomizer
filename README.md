# Pitch Randomizer (Prototype)

## Overview

The Pitch Randomizer is an early-stage prototype designed to assist pitchers in a baseball simulation game by providing randomized pitch combinations. The tool helps pitchers avoid predictable patterns, making it harder for opponents to guess the next pitch. Additionally, it includes a feature to manually track the count of balls and strikes, allowing for better in-game decision-making.

## Features

- **Randomize Pitch**: Generates a random pitch combination, including speed, type, and location.
- **Ball/Strike Bias Slider**: Adjust the likelihood of the next pitch being a ball or a strike. The slider has the following behaviors:
  - **0**: All strikes (locations without "Out").
  - **1-39**: Mostly strikes (75% strikes, 25% random).
  - **40-60**: Completely random.
  - **61-99**: Mostly balls (75% balls, 25% random).
  - **100**: All balls (locations with "Out").
- **Allow Mids? Toggle**: Enables or disables the inclusion of "Middle Middle" pitch locations in the randomizer.
- **Count Tracker**: Allows manual tracking of the count of balls and strikes during a game.
- **Speed Color Coding**: Pitch speed is color-coded for quick visual identification:
  - Red: High speed
  - Yellow: Medium-high speed
  - Green: Medium-low speed
  - Blue: Low speed
- **Reset Functionality**: Resets the count to 0 balls and 0 strikes.

## Technologies Used

- **HTML/CSS/JavaScript**: The tool is built as a simple web application, ensuring easy accessibility and quick setup.

## Installation and Usage

### Steps to Run

1. **Clone the Repository**:

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/PitchRandomizer.git
   ```

2. **Open the Application**:

   Navigate to the cloned directory and open the `index.html` file in your web browser.

3. **Use the Application**:

   - Click the "Randomize Pitch" button to generate a random pitch suggestion.
   - Use the slider to adjust the ball/strike bias. The leftmost setting produces all strikes, the rightmost produces all balls, and the middle is completely random.
   - Toggle the "Allow Mids?" checkbox to include or exclude "Middle Middle" in the random pool.
   - Use the "Add Ball" and "Add Strike" buttons to manually track the count.
   - Click "Reset Count" to reset the count to zero.

## Customization

You can customize the pitch randomizer by editing the arrays for pitch speeds, types, and locations in the `script.js` file. The application can be extended with additional features or modified to suit different baseball simulation games.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to fork the project, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the baseball simulation gaming community for inspiring this project.
- Special thanks to the developers of the technologies used in this project.

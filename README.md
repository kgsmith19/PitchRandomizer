# Pitch Randomizer

## Overview

The Pitch Randomizer is a simple tool designed to assist pitchers in a baseball simulation game by providing randomized pitch combinations. This tool helps pitchers avoid predictable patterns, making it harder for opponents to guess the next pitch. The tool includes a feature to manually track the count of balls and strikes.

## Features

- **Randomize Pitch**: Generates a random pitch combination, including speed, type, and location.
- **Count Tracker**: Allows manual tracking of the count of balls and strikes during a game.
- **Reset Functionality**: Resets the count to 0 balls and 0 strikes.

## Technologies Used

- **C#**: The primary language used for building the Windows Forms application.
- **.NET Framework**: The application is built using the .NET Framework, ensuring compatibility with Windows environments.

## Installation and Usage

### Prerequisites

- **Visual Studio**: Ensure you have Visual Studio installed with the .NET desktop development workload.
- **.NET Framework**: The application is built using .NET Framework 4.7.2 or later.

### Steps to Run

1. **Clone the Repository**:

    Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/kgsmith19/PitchRandomizer.git
    ```

2. **Open the Project**:

    Open the project in Visual Studio by navigating to the cloned repository and opening the `.sln` file.

3. **Build and Run**:

    - Build the solution in Visual Studio using `Ctrl+Shift+B` or by selecting `Build > Build Solution` from the menu.
    - Run the application by pressing `F5` or selecting `Debug > Start Debugging`.

4. **Use the Application**:

    - Click the "Randomize Pitch" button to get a random pitch suggestion.
    - Use the "Add Ball" and "Add Strike" buttons to manually track the count.
    - Click "Reset Count" to reset the count to zero.

## Files and Structure

- **MainForm.cs**: Contains the main logic for the pitch randomizer, including the UI event handlers.
- **Program.cs**: The entry point for the application.
- **PitchRandomizer.sln**: The Visual Studio solution file for the project.

## Customization

You can customize the pitch randomizer by editing the arrays for pitch speeds, types, and locations in the `MainForm.cs` file. The application can be extended with additional features or modified to suit different baseball simulation games.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to fork the project, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the baseball simulation gaming community for inspiring this project.
- Special thanks to the developers of the technologies used in this project.

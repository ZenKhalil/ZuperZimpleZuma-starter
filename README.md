# Zuper Zimple Zuma

A simple and fun implementation of the classic Zuma game using JavaScript.

## Demo

Play the game here: [Zuper Zimple Zuma Demo](https://zenkhalil.github.io/ZuperZimpleZuma-starter/)

## Description

Zuper Zimple Zuma is a streamlined version of the popular Zuma game. The objective is to eliminate balls from a moving chain by creating matches of **three or more consecutive balls of the same color**. This project showcases fundamental concepts of JavaScript programming, including data structures (linked lists), DOM manipulation, and animations.

## Features

- **Interactive Gameplay**: Insert cannonballs into the chain to create matches.
- **Dynamic Animations**: Smooth animations for ball movements and removals.
- **Chain Reactions**: Matches can cause additional matches in a chain reaction.
- **Add Balls**: Increase the difficulty by adding more balls to the chain.

## How to Play

1. **Start the Game**: Upon loading, the game displays a chain of colored balls and a cannon loaded with a random ball.
2. **Observe the Cannonball**: Look at the cannon at the bottom to see the color of the current cannonball.
3. **Choose Insertion Point**: Click on the arrows above the chain to select where to insert the cannonball. The ball will be inserted **after** the ball associated with the arrow.
4. **Create Matches**: Aim to align three or more balls of the same color to eliminate them from the chain.
5. **Add New Balls**: Use the "Add Ball" button to add a new random ball to the end of the chain, increasing the challenge.
6. **Chain Reactions**: Removed balls may cause new matches to form, leading to chain reactions.

## Technologies Used

- **JavaScript**: Core game logic and animations.
- **HTML5**: Game structure and layout.
- **CSS3**: Styling and visual enhancements.

## Installation

To run the game locally on your machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/zenkhalil/ZuperZimpleZuma-starter.git

2. **Navigate to the Project Directory**

   ```cd ZuperZimpleZuma-starter

3. **Open the Game in a Browser**

- Open the view.html file in your preferred web browser:

- **Double-click the view.html file.**

- **Or use the command line:**

- open view.html

(On Windows, you can use start view.html)

# Project Structure

- **model.js: Contains the game logic, including the linked list implementation for the ball chain.**

-**view.js: Handles the rendering of game elements and user interactions.**

- **controller.js: Acts as the intermediary between the model and the view, managing game state changes.**

- **animations.js: Manages all animations for ball movements and removals.**

- **simplelinkedlist.js: A simple implementation of a doubly linked list data structure.**

- **images/: Directory containing the ball images used in the game.**

# Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request or open an issue on GitHub.


# License
This project is licensed under the MIT License.


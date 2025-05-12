

PROJECT NAME: HEATBLAST'S SAGA

BY- Waris Shah
CANDIDATE NUMBER- 2511368
 

LINK TO GITHUB REPO: https://github.com/warisshah55/CodingForTheArts-SpringTerm-ClassCode/commits?author=warisshah55
LINK TO GITHUB PAGES: https://github.com/warisshah55/CodingForTheArts-SpringTerm-ClassCode

OVERVIEW OF PROJECT
This project is a tile-based game which features a character named "HeatBlast", who you follow on a journey,
navigating him through a nature biome filled with obstacles and a non playable character enemy named "SlimeBall".
HeatBlast moves through the game world avoiding dangers such as lava while interactive elements cause you to
speak to the NPC SlimeBall, who moves around the map trying to capture and kill HeatBlast.


INDIVIDUAL CONTRIBUTION
For this project, as I was working on my own, my primary concern was the code itself. Trying to maintain neat and precise code over
other elements such as artwork made me develop my understanding on the core mechanics greatly.
Some of the important responsibility's i took up while creating the game involved-

The Core Mechanics- Setting up the basic structure for the tile-based game included implementing a system where each type of tile could
have its own unique properties. For example the lava tile within my game made it so that the player's movement was constrained
based on the tile not being "walkable". I created a grid system using an array and variables such as "GraphicsMap"
and "tilesRules" to define the layout and behaviour of each tile. With an additional "tile" class which ensured each tile had the 
correct texture and displayed neccessary information like the "tileID" and coordinates. One challenge I faced was the display of the tiles,
as whenever I would run the code there would be black boarders around the tiles (as in the game), spacing them out rather than having them together
which would've aided to make the map look like one rather than many tiles.

Player movement and interaction- I implemented HeatBlast's movement controls using the WASD keys and ensured that the player can only move on
walkable tiles. The player's movement was pixel based, so I had to take in to consideration both tile and pixel positions which is Heatblast's
location and how it translates visually on the canvas. I created a player class for HeatBlast which helped to store and manage the state of the player
(movement, direction and position). Using the checkTargetTile() and move() methods, I was able to sucessfully manipulate the characters moving and setting
direction while checking if the players reached a valid target tile. The challenge I faced was making sure the player moved smoothly
from one tile to another. I found that without calculating tile and pixel coordinates correctly, I wasn't able to make sure once a player reached its target 
tile that it would stop movement completely and will trigger the dialogue aspect.

NPC's behaviour- One of my most key tasks was implementing SlimeBall's logic. This involved random movement and collision detection with the obstruction and with
HeatBlast itself. Like the player class, I created an NPC class to manage the NPC's sprite, position and random movement. The setInterval() function helped me a lot
with this as it allowed me to control how fast or slow SlimeBall's random movement could've been, and then let me check if SlimeBall's position was within
the set boundaries and whether the next tiles were walkable or not.

Dialogue system- I also worked on a dialogue system, which was triggered when the player would hit a specific tile on the grid. I integrated a method in the player class
that checks if the player has touched the tile on coordinates (0, 3), that the startDialogue() function is called to begin conversation. I created a dialogue box which appears
on the bottom of the screen with a press === spacebar to continue message. This is what challenged me the most as at first the conversation wouldn't progress, however the flag
(dialogueTriggered) aided in preventing multiple triggers and that dialogue was controlled by the user input (===).

Overall, my work focuses on creating the core gameplay mechanics, ensuring smooth movement, random NPC behaviour and handling tile interactions, all while solving technical challenges
as I went on, adapting to the project's scope.


THEMES
The character's were designed with the purpose to exaggerate traits. HeatBlast, as a powerful hero character, and on the contrary, SlimeBall, a cheeky character, displaying slimy,
mischevious traits. This contrast builds on the themes of satire and humour, reflecting the playful dynamics of the game itself. Additionally if HeatBlast collides with SlimeBall,
the game resets with an alert message, "YOU MELTED! GAME OVER!" The irony of SlimeBall being practically already melted "goo" captures the essence of a playful conflict,
where failure is more part of the fun as opposed to a frustrating setback. The collision detection is implemented through coordinate comparison.
The player's current tile position is compared to the NPC's to trigger the game over. I used "if" statements to show how logic can be applied to game development.

The overall game design is based on object-oriented programming which was taught in the notion link. Use of classes helps encapsulates different aspects of the game like enviroment
and NPC behaviours. This approach simplifies the management of the code, helping to code in a more maintainable and scalable way.
Overall, the mechanical design of the project reflects a balanced approach of creative expression and technical implementations. The tile based movement and dynamic nature of the game
provides a humourous, yet still challenging enviroment. Using techniques taught in class like arrays, functions and methods I am able to develop my code beyond what was taught in class
and use code to create artwork.

If I had more time, as I was working independantly, I had major issues with adding a second level. Everytime I would add a second set of GraphicsMap and tilesRules I would be hit with a 
blank screen when running my code even though I would refactor correctly, something would always go wrong with the loadLevel() function.
If I had more time or a group to work with, my wish for this game was to make it so its something different every level. I had plans to keep the first level as it is
and when you go to the next level it will be like an online rock, paper, scissors where you (HeatBlast) are against SlimeBall and the leveks after all being fun mini games where a rivalry is
created for the user against the NPC.





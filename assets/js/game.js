var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}

//function to start new game 

var startGame = function () {
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  
  var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // other logic remains the same 
  }
  };


//play again
var startGame = function() {
  for (var i = 0; i < enemyNames.length; i++){

  }
}  
  // funection 2 end game 
  var endGame = function() {
    for (var i = o; i < enemyNames.length; i++) {
  }
    // if player is alive player wins 
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney +".");
    }
    else {
      window.alert("You've lost your robot in battle.")
    }

    // ask to play again 
    var playAgainConfirm = window.alert("Would you like to play again?");

    if (playAgainConfirm) {
      // reset the game 
      startGame();
    }
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };

// //play again
// var startGame = function() {
//   for (var i = 0; i < enemyNames.length; i++){

//   }
// }

startGame()














// // Game states 
// // win - player robot has defeated all enemy-robots 
// // *fiht all enemy-robots 
// // *defeat each enemy-robot 
// // "lose" - player robots health is zero or less 
// // alert("Welcome to robot Gladiators! Begin Round One");
// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length); 

// // for(var i = 0; i < enemyNames.length; i++) {
// //   console.log(enemyNames[i]);
// //   console.log(i);
// //   console.log(enemyNames[i] = " is at " + i + " index");
// // }

// // if (playerHealth > 0) {
//   // window.alert("Welcome to Robot Gladiators!" + (i + 1));
// // }

// // while (playerHealth > 0 && enemyHealth > 0)
// var fight = function(enemyName) {
//   while (playerHealth > 0 && enemyHealth > 0) {
//     // ask player if they'd like to fight or run
//     var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//     // if player picks "skip" confirm and then stop the loop
//     if (promptFight === "skip" || promptFight === "SKIP") {
//       // confirm player wants to skip
//       var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//       // if yes (true), leave fight
//       if (confirmSkip) {
//         window.alert(playerName + ' has decided to skip this fight. Goodbye!');
//         // subtract money from playerMoney for skipping
//         playerMoney = playerMoney - 10;
//         console.log("playerMoney", playerMoney)
//         break;
//       }
//     }

//     // remove enemy's health by subtracting the amount set in the playerAttack variable
//     enemyHealth = enemyHealth - playerAttack;
//     console.log(
//       playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
//     );

//     // check enemy's health
//     if (enemyHealth <= 0) {
//       window.alert(enemyName + ' has died!');

//       // award player money for winning
//       playerMoney = playerMoney + 20;

//       // leave while() loop since enemy is dead
//       break;
//     } else {
//       window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
//     }

//     // remove players's health by subtracting the amount set in the enemyAttack variable
//     playerHealth = playerHealth - enemyAttack;
//     console.log(
//       enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
//     );

//       window.alert("welcome to Robot Gladiators! Round " + (i + 1));


//     // check player's health
//     if (playerHealth <= 0) {
//       // window.alert("welcome to Robot Gladiators! Round " + (i + 1));
//       window.alert(playerName + ' has died!'); 

//       var pickedEnemyName = enemyNames[i];

//       enemyHealth = 50;

//       fight(pickedENemyName);

//       // break;
//     } else {
//       window.alert(playerName + ' still has ' + playerHealth + ' health left.');
//       break;
//     }
//   }
// };





// // var fight = function (enemyName) {
// //   // repeat and execute as long as enemy bo is alive
// //   // while (enemyHealth > 0) {
// //   //   for (var i = 0; i < enemyNames.length; i++) {
// //   //     debugger;
// //       var promptFight = window.prompt("would you liket to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'to choose");
// //     //   fight(enemyNames[i]);
// //     // }

// //     // if (enemyHealth <= 0) {
// //     //   window.alert(enemyName + " has died!");
// //     //   break;
// //     // }

// //     while (playerHealth > 0 && enemyHealth > 0)

// //     // for (var i = 0; i <enemyNames.length; i++) {
// //     //   var pickedEnemyName = enemyNames[i];
// //     //   enemyHealth = 50;
// //     //   fight(pickedEnemyName);
// //     // }

// //     // if (playerHealth <= 0){
// //     //   window.alert(playerName + " has died ")
// //     //   break;
// //     // }

// //   // if player chooses to fight then fight  
// //   // if (promptFight === "fight" || promptFight === "FIGHT") {
// //   //   // subtract value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
// //   //   enemyHealth = enemyHealth - playerAttack;
// //   //   // log a resulting message to the console so we know that it worked. 
// //   //   console.log(
// //   //     playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + "enemyHealth remaning."
// //   //   );



// //   //     if (prommptFight === "skip" || promptFight === "SKIP")
// //   //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");


// //   //   // if yes (true), leave fight 
// //   //   if (confirmSkip) {
// //   //     window.alert(playerName + "has decided to skip this fight. Goodbye!");
// //   //     // subtract money from playerMoney for skipping 
// //   //     playerMoney = playerMoney - 10;
// //   //     console.log("playerMoney", playerMoney)
// //   //     break; 
// //   //   }
// //     // //   }er picks "skip" confirm and then stop the loop 
// //     // // if (promptF
// //     // // }
// //   // }

// //     // check enemy's health 
// //     if (enemyHealth <= 0) {
// //       window.alert(enemyNames + " has died!");
// //       break;
// //     }
// //     else {
// //       window.alert(enemyNames + " still has " + enemyHealth + " health left.")
// //     }
// //     // subtract value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable. 
// //     playerHealth = playerHealth - enemyAttack;
// //     // log a resulting message to the console so we know that it worked 
// //     enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health-remaining."

// //     console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// //     // check players health 
// //     if (playerHealth <= 0) {
// //       window.alert(playerName + " has died!");
// //     }

// //     else {
// //       window.alert(playerName + " still has " + playerHealth + " health left.");
// //     }
// //     // if player chooses to skip 
// //   } else if (promptFight === "skip" || promptFight === "SKIP") {
// //     // confirm player wants to skip 
// //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");


// //     // // if yes (true), leave fight 
// //     // if (confirmSkip) {
// //     //   window.alert(playerName + " has decided to skip this fight. Goodbye!");
// //     //   // subtract money away from playermoney for skipping 
// //     //   playerMoney = playerMoney - 10;
// //     //   console.log("playerMoney", playerMoney);
// //     //   break;
// //     // }
// //     // // if no (flase), ask question again by running fight () again
// //     else {
// //       fight();
// //     }

// //   } else {
// //     window.alert("You need to choose a valid option. Try again!");
// //   }

// // };







// // for (var i = 0; i < enemyNames.length; i++) {
// //   fight(enemyNames[i]);
// // };

// // }

// // fight()
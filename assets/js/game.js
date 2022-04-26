const playerName = prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10

const enemyName = "Thagalfor";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function fight() {
    window.alert("Welcome to the Arena!");

    let promptFight = confirm("Would you like to skip this fight?");
    if (promptFight = false) {
        enemyHealth -= playerAttack;

        if (enemyHealth <= 0) {
            enemyHealth = 0;
            alert("Fuck " + enemyName + ", you killed the shit out of them!");
        } else {
            alert(enemyName + " now has " + enemyHealth + " HP left!");
        };

        playerHealth -= enemyAttack;
        if (playerHealth <= 0) {
            playerHealth = 0;
            alert(playerName + " died, fucking loser...");
        } else {
            alert(playerName + " still has " + playerHealth + " HP!");
        }
    } else {
        let skipConfirm = confirm("Are you sure you want to skip this fight?");
        if (skipConfirm = true) {
            alert(playerName + " has pussied out and skipped this fight.");

            playerMoney -= 3;
        } else {
            fight();
        }
    }
};

fight();
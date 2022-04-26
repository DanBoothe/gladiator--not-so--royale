const playerName = prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

const enemyName = "Thagalfor";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function fight() {
    window.alert("Welcome to the Arena!");

    enemyHealth = enemyHealth - playerAttack;

    if (enemyHealth <= 0) {
        enemyHealth = 0;
        alert("Fuck " + enemyName + ", you killed the shit out of them!");
    } else {
        alert(enemyName + " now has " + enemyHealth + " HP left!");
    };

    playerHealth = playerHealth - enemyAttack;
    if (playerHealth <= 0) {
        playerHealth = 0;
        alert(playerName + " died, fucking loser...");
    } else {
        alert(playerName + " still has " + playerHealth + " HP!");
    }
};

fight();
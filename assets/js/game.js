const playerName = prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10

const enemyNames = "Thagalfor"
let enemyHealth = 50;
let enemyAttack = 12;



function fight() {
    alert("Welcome to the Arena!");

    const promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " has "  + enemyHealth + " HP left!");
        if (enemyHealth <= 0) {
            enemyHealth = 0;
            alert("You have reduced " + enemyNames + "'s HP to " + enemyHealth);
        } else {
            alert("You have reduced " + enemyNames + "'s HP to " + enemyHealth);   
        }

        playerHealth -= enemyAttack;
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " has "  + playerHealth + " HP left!");
        if (playerHealth <= 0) {
            playerHealth = 0;
            alert(playerName + " has been reduced to " + playerHealth + " HP.");
        } else {
            alert(playerName + " has been reduced to " + playerHealth + " HP.");  
        };
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        alert(playerName + " has opted to skip this fight.");
    } else {
        alert("Please choose a valid option.");
        fight();
    }
}

fight();
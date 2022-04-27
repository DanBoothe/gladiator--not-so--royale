const playerName = prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 100;
let playerMoney = 10

const enemyNames = ["Thagalfor", "Signcade", "xXx_BlAzEiT_420_xXx"]
let enemyHealth = 50;
let enemyAttack = 12;


alert("Welcome to the Arena!");

function fight(enemyName) {
    const promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " has "  + enemyHealth + " HP left!");
        if (enemyHealth <= 0) {
            enemyHealth = 0;
            alert("You have reduced " + enemyName + "'s HP to " + enemyHealth);
        } else {
            alert("You have reduced " + enemyName + "'s HP to " + enemyHealth);   
        }

        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " has "  + playerHealth + " HP left!");
        if (playerHealth <= 0) {
            playerHealth = 0;
            alert(playerName + " has been reduced to " + playerHealth + " HP.");
        } else {
            alert(playerName + " has been reduced to " + playerHealth + " HP.");  
        };
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        let skipConfirm = confirm("Are you sure you would like to skip this fight?");
        if (skipConfirm) {
            alert(playerName + " has opted to skip this fight.");
            playerMoney -= 3;
        } else {
            fight();
        }
    } else {
        alert("Please choose a valid option.");
        fight();
    }
}

for (i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

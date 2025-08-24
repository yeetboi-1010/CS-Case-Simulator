const OpenFeverButton = document.getElementById("FeverOpenButton")
const FeverResults = document.getElementById("Results")

let FeverCaseItems = [
    {name: "Blue Gem", chance: 50},
    {name: "Gold Gem", chance: 30},
    {name: "Purple Gem", chance: 20}
]

OpenFeverButton.addEventListener("click", FeverCaseOpened)

function FeverCaseOpened() {
    let roll = Math.random() * 100;
    let RunningTotal = 0;
    let ChosenItem;

    for (let i=0; i < FeverCaseItems.length; i++) {
        RunningTotal += FeverCaseItems[i].chance

        if (roll < RunningTotal) {
            ChosenItem = FeverCaseItems[i];
            break;
        }
    }

    FeverResults.innerText = ChosenItem.name;

}
const OpenFeverButton = document.getElementById("FeverOpenButton")
const FeverResults = document.getElementById("Results")

let FeverCaseItems = [
    {name: "blue", chance: 50},
    {name: "purple", chance: 30},
    {name: "gold", chance: 20}
]

let FeverCaseDropped = {
    blue: [
        "P2000 - Sure Grip",
        "MP9 - Nexus",
        "USP-S - PC-GRN",
        "SSG 08 - Memorial"
    ],
    purple: [
        "Glock-18 - Shinobu",
        "AK-47 - Searing Range",
        "UMP-45 - K.O. Facotory"
    ],
    gold: [
        "Skeleton Knife - Marble Fade",
        "Nomad Knife - Doppler",
        "Paracord Knife - Damascus Steel",
        "Survival Knife - Tiger Tooth"
    ]
};

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

    let skins = FeverCaseDropped[ChosenItem.name]
    let randomIndex = Math.floor(Math.random() * skins.length)
    let ChosenSkin = skins[randomIndex]


    FeverResults.innerText = ChosenSkin;

}
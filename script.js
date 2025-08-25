const OpenFeverButton = document.getElementById("FeverOpenButton")
const FeverResults = document.getElementById("Results")
const FeverImageDrops = document.getElementById("FeverDroppedSkinImage")

let FeverCaseItems = [
    {name: "milSpec", chance: 79.92328},
    {name: "restricted", chance: 15.98465},
    {name: "classified", chance: 3.19693},
    {name: "covert", chance: 0.63939},
    {name: "specialItem", chance: 0.25575}
]

let FeverCaseDropped = {
    milSpec: [
        {name: "P2000 - Sure Grip", img: "Images/Cases/FeverCase/Skins/P2000-SureGrip.png"},
        {name: "MP9 - Nexus", img: "Images/Cases/FeverCase/Skins/MP9-Nexus.png"},
        {name: "USP-S - PC-GRN", img: "Images/Cases/FeverCase/Skins/USPS-PCGRN.png"},
        {name: "SSG 08 - Memorial", img: "Images/Cases/FeverCase/Skins/SSG08-Memorial.png"},
        {name: "M4A4 - Choppa", img:"Images/Cases/FeverCase/Skins/M4A4-Choppa.png"},
        {name: "MAG-7 - Resupply", img: "Images/Cases/FeverCase/Skins/MAG7-Resupply.png"},
        {name: "XM1014 - Mockingbird", img: "Images/Cases/FeverCase/Skins/XM1014-Mockingbird.png"}
    ],
    restricted: [
        {name: }
    ],
    classified: [
        {name: "Glock-18 - Shinobu", img: "Images/Cases/FeverCase/Skins/G18-Shinobu.png"},
        {name: "AK-47 - Searing Range", img: "Images/Cases/FeverCase/Skins/AK-SearingRange.png"},
        {name: "UMP-45 - K.O. Factory", img: "Images/Cases/FeverCase/Skins/UMP45-KoFactory.png"}
    ],
    specialItem: [
        {name: "Skeleton Knife - Marble Fade", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-MarbleFade.png"},
        {name: "Nomad Knife - Doppler", img: "Images/Cases/FeverCase/Skins/NomadKnife-Doppler.png"},
        {name: "Paracord Knife - Damascus Steel", img: "Images/Cases/FeverCase/Skins/ParacordKnife-DamascusSteel.png"},
        {name: "Survival Knife - Tiger Tooth", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-TigerTooth.png"}
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


    FeverResults.innerText = ChosenSkin.name;
    FeverImageDrops.src = ChosenSkin.img;
}
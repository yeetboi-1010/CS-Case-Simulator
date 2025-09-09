const GlobalCaseTotal = document.getElementById("GlobalCaseCounter")
let GlobalCasesOpenedTotal = 0;

const GlobalPricesText = document.getElementById("GlobalPriceCounter")
let GlobalPricesNumber = 0;

const GlobalSpentText = document.getElementById("GlobalSpentCounter")
let GlobalSpentNumber = 0;

const OpenFeverButton = document.getElementById("FeverOpenButton")
const FeverResults = document.getElementById("Results")
const FeverImageDrops = document.getElementById("FeverDroppedSkinImage")
const CaseTotal = document.getElementById("CasesTotal")

let CasesOpenedTotal = 0;

let FeverCaseItems = [
    {name: "milSpec", chance: 79.92328},
    {name: "restricted", chance: 15.98465},
    {name: "classified", chance: 3.19693},
    {name: "covert", chance: 0.63939},
    {name: "specialItem", chance: 0.25575}
]

let FeverCaseDropped = {
    milSpec: [
        {name: "P2000 - Sure Grip (Mil-Spec)", price: 0.26, img: "Images/Cases/FeverCase/Skins/P2000-SureGrip.png"},
        {name: "MP9 - Nexus (Mil-Spec)", price: 0.27, img: "Images/Cases/FeverCase/Skins/MP9-Nexus.png"},
        {name: "USP-S - PC-GRN (Mil-Spec)", price: 0.67, img: "Images/Cases/FeverCase/Skins/USPS-PCGRN.png"},
        {name: "SSG 08 - Memorial (Mil-Spec)", price: 0.32, img: "Images/Cases/FeverCase/Skins/SSG08-Memorial.png"},
        {name: "M4A4 - Choppa (Mil-Spec)", price: 0.52, img:"Images/Cases/FeverCase/Skins/M4A4-Choppa.png"},
        {name: "MAG-7 - Resupply (Mil-Spec)", price: 0.25, img: "Images/Cases/FeverCase/Skins/MAG7-Resupply.png"},
        {name: "XM1014 - Mockingbird (Mil-Spec)", price: 0.26, img: "Images/Cases/FeverCase/Skins/XM1014-Mockingbird.png"}
    ],
    restricted: [
        {name: "Desert Eagle - Serpent Strike (Restricted)", price: 1.94, img: "Images/Cases/FeverCase/Skins/Deagle-SerpentStrike.png"},
        {name: "Galil AR - Control (Restricted)", price: 1.83, img: "Images/Cases/FeverCase/Skins/Galil-Control.png"},
        {name: "Nova - Rising Sun (Restricted)", price: 2.47, img: "Images/Cases/FeverCase/Skins/Nova-RisingSun.png"},
        {name: "P90 - Wave Breaker (Restricted)", price: 2.02, img: "Images/Cases/FeverCase/Skins/P90-WaveBreaker.png"},
        {name: "Zeus x27 - Tosai (Restricted)", price: 1.78, img: "Images/Cases/FeverCase/Skins/ZeusX27-Tosai.png"}
    ],
    classified: [
        {name: "Glock-18 - Shinobu (Classified)", price: 19.89, img: "Images/Cases/FeverCase/Skins/G18-Shinobu.png"},
        {name: "AK-47 - Searing Range (Classified)", price: 22.53, img: "Images/Cases/FeverCase/Skins/AK-SearingRange.png"},
        {name: "UMP-45 - K.O. Factory (Classified)", price: 14.14, img: "Images/Cases/FeverCase/Skins/UMP45-KoFactory.png"}
    ],
    covert: [
        {name: "AWP - Prinstream (Covert)", price: 16.67, img: "Images/Cases/FeverCase/Skins/AWP-Printstream.png"},
        {name: "FAMAS - Bad Trip (Covert)", price: 275.29, img: "Images/Cases/FeverCase/Skins/FAMAS-BadTrip.png"}
    ],
    specialItem: [
        {name: "Skeleton Knife - Marble Fade (Special Item)", price: 859.99, img: "Images/Cases/FeverCase/Skins/SkeletonKnife-MarbleFade.png"},
        {name: "Nomad Knife - Doppler (Special Item)", price: 817.47, img: "Images/Cases/FeverCase/Skins/NomadKnife-Doppler.png"},
        {name: "Paracord Knife - Damascus Steel (Special Item)", price: 140.48, img: "Images/Cases/FeverCase/Skins/ParacordKnife-DamascusSteel.png"},
        {name: "Survival Knife - Tiger Tooth (Special Item)", price: 209.00, img: "Images/Cases/FeverCase/Skins/SurvivalKnife-TigerTooth.png"},
        {name: "Nomad Knife - Damascus Steel (Special Item)", price: 289.90, img: "Images/Cases/FeverCase/Skins/NomadKnife-DamascusSteel.png"},
        {name: "Nomad Knife - Marble Fade (Special Item)", price: 525.34, img: "Images/Cases/FeverCase/Skins/NomadKnife-MarbleFade.png"},
        {name: "Nomad Knife - Rust Coat (Special Item)", price: 204.36, img: "Images/Cases/FeverCase/Skins/NomadKnife-RustCoat.png"},
        {name: "Nomad Knife - Tiger Tooth (Special Item)", price: 422.56, img: "Images/Cases/FeverCase/Skins/NomadKnife-TigerTooth.png"},
        {name: "Nomad Knife - Ultraviolet (Special Item)", price: 546.92, img: "Images/Cases/FeverCase/Skins/NomadKnife-Ultraviolet.png"},
        {name: "Paracord Knife - Doppler (Special Item)", price: 395.00, img: "Images/Cases/FeverCase/Skins/ParacordKnife-Doppler.png"},
        {name: "Paracord Knife - Marble Fade (Special Item)", price: 276.98, img: "Images/Cases/FeverCase/Skins/ParacordKnife-MarbleFade.png"},
        {name: "Paracord Knife - Rust Coat (Special Item)", price: 98.22, img: "Images/Cases/FeverCase/Skins/ParacordKnife-RustCoat.png"},
        {name: "Paracord Knife - Tiger Tooth (Special Item)", price: 220.43, img: "Images/Cases/FeverCase/Skins/ParacordKnife-TigerTooth.png"},
        {name: "Paracord Knife - Ultraviolet (Special Item)", price: 361.38, img: "Images/Cases/FeverCase/Skins/ParacordKnife-Ultraviolet.png"},
        {name: "Skeleton Knife - Damascus Steel (Special Item)", price: 440.00, img: "Images/Cases/FeverCase/Skins/SkeletonKnife-DamascusSteel.png"},
        {name: "Skeleton Knife - Doppler (Special Item)", price: 1402.22, img: "Images/Cases/FeverCase/Skins/SkeletonKnife-Doppler.png"},
        {name: "Skeleton Knife - Rust Coat (Special Item)", price: 283.59, img: "Images/Cases/FeverCase/Skins/SkeletonKnife-RustCoat.png"},
        {name: "Skeleton Knife - Tiger Tooth (Special Item)", price: 666.97, img: "Images/Cases/FeverCase/Skins/SkeletonKnife-TigerTooth.png"},
        {name: "Skeleton Knife - Ultraviolet (Special Item)", price: 820.30, img: "Images/Cases/FeverCase/Skins/SkeletonKnife-Ultraviolet.png"},
        {name: "Survival Knife - Damascus Steel (Special Item)", price: 138.12, img: "Images/Cases/FeverCase/Skins/SurvivalKnife-DamascusSteel.png"},
        {name: "Survival Knife - Doppler (Special Item)", price: 353.87, img: "Images/Cases/FeverCase/Skins/SurvivalKnife-Doppler.png"},
        {name: "Survival Knife - Marble Fade (Special Item)", price: 254.86, img: "Images/Cases/FeverCase/Skins/SurvivalKnife-MarbleFade.png"},
        {name: "Survival Knife - Rust Coat (Special Item)", price: 112.37, img: "Images/Cases/FeverCase/Skins/SurvivalKnife-RustCoat.png"},
        {name: "Survival Knife - Ultraviolet (Special Item)", price: 229.90, img: "Images/Cases/FeverCase/Skins/SurvivalKnife-Ultraviolet.png"}
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

    CasesOpenedTotal = CasesOpenedTotal + 1;
    GlobalCasesOpenedTotal = GlobalCasesOpenedTotal + 1;
    GlobalPricesNumber = GlobalPricesNumber + ChosenSkin.price;
    GlobalPricesNumberRounded = Math.round(GlobalPricesNumber * 100) / 100;
    GlobalSpentNumber = GlobalSpentNumber + 1.00 + 2.50;
    GlobalSpentNumberRounded = Math.round(GlobalSpentNumber * 100) / 100;
    FeverResults.innerText = ChosenSkin.name + " ($" + ChosenSkin.price + ")";
    FeverImageDrops.src = ChosenSkin.img;
    CaseTotal.innerText = "Total Fever Cases Opened: " + CasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
    GlobalPricesText.innerText = "Cost of unboxed skins: $" + GlobalPricesNumberRounded
    GlobalSpentText.innerText = "Total spent opening cases: $" + GlobalSpentNumberRounded
}








const OpenRecoilButton = document.getElementById("RecoilOpenButton")
const RecoilResults = document.getElementById("RecoilResults")
const RecoilImageDrops = document.getElementById("RecoilDroppedSkinImage")
const RecoilCaseTotal = document.getElementById("CasesTotalRecoil")

let RecoilCasesOpenedTotal = 0;

let RecoilCaseItems = [
    {name: "milSpec", chance: 79.92328},
    {name: "restricted", chance: 15.98465},
    {name: "classified", chance: 3.19693},
    {name: "covert", chance: 0.63939},
    {name: "specialItem", chance: 0.25575}
]

let RecoilCaseDropped = {
    milSpec: [
        {name: "MAC-10 - Monkeyflage (Mil-Spec)", price: 0.20, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/MAC10-Monkeyflage.png"},
        {name: "UMP-45 - Roadblock (Mil-Spec)", price: 0.20, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/UMP45-Roadblock.png"},
        {name: "Negev - Drop Me (Mil-Spec)", price: 0.19, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/Negev-DropMe.png"},
        {name: "FAMAS - Meow 36 (Mil-Spec)", price: 0.22, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/FAMAS-Meow36.png"},
        {name: "Galil AR - Destroyer (Mil-Spec)", price: 0.18, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/Galil-Destroyer.png"},
        {name: "M4A4 - Poly Mag (Mil-Spec)", price: 0.35, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/M4-PolyMag.png"},
        {name: "Glock 18 - Winterized (Mil-Spec)", price: 0.24, img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/G18-Winterized.png"}
    ],
    restricted: [
        {name: "Dual Berettas - Flora Carnivora (Restricted)", price: 1.76, img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/DualB-FloraCarnivora.png"},
        {name: "P90 - Vent Rush (Restricted)", price: 1.21, img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/P90-VentRush.png"},
        {name: "SG 553 - Dragon Tech (Restricted)", price: 1.20, img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/SG553-DragonTech.png"},
        {name: "R8 Revolver - Crazy 8 (Restricted)", price: 1.49, img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/R8-Crazy8.png"},
        {name: "M249 - Downtown (Restricted)", price: 1.26, img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/Downtown.png"}
    ],
    classified: [
        {name: "AK-47 - Ice Coaled (Classified)", price: 13.40, img: "Images/Cases/RecoilCase/Skins/RecoilClassified/AK-IceCoaled.png"},
        {name: "P250 - Visions (Classified)", price: 8.83, img: "Images/Cases/RecoilCase/Skins/RecoilClassified/P250-Visions.png"},
        {name: "Sawed-Off - Kiss♥Love (Classified)", price: 10.36, img: "Images/Cases/RecoilCase/Skins/RecoilClassified/SawedOff-KissLove.png"}
    ],
    covert: [
        {name: "AWP - Chromatic Aberration (Covert)", price: 22.33, img: "Images/Cases/RecoilCase/Skins/RecoilCovert/AWP-ChromaticAberration.png"},
        {name: "USP-S - Printstream (Covert)", price: 115.69, img: "Images/Cases/RecoilCase/Skins/RecoilCovert/USPS-Printstream.png"}
    ],
    specialItem: [
        {name: "Broken Fang Gloves - Jade (Special Item)", price: 783.36, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-Jade.png"},
        {name: "Broken Fang Gloves - Needle Point (Special Item)", price: 337.49, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-NeedlePoint.png"},
        {name: "Broken Fang Gloves - Unhinged (Special Item)", price: 469.28, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-Unhinged.png"},
        {name: "Broken Fang Gloves - Yellow-Banded (Special Item)", price: 453.17, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-YellowBanded.png"},
        {name: "Driver Gloves - Black Tie (Special Item)", price: 2384.02, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DriverGloves-BlackTie.png"},
        {name: "Driver Gloves - Queen Jaguar (Special Item)", price: 668.92, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DriverGloves-QueenJaguar.png"},
        {name: "Driver Gloves - Snow Leopard (Special Item)", price: 3430.89, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DriverGloves-SnowLeopard.png"},
        {name: "Driver Gloves - Rezan the Red (Special Item)", price: 906.77, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DrivingGloves-RezanRed.png"},
        {name: "Hand Wraps - CAUTION! (Special Item)", price: 1191.11, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-Caution.png"},
        {name: "Hand Wraps - Constrictor (Special Item)", price: 416.26, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-Constrictor.png"},
        {name: "Hand Wraps - Desert Shamagh (Special Item)", price: 655.00, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-DesertShamagh.png"},
        {name: "Hand Wraps - Giraffe (Special Item)", price: 450.00, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-Giraffe.png"},
        {name: "Moto Gloves - 3rd Commando Company (Special Item)", price: 378.28, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-3rdCommandoCompany.png"},
        {name: "Moto Gloves - Blood Pressure (Special Item)", price: 1017.64, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-BloodPressure.png"},
        {name: "Moto Gloves - Finish Line (Special Item)", price: 1070.65, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-FinishLine.png"},
        {name: "Moto Gloves - Smoke Out (Special Item)", price: 1121.89, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-SmokeOut.png"},
        {name: "Specialist Gloves - Field Agent (Special Item)", price: 2090.00, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-FieldAgent.png"},
        {name: "Specialist Gloves - Lt. Commander (Special Item)", price: 1142.88, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-LtCommander.png"},
        {name: "Specialist Gloves - Marble Fade (Special Item)", price: 3054.35, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-MarbleFade.png"},
        {name: "Specialist Gloves - Tiger Strike (Special Item)", price: 2519.99, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-TigerStrike.png"},
        {name: "Sport Gloves - Big Game (Special Item)", price: 1402.36, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-BigGame.png"},
        {name: "Sport Gloves - Nocts (Special Item)", price: 4136.98, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-Nocts.png"},
        {name: "Sport Gloves - Scarlet Shamagh (Special Item)", price: 1892.91, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-ScarletShamagh.png"},
        {name: "Sport Gloves - Slingshot (Special Item)", price: 7095.97, img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-Slingshot.png"}
    ]
};

OpenRecoilButton.addEventListener("click", RecoilCaseOpened)

function RecoilCaseOpened() {
    let rollRecoil = Math.random() * 100;
    let RecoilRunningTotal = 0;
    let RecoilChosenItem;

    for (let i=0; i < RecoilCaseItems.length; i++) {
        RecoilRunningTotal += RecoilCaseItems[i].chance

        if (rollRecoil < RecoilRunningTotal) {
            RecoilChosenItem = RecoilCaseItems[i];
            break;
        }
    }

    let skinsRecoil = RecoilCaseDropped[RecoilChosenItem.name]
    let randomIndexRecoil = Math.floor(Math.random() * skinsRecoil.length)
    let RecoilChosenSkin = skinsRecoil[randomIndexRecoil]

    RecoilCasesOpenedTotal = RecoilCasesOpenedTotal + 1;
    GlobalCasesOpenedTotal = GlobalCasesOpenedTotal + 1;
    GlobalPricesNumber = GlobalPricesNumber + RecoilChosenSkin.price;
    GlobalPricesNumberRounded = Math.round(GlobalPricesNumber * 100) / 100;
    GlobalSpentNumber = GlobalSpentNumber + 0.40 + 2.50;
    GlobalSpentNumberRounded = Math.round(GlobalSpentNumber * 100) / 100;
    RecoilResults.innerText = RecoilChosenSkin.name + " ($" +RecoilChosenSkin.price + ")";
    RecoilImageDrops.src = RecoilChosenSkin.img;
    RecoilCaseTotal.innerText = "Total Recoil Cases Opened: " + RecoilCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
    GlobalPricesText.innerText = "Cost of unboxed skins: $" + GlobalPricesNumberRounded
    GlobalSpentText.innerText = "Total spent opening cases: $" + GlobalSpentNumberRounded
}






const OpenDreamsNightmaresButton = document.getElementById("DreamsNightmaresOpenButton")
const DreamsNightmaresResults = document.getElementById("DreamsNightmaresResults")
const DreamsNightmaresImageDrops = document.getElementById("DreamsNightmaresDroppedSkinImage")
const DreamsNightmaresCaseTotal = document.getElementById("CasesTotalDreamsNightmares")

let DreamsNightmaresCasesOpenedTotal = 0;

let DreamsNightmaresCaseItems = [
    {name: "milSpec", chance: 79.92328},
    {name: "restricted", chance: 15.98465},
    {name: "classified", chance: 3.19693},
    {name: "covert", chance: 0.63939},
    {name: "specialItem", chance: 0.25575}
]

let DreamsNightmaresCaseDropped = {
    milSpec: [
        {name: "Five-SeveN - Scrawl (Mil-Spec)", price: 0.25, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/FiveSeveN-Scrawl.png"},
        {name: "MAC-10 - Ensnared (Mil-Spec)", price: 0.25, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/MAC10-Ensnared.png"},
        {name: "MAG-7 - Foresight (Mil-Spec)", price: 0.17, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/MAG7-Foresight.png"},
        {name: "MP5-SD - Necro Jr. (Mil-Spec)", price: 0.20, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/MP5SD-NecroJr.png"},
        {name: "P2000 - Lifted Spirits (Mil-Spec)", price: 0.20, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/P2000-LiftedSpirits.png"},
        {name: "Sawed-Off - Spirit Board (Mil-Spec)", price: 0.19, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/SawedOff-SpiritBoard.png"},
        {name: "SCAR-20 - Poultrygeist (Mil-Spec)", price: 0.17, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/SCAR20-Poultrygeist.png"}
    ],
    restricted: [
        {name: "G3SG1 - Dream Glade (Restricted)", price: 1.08, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/G3SG1-DreamGlade.png"},
        {name: "M4A1-S - Night Terror (Restricted)", price: 1.69, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/M4A1S-NightTerror.png"},
        {name: "PP-Bizon - Space Cat (Restricted)", price: 1.03, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/PPBizon-SpaceCat.png"},
        {name: "USP-S - Ticket to Hell (Restricted)", price: 1.39, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/USPS-TicketToHell.png"},
        {name: "XM1014 - Zombie Offensive (Restricted)", price: 0.97, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/XM1014-ZombieOffensive.png"}
    ],
    classified: [
        {name: "Dual Berettas - Melondrama (Classified)", price: 8.10, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresClassified/DualB-Melondrama.png"},
        {name: "FAMAS - Rapid Eye Movement (Classified)", price: 8.01, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresClassified/FAMAS-RapidEyeMovement.png"},
        {name: "MP7 - Abyssal Apparition (Classified)", price: 7.31, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresClassified/MP7-AbyssalApparition.png"}
    ],
    covert: [
        {name: "AK-47 - Nightwish (Covert)", price: 69.66, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresCovert/AK-Nightwish.png"},
        {name: "MP9 - Starlight Protector (Covert)", price: 16.33, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresCovert/MP9-StarlightProtector.png"}
    ],
    specialItem: [
        {name: "Bowie Knife - Autotronic (Special Item)", price: 263.56, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-Autotronic.png"},
        {name: "Bowie Knife - Black Laminate (Special Item)", price: 170.80, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-BlackLaminate.png"},
        {name: "Bowie Knife - Bright Water (Special Item)", price: 144.47, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-BrightWater.png"},
        {name: "Bowie Knife - Freehand (Special Item)", price: 167.00, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-Freehand.png"},
        {name: "Bowie Knife - Gamma Doppler (Special Item)", price: 410.45, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-GammaDoppler.png"},
        {name: "Bowie Knife - Lore (Special Item)", price: 349.96, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-Lore.png"},
        {name: "Butterfly Knife - Autotronic (Special Item)", price: 2895.00, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-Autotronic.png"},
        {name: "Butterfly Knife - Black Laminate (Special Item)", price: 1653.11, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-BlackLaminate.png"},
        {name: "Butterfly Knife - Bright Water (Special Item)", price: 1160.81, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-BrightWater.png"},
        {name: "Butterfly Knife - Freehand (Special Item)", price: 1324.82, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-Freehand.png"},
        {name: "Butterfly Knife - Gamma Doppler (Special Item)", price: 4425.00, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-GammaDoppler.png"},
        {name: "Butterfly Knife - Lore (Special Item)", price: 4185.50, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-Lore.png"},
        {name: "Falchion Knife - Autotronic (Special Item)", price: 276.32, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-Autotronic.png"},
        {name: "Falchion Knife - Black Laminate (Special Item)", price: 176.62, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-BlackLaminate.png"},
        {name: "Falchion Knife - Bright Water (Special Item)", price: 159.91, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-BrightWater.png"},
        {name: "Falchion Knife - Freehand (Special Item)", price: 176.39, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-Freehand.png"},
        {name: "Falchion Knife - Gamma Doppler (Special Item)", price: 434.66, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-GammaDoppler.png"},
        {name: "Falchion Knife - Lore (Special Item)", price: 247.00, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-Lore.png"},
        {name: "Huntsman Knife - Autotronic (Special Item)", price: 334.27, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-Autotronic.png"},
        {name: "Huntsman Knife - Black Laminate (Special Item)", price: 224.62, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-BlackLaminate.png"},
        {name: "Huntsman Knife - Bright Water (Special Item)", price: 151.38, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-BrightWater.png"},
        {name: "Huntsman Knife - Freehand (Special Item)", price: 165.75, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-Freehand.png"},
        {name: "Huntsman Knife - Gamma Doppler (Special Item)", price: 455.06, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-GammaDoppler.png"},
        {name: "Huntsman Knife - Lore (Special Item)", price: 258.95, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-Lore.png"},
        {name: "Shadow Daggers - Autotronic (Special Item)", price: 158.05, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-Autotronic.png"},
        {name: "Shadow Daggers - Black Laminate (Special Item)", price: 120.56, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-BlackLaminate.png"},
        {name: "Shadow Daggers - Bright Water (Special Item)", price: 91.62, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-BrightWater.png"},
        {name: "Shadow Daggers - Freehand (Special Item)", price: 122.69, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-Freehand.png"},
        {name: "Shadow Daggers - Gamma Doppler (Special Item)", price: 187.97, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-GammaDoppler.png"},
        {name: "Shadow Daggers - Lore (Special Item)", price: 209.09, img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-Lore.png"}
    ]
};

OpenDreamsNightmaresButton.addEventListener("click", DreamsNightmaresCaseOpened)

function DreamsNightmaresCaseOpened() {
    let rollDreamsNightmares = Math.random() * 100;
    let DreamsNightmaresRunningTotal = 0;
    let DreamsNightmaresChosenItem;

    for (let i=0; i < DreamsNightmaresCaseItems.length; i++) {
        DreamsNightmaresRunningTotal += DreamsNightmaresCaseItems[i].chance

        if (rollDreamsNightmares < DreamsNightmaresRunningTotal) {
            DreamsNightmaresChosenItem = DreamsNightmaresCaseItems[i];
            break;
        }
    }

    let skinsDreamsNightmares = DreamsNightmaresCaseDropped[DreamsNightmaresChosenItem.name]
    let randomIndexDreamsNightmares = Math.floor(Math.random() * skinsDreamsNightmares.length)
    let DreamsNightmaresChosenSkin = skinsDreamsNightmares[randomIndexDreamsNightmares]

    DreamsNightmaresCasesOpenedTotal = DreamsNightmaresCasesOpenedTotal + 1;
    GlobalCasesOpenedTotal = GlobalCasesOpenedTotal + 1;
    GlobalPricesNumber = GlobalPricesNumber + DreamsNightmaresChosenSkin.price;
    GlobalPricesNumberRounded = Math.round(GlobalPricesNumber * 100) / 100;
    GlobalSpentNumber = GlobalSpentNumber + 2.01 + 2.50;
    GlobalSpentNumberRounded = Math.round(GlobalSpentNumber * 100) / 100;
    DreamsNightmaresResults.innerText = DreamsNightmaresChosenSkin.name + " ($" + DreamsNightmaresChosenSkin.price + ")";
    DreamsNightmaresImageDrops.src = DreamsNightmaresChosenSkin.img;
    DreamsNightmaresCaseTotal.innerText = "Total Dreams & Nightmares Cases Opened: " + DreamsNightmaresCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
    GlobalPricesText.innerText = "Cost of unboxed skins: $" + GlobalPricesNumberRounded
    GlobalSpentText.innerText = "Total spent opening cases: $" + GlobalSpentNumberRounded
}







const OpenHuntsmanWeaponButton = document.getElementById("HuntsmanWeaponOpenButton")
const HuntsmanWeaponResults = document.getElementById("HuntsmanWeaponResults")
const HuntsmanWeaponImageDrops = document.getElementById("HuntsmanWeaponDroppedSkinImage")
const HuntsmanWeaponCaseTotal = document.getElementById("CasesTotalHuntsmanWeapon")

let HuntsmanWeaponCasesOpenedTotal = 0;

let HuntsmanWeaponCaseItems = [
    {name: "milSpec", chance: 79.92328},
    {name: "restricted", chance: 15.98465},
    {name: "classified", chance: 3.19693},
    {name: "covert", chance: 0.63939},
    {name: "specialItem", chance: 0.25575}
]

let HuntsmanWeaponCaseDropped = {
    milSpec: [
        {name: "CZ75-Auto - Twist (Mil-Spec)", price: 2.22, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/CZ75Auto-Twist.png"},
        {name: "Galil AR - Kami (Mil-Spec)", price: 3.83, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/Galil-Kami.png"},
        {name: "P90 - Module (Mil-Spec)", price: 1.72, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/P90-Module.png"},
        {name: "P2000 - Pulse (Mil-Spec)", price: 1.85, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/P2000-Pulse.png"},
        {name: "SSG 08 - Slashed (Mil-Spec)", price: 1.28, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/SSG08-Slashed.png"},
        {name: "Tec-9 - Isaac (Mil-Spec)", price: 13.68, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/Tec-Isaac.png"}
    ],
    restricted: [
        {name: "AUG - Torque (Restricted)", price: 11.55, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/AUG-Torque.png"},
        {name: "MAC-10 - Tatter (Restricted)", price: 11.77, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/MAC10-Tatter.png"},
        {name: "PP-Bizon - Antique (Restricted)", price: 11.96, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/PPBizon-Antique.png"},
        {name: "XM1014 - Heaven Guard (Restricted)", price: 12.00, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/XM1014-HeavenGuard.png"}
    ],
    classified: [
        {name: "M4A1-S - Atomic Alloy (Classified)", price: 125.15, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponClassified/M4A1S-AtomicAlloy.png"},
        {name: "SCAR-20 - Cyrex (Classified)", price: 60.23, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponClassified/SCAR20-Cyrex.png"},
        {name: "USP-S - Caiman (Classified)", price: 66.45, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponClassified/USPS-Caiman.png"}
    ],
    covert: [
        {name: "AK-47 - Vulcan (Covert)", price: 900.62, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponCovert/AK-Vulcan.png"},
        {name: "M4A4 - Desert Strike (Covert)", price: 81.00, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponCovert/M4-DesertStrike.png"}
    ],
    specialItem: [
        {name: "Huntsman Knife - Blue Steel (Special Item)", price: 298.28, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-BlueSteel.png"},
        {name: "Huntsman Knife - Boreal Forest (Special Item)", price: 320.86, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-BorealForest.png"},
        {name: "Huntsman Knife - Case Hardened (Special Item)", price: 430.16, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-CaseHardened.png"},
        {name: "Huntsman Knife - Crimson Web (Special Item)", price: 762.60, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-CrimsonWeb.png"},
        {name: "Huntsman Knife - Fade (Special Item)", price: 560.80, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Fade.png"},
        {name: "Huntsman Knife - Forest DDPAT (Special Item)", price: 440.00, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-ForestDDPAT.png"},
        {name: "Huntsman Knife - Night (Special Item)", price: 854.88, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Night.png"},
        {name: "Huntsman Knife - Safari Mesh (Special Item)", price: 332.48, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-SafariMesh.png"},
        {name: "Huntsman Knife - Scorched (Special Item)", price: 700.00, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Scorched.png"},
        {name: "Huntsman Knife - Slaughter (Special Item)", price: 420.00, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Slaughter.png"},
        {name: "Huntsman Knife - Stained (Special Item)", price: 266.30, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Stained.png"},
        {name: "Huntsman Knife - Urban Masked (Special Item)", price: 701.18, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-UrbanMasked.png"},
        {name: "Huntsman Knife - Vanilla (Special Item)", price: 235.31, img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Vanilla.png"}
    ]
};

OpenHuntsmanWeaponButton.addEventListener("click", HuntsmanWeaponCaseOpened)

function HuntsmanWeaponCaseOpened() {
    let rollHuntsmanWeapon = Math.random() * 100;
    let HuntsmanWeaponRunningTotal = 0;
    let HuntsmanWeaponChosenItem;

    for (let i=0; i < HuntsmanWeaponCaseItems.length; i++) {
        HuntsmanWeaponRunningTotal += HuntsmanWeaponCaseItems[i].chance

        if (rollHuntsmanWeapon < HuntsmanWeaponRunningTotal) {
            HuntsmanWeaponChosenItem = HuntsmanWeaponCaseItems[i];
            break;
        }
    }

    let skinsHuntsmanWeapon = HuntsmanWeaponCaseDropped[HuntsmanWeaponChosenItem.name]
    let randomIndexHuntsmanWeapon = Math.floor(Math.random() * skinsHuntsmanWeapon.length)
    let HuntsmanWeaponChosenSkin = skinsHuntsmanWeapon[randomIndexHuntsmanWeapon]

    HuntsmanWeaponCasesOpenedTotal = HuntsmanWeaponCasesOpenedTotal + 1;
    GlobalCasesOpenedTotal = GlobalCasesOpenedTotal + 1;
    GlobalPricesNumber = GlobalPricesNumber + HuntsmanWeaponChosenSkin.price;
    GlobalPricesNumberRounded = Math.round(GlobalPricesNumber * 100) / 100;
    GlobalSpentNumber = GlobalSpentNumber + 13.38 + 20.65;
    GlobalSpentNumberRounded = Math.round(GlobalSpentNumber * 100) / 100;
    HuntsmanWeaponResults.innerText = HuntsmanWeaponChosenSkin.name + " ($" + HuntsmanWeaponChosenSkin.price + ")";
    HuntsmanWeaponImageDrops.src = HuntsmanWeaponChosenSkin.img;
    HuntsmanWeaponCaseTotal.innerText = "Total Huntsman Weapon Cases Opened: " + HuntsmanWeaponCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
    GlobalPricesText.innerText = "Cost of unboxed skins: $" + GlobalPricesNumberRounded
    GlobalSpentText.innerText = "Total spent opening cases (+price of applicable keys): $" + GlobalSpentNumberRounded
}







const OpenCSgoWeaponButton = document.getElementById("CSgoWeaponOpenButton")
const CSgoWeaponResults = document.getElementById("CSgoWeaponResults")
const CSgoWeaponImageDrops = document.getElementById("CSgoWeaponDroppedSkinImage")
const CSgoWeaponCaseTotal = document.getElementById("CasesTotalCSgoWeapon")

let CSgoWeaponCasesOpenedTotal = 0;

let CSgoWeaponCaseItems = [
    {name: "milSpec", chance: 79.92328},
    {name: "restricted", chance: 15.98465},
    {name: "classified", chance: 3.19693},
    {name: "covert", chance: 0.63939},
    {name: "specialItem", chance: 0.25574},
    {name: "scarPattern", chance: 0.00001}
]

let CSgoWeaponCaseDropped = {
    milSpec: [
        {name: "AUG - Wings (Mil-Spec)", price: 21.28, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponMilSpec/AUG-Wings.png"},
        {name: "MP7 - Skulls (Mil-Spec)", price: 20.89, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponMilSpec/MP7-Skulls.png"},
        {name: "SG 553 - Ultraviolet (Mil-Spec)", price: 41.70, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponMilSpec/SG553-Ultraviolet.png"}
    ],
    restricted: [
        {name: "Glock 18 - Dragon Tattoo (Restricted)", price: 130.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponRestricted/G18-DragonTattoo.png"},
        {name: "M4A1-S - Dark Water (Restricted)", price: 106.37, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponRestricted/M4A1S-DarkWater.png"},
        {name: "USP-S - Dark Water (Restricted)", price: 92.24, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponRestricted/USPS-DarkWater.png"}
    ],
    classified: [
        {name: "Desert Eagle - Hypnotic (Classified)", price: 162.67, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponClassified/Deagle-Hypnotic.png"},
        {name: "AK-47 - Case Hardened (Classified)", price: 361.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponClassified/AK-CaseHardened.png"}
    ],
    covert: [
        {name: "AWP - Lightning Strike (Covert)", price: 630.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponCovert/AWP-LightningStrike.png"}
    ],
    specialItem: [
        {name: "Bayonet - Blue Steel (Special Item)", price: 561.01, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-BlueSteel.png"},
        {name: "Bayonet - Boreal Forest (Special Item)", price: 429.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-BorealForest.png"},
        {name: "Bayonet - Case Hardened (Special Item)", price: 566.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-CaseHardened.png"},
        {name: "Bayonet - Crimson Web (Special Item)", price: 2670.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-CrimsonWeb.png"},
        {name: "Bayonet - Fade (Special Item)", price: 793.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-Fade.png"},
        {name: "Bayonet - Forest DDPAT (Special Item)", price: 373.07, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-ForestDDPAT.png"},
        {name: "Bayonet - Night (Special Item)", price: 950.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-Night.png"},
        {name: "Bayonet - Safari Mesh (Special Item)", price: 368.96, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-SafariMesh.png"},
        {name: "Bayonet - Scorched (Special Item)", price: 412.51, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-Scorched.png"},
        {name: "Bayonet - Slaughter (Special Item)", price: 600.83, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-Slaughter.png"},
        {name: "Bayonet - Stained (Special Item)", price: 341.94, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-Stained.png"},
        {name: "Bayonet - Urban Masked (Special Item)", price: 420.79, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-UrbanMasked.png"},
        {name: "Bayonet - Vanilla (Special Item)", price: 470.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Bayonet-Vanilla.png"},
        {name: "Flip Knife - Blue Steel (Special Item)", price: 336.61, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-BlueSteel.png"},
        {name: "Flip Knife - Boreal Forest (Special Item)", price: 249.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-BorealForest.png"},
        {name: "Flip Knife - Case Hardened (Special Item)", price: 406.45, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-CaseHardened.png"},
        {name: "Flip Knife - Crimson Web (Special Item)", price: 1542.80, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-CrimsonWeb.png"},
        {name: "Flip Knife - Fade (Special Item)", price: 804.39, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-Fade.png"},
        {name: "Flip Knife - Forest DDPAT (Special Item)", price: 349.90, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-ForestDDPAT.png"},
        {name: "Flip Knife - Night (Special Item)", price: 631.14, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-Night.png"},
        {name: "Flip Knife - Safari Mesh (Special Item)", price: 238.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-SafariMesh.png"},
        {name: "Flip Knife - Scorched (Special Item)", price: 195.18, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-Scorched.png"},
        {name: "Flip Knife - Slaughter (Special Item)", price: 475.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-Slaughter.png"},
        {name: "Flip Knife - Stained (Special Item)", price: 248.75, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-Stained.png"},
        {name: "Flip Knife - Urban Masked (Special Item)", price: 567.30, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-UrbanMasked.png"},
        {name: "Flip Knife - Vanilla (Special Item)", price: 393.80, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/FlipKnife-Vanilla.png"},
        {name: "Gut Knife - Blue Steel (Special Item)", price: 165.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-BlueSteel.png"},
        {name: "Gut Knife - Boreal Forest (Special Item)", price: 185.84, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-BorealForest.png"},
        {name: "Gut Knife - Case Hardened (Special Item)", price: 352.87, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-CaseHardened.png"},
        {name: "Gut Knife - Crimson Web (Special Item)", price: 535.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-CrimsonWeb.png"},
        {name: "Gut Knife - Fade (Special Item)", price: 247.50, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-Fade.png"},
        {name: "Gut Knife - Forest DDPAT (Special Item)", price: 103.70, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-ForestDDPAT.png"},
        {name: "Gut Knife - Night (Special Item)", price: 445.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-Night.png"},
        {name: "Gut Knife - Safari Mesh (Special Item)", price: 258.95, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-SafariMesh.png"},
        {name: "Gut Knife - Scorched (Special Item)", price: 111.64, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-Scorched.png"},
        {name: "Gut Knife - Slaughter (Special Item)", price: 201.49, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-Slaughter.png"},
        {name: "Gut Knife - Stained (Special Item)", price: 152.98, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-Stained.png"},
        {name: "Gut Knife - Urban Masked (Special Item)", price: 210.38, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-UrbanMasked.png"},
        {name: "Gut Knife - Vanilla (Special Item)", price: 126.08, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/GutKnife-Vanilla.png"},
        {name: "Karambit - Blue Steel (Special Item)", price: 1781.23, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-BlueSteel.png"},
        {name: "Karambit - Boreal Forest (Special Item)", price: 1305.07, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-BorealForest.png"},
        {name: "Karambit - Case Hardened (Special Item)", price: 2271.78, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-CaseHardened.png"},
        {name: "Karambit - Crimson Web (Special Item)", price: 7074.04, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-CrimsonWeb.png"},
        {name: "Karambit - Fade (Special Item)", price: 4215.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-Fade.png"},
        {name: "Karambit - Forest DDPAT (Special Item)", price: 1069.16, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-ForestDDPAT.png"},
        {name: "Karambit - Night (Special Item)", price: 1929.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-Night.png"},
        {name: "Karambit - Safari Mesh (Special Item)", price: 919.36, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-SafariMesh.png"},
        {name: "Karambit - Scorched (Special Item)", price: 1401.82, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-Scorched.png"},
        {name: "Karambit - Slaughter (Special Item)", price: 2177.88, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-Slaughter.png"},
        {name: "Karambit - Stained (Special Item)", price: 1200.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-Stained.png"},
        {name: "Karambit - Urban Masked (Special Item)", price: 1121.89, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-UrbanMasked.png"},
        {name: "Karambit - Vanilla (Special Item)", price: 2300.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/Karambit-Vanilla.png"},
        {name: "M9 Bayonet - Blue Steel (Special Item)", price: 1190.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-BlueSteel.png"},
        {name: "M9 Bayonet - Boreal Forest (Special Item)", price: 841.52, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-BorealForest.png"},
        {name: "M9 Bayonet - Case Hardened (Special Item)", price: 1374.49, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-CaseHardened.png"},
        {name: "M9 Bayonet - Crimson Web (Special Item)", price: 6016.84, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-CrimsonWeb.png"},
        {name: "M9 Bayonet - Fade (Special Item)", price: 2647.60, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-Fade.png"},
        {name: "M9 Bayonet - Forest DDPAT (Special Item)", price: 1000.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-ForestDDPAT.png"},
        {name: "M9 Bayonet - Night (Special Item)", price: 1719.62, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-Night.png"},
        {name: "M9 Bayonet - Safari Mesh (Special Item)", price: 1315.25, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-SafariMesh.png"},
        {name: "M9 Bayonet - Scorched (Special Item)", price: 1121.75, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-Scorched.png"},
        {name: "M9 Bayonet - Slaughter (Special Item)", price: 1560.00, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-Slaughter.png"},
        {name: "M9 Bayonet - Stained (Special Item)", price: 861.16, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-Stained.png"},
        {name: "M9 Bayonet - Urban Masked (Special Item)", price: 949.99, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-UrbanMasked.png"},
        {name: "M9 Bayonet - Vanilla (Special Item)", price: 1664.53, img: "Images/Cases/CSgoWeaponCase/Skins/CSgoWeaponSpecialItems/M9Bayonet-Vanilla.png"}
    ],
    scarPattern: [
        {name: "#661 Scar Pattern Case Hardened AK-47 (you have no idea how rare this is if you're seeing this lol, chances are ~0.00001 for any wear non-stat trak)", price: 1500000.00, img: "Images/Cases/CSgoWeaponCase/Skins/CsgoSCARpattern/661ScarPatternAK.png"}
    ]
};

OpenCSgoWeaponButton.addEventListener("click", CSgoWeaponCaseOpened)

function CSgoWeaponCaseOpened() {
    let rollCSgoWeapon = Math.random() * 100;
    let CSgoWeaponRunningTotal = 0;
    let CSgoWeaponChosenItem;

    for (let i=0; i < CSgoWeaponCaseItems.length; i++) {
        CSgoWeaponRunningTotal += CSgoWeaponCaseItems[i].chance

        if (rollCSgoWeapon < CSgoWeaponRunningTotal) {
            CSgoWeaponChosenItem = CSgoWeaponCaseItems[i];
            break;
        }
    }

    let skinsCSgoWeapon = CSgoWeaponCaseDropped[CSgoWeaponChosenItem.name]
    let randomIndexCSgoWeapon = Math.floor(Math.random() * skinsCSgoWeapon.length)
    let CSgoWeaponChosenSkin = skinsCSgoWeapon[randomIndexCSgoWeapon]

    CSgoWeaponCasesOpenedTotal = CSgoWeaponCasesOpenedTotal + 1;
    GlobalCasesOpenedTotal = GlobalCasesOpenedTotal + 1;
    GlobalPricesNumber = GlobalPricesNumber + CSgoWeaponChosenSkin.price;
    GlobalPricesNumberRounded = Math.round(GlobalPricesNumber * 100) / 100;
    GlobalSpentNumber = GlobalSpentNumber + 134.00 + 11.01;
    GlobalSpentNumberRounded = Math.round(GlobalSpentNumber * 100) / 100;
    CSgoWeaponResults.innerText = CSgoWeaponChosenSkin.name + " ($" + CSgoWeaponChosenSkin.price + ")";
    CSgoWeaponImageDrops.src = CSgoWeaponChosenSkin.img;
    CSgoWeaponCaseTotal.innerText = "Total CS:GO Weapon Cases Opened: " + CSgoWeaponCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
    GlobalPricesText.innerText = "Cost of unboxed skins: $" + GlobalPricesNumberRounded
    GlobalSpentText.innerText = "Total spent opening cases (+price of applicable keys): $" + GlobalSpentNumberRounded
}





const OpenKatowice2014LegendsButton = document.getElementById("Katowice2014LegendsOpenButton")
const Katowice2014LegendsResults = document.getElementById("Katowice2014LegendsResults")
const Katowice2014LegendsImageDrops = document.getElementById("Katowice2014LegendsDroppedSkinImage")
const Katowice2014LegendsCaseTotal = document.getElementById("CasesTotalKatowice2014Legends")

let Katowice2014LegendsCasesOpenedTotal = 0;

let Katowice2014LegendsCaseItems = [
    {name: "highGrade", chance: 80.8},
    {name: "remarkable", chance: 16},
    {name: "exotic", chance: 3.2}
]

let Katowice2014LegendsCaseDropped = {
    highGrade: [
        {name: "compLexity Gaming (High Grade)", price: 699.99, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/compLexityGaming.png"},
        {name: "Fnatic (High Grade)", price: 405.00, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/Fnatic.png"},
        {name: "HellRaisers (High Grade)", price: 473.10, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/HellRaisers.png"},
        {name: "LGB eSports (High Grade)", price: 756.83, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/LGBeSports.png"},
        {name: "Team Dignitas (High Grade)", price: 794.68, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/NinjasInPyjamas.png"},
        {name: "Ninjas in Pyjamas (High Grade)", price: 383.00, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/TeamDignitas.png"},
        {name: "Team LDLC.com (High Grade)", price: 1349.85, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/TeamLDLC.png"},
        {name: "Titan (High Grade)", price: 3485.00, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/highGrade/Titan.png"}
    ],
    remarkable: [
        {name: "compLexity Gaming - Holo (Remarkable)", price: 2399.99, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/compLexityGamingHolo.png"},
        {name: "Fnatic - Holo (Remarkable)", price: 1099.00, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/FnaticHolo.png"},
        {name: "HellRaisers - Holo (Remarkable)", price: 10708.02, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/HellRaisersHolo.png"},
        {name: "LGB eSports - Holo (Remarkable)", price: 6311.44, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/LGBeSportsHolo.png"},
        {name: "Team Dignitas - Holo (Remarkable)", price: 25199.00, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/NinjasInPyjamasHolo.png"},
        {name: "Ninjas in Pyjamas - Holo (Remarkable)", price: 4471.46, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/TeamDignitasHolo.png"},
        {name: "Team LDLC.com - Holo (Remarkable)", price: 22198.91, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/TeamLDLCHolo.png"},
        {name: "Titan - Holo (Remarkable)", price: 140254, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/remarkable/TitanHolo.png"}
    ],
    exotic: [
        {name: "ESL Skull - Foil (Exotic)", price: 417.90, img: "Images/StickerCapsules/Katowice2014Legends/Stickers/exotic/ESLSkullFoil.png"}
    ]
};

OpenKatowice2014LegendsButton.addEventListener("click", Katowice2014LegendsCaseOpened)

function Katowice2014LegendsCaseOpened() {
    let rollKatowice2014Legends = Math.random() * 100;
    let Katowice2014LegendsRunningTotal = 0;
    let Katowice2014LegendsChosenItem;

    for (let i=0; i < Katowice2014LegendsCaseItems.length; i++) {
        Katowice2014LegendsRunningTotal += Katowice2014LegendsCaseItems[i].chance

        if (rollKatowice2014Legends < Katowice2014LegendsRunningTotal) {
            Katowice2014LegendsChosenItem = Katowice2014LegendsCaseItems[i];
            break;
        }
    }

    let skinsKatowice2014Legends = Katowice2014LegendsCaseDropped[Katowice2014LegendsChosenItem.name]
    let randomIndexKatowice2014Legends = Math.floor(Math.random() * skinsKatowice2014Legends.length)
    let Katowice2014LegendsChosenSkin = skinsKatowice2014Legends[randomIndexKatowice2014Legends]

    Katowice2014LegendsCasesOpenedTotal = Katowice2014LegendsCasesOpenedTotal + 1;
    GlobalCasesOpenedTotal = GlobalCasesOpenedTotal + 1;
    GlobalPricesNumber = GlobalPricesNumber + Katowice2014LegendsChosenSkin.price;
    GlobalPricesNumberRounded = Math.round(GlobalPricesNumber * 100) / 100;
    GlobalSpentNumber = GlobalSpentNumber + 38951.35;
    GlobalSpentNumberRounded = Math.round(GlobalSpentNumber * 100) / 100;
    Katowice2014LegendsResults.innerText = Katowice2014LegendsChosenSkin.name + " ($" + Katowice2014LegendsChosenSkin.price + ")";
    Katowice2014LegendsImageDrops.src = Katowice2014LegendsChosenSkin.img;
    Katowice2014LegendsCaseTotal.innerText = "Total Dreams & Nightmares Cases Opened: " + Katowice2014LegendsCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
    GlobalPricesText.innerText = "Cost of unboxed skins: $" + GlobalPricesNumberRounded
    GlobalSpentText.innerText = "Total spent opening cases: $" + GlobalSpentNumberRounded
}

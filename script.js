const GlobalCaseTotal = document.getElementById("GlobalCaseCounter")
let GlobalCasesOpenedTotal = 0;

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
        {name: "P2000 - Sure Grip (Mil-Spec)", img: "Images/Cases/FeverCase/Skins/P2000-SureGrip.png"},
        {name: "MP9 - Nexus (Mil-Spec)", img: "Images/Cases/FeverCase/Skins/MP9-Nexus.png"},
        {name: "USP-S - PC-GRN (Mil-Spec)", img: "Images/Cases/FeverCase/Skins/USPS-PCGRN.png"},
        {name: "SSG 08 - Memorial (Mil-Spec)", img: "Images/Cases/FeverCase/Skins/SSG08-Memorial.png"},
        {name: "M4A4 - Choppa (Mil-Spec)", img:"Images/Cases/FeverCase/Skins/M4A4-Choppa.png"},
        {name: "MAG-7 - Resupply (Mil-Spec)", img: "Images/Cases/FeverCase/Skins/MAG7-Resupply.png"},
        {name: "XM1014 - Mockingbird (Mil-Spec)", img: "Images/Cases/FeverCase/Skins/XM1014-Mockingbird.png"}
    ],
    restricted: [
        {name: "Desert Eagle - Serpent Strike (Restricted)", img: "Images/Cases/FeverCase/Skins/Deagle-SerpentStrike.png"},
        {name: "Galil AR - Control (Restricted)", img: "Images/Cases/FeverCase/Skins/Galil-Control.png"},
        {name: "Nova - Rising Sun (Restricted)", img: "Images/Cases/FeverCase/Skins/Nova-RisingSun.png"},
        {name: "P90 - Wave Breaker (Restricted)", img: "Images/Cases/FeverCase/Skins/P90-WaveBreaker.png"},
        {name: "Zeus x27 - Tosai (Restricted)", img: "Images/Cases/FeverCase/Skins/ZeusX27-Tosai.png"}
    ],
    classified: [
        {name: "Glock-18 - Shinobu (Classified)", img: "Images/Cases/FeverCase/Skins/G18-Shinobu.png"},
        {name: "AK-47 - Searing Range (Classified)", img: "Images/Cases/FeverCase/Skins/AK-SearingRange.png"},
        {name: "UMP-45 - K.O. Factory (Classified)", img: "Images/Cases/FeverCase/Skins/UMP45-KoFactory.png"}
    ],
    covert: [
        {name: "AWP - Prinstream (Covert)", img: "Images/Cases/FeverCase/Skins/AWP-Printstream.png"},
        {name: "FAMAS - Bad Trip (Covert)", img: "Images/Cases/FeverCase/Skins/FAMAS-BadTrip.png"}
    ],
    specialItem: [
        {name: "Skeleton Knife - Marble Fade (Special Item)", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-MarbleFade.png"},
        {name: "Nomad Knife - Doppler (Special Item)", img: "Images/Cases/FeverCase/Skins/NomadKnife-Doppler.png"},
        {name: "Paracord Knife - Damascus Steel (Special Item)", img: "Images/Cases/FeverCase/Skins/ParacordKnife-DamascusSteel.png"},
        {name: "Survival Knife - Tiger Tooth (Special Item)", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-TigerTooth.png"},
        {name: "Nomad Knife - Damascus Steel (Special Item)", img: "Images/Cases/FeverCase/Skins/NomadKnife-DamascusSteel.png"},
        {name: "Nomad Knife - Marble Fade (Special Item)", img: "Images/Cases/FeverCase/Skins/NomadKnife-MarbleFade.png"},
        {name: "Nomad Knife - Rust Coat (Special Item)", img: "Images/Cases/FeverCase/Skins/NomadKnife-RustCoat.png"},
        {name: "Nomad Knife - Tiger Tooth (Special Item)", img: "Images/Cases/FeverCase/Skins/NomadKnife-TigerTooth.png"},
        {name: "Nomad Knife - Ultraviolet (Special Item)", img: "Images/Cases/FeverCase/Skins/NomadKnife-Ultraviolet.png"},
        {name: "Paracord Knife - Doppler (Special Item)", img: "Images/Cases/FeverCase/Skins/ParacordKnife-Doppler.png"},
        {name: "Paracord Knife - Marble Fade (Special Item)", img: "Images/Cases/FeverCase/Skins/ParacordKnife-MarbleFade.png"},
        {name: "Paracord Knife - Rust Coat (Special Item)", img: "Images/Cases/FeverCase/Skins/ParacordKnife-RustCoat.png"},
        {name: "Paracord Knife - Tiger Tooth (Special Item)", img: "Images/Cases/FeverCase/Skins/ParacordKnife-TigerTooth.png"},
        {name: "Paracord Knife - Ultraviolet (Special Item)", img: "Images/Cases/FeverCase/Skins/ParacordKnife-Ultraviolet.png"},
        {name: "Skeleton Knife - Damascus Steel (Special Item)", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-DamascusSteel.png"},
        {name: "Skeleton Knife - Doppler (Special Item)", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-Doppler.png"},
        {name: "Skeleton Knife - Rust Coat (Special Item)", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-RustCoat.png"},
        {name: "Skeleton Knife - Tiger Tooth (Special Item)", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-TigerTooth.png"},
        {name: "Skeleton Knife - Ultraviolet (Special Item)", img: "Images/Cases/FeverCase/Skins/SkeletonKnife-Ultraviolet.png"},
        {name: "Survival Knife - Damascus Steel (Special Item)", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-DamascusSteel.png"},
        {name: "Survival Knife - Doppler (Special Item)", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-Doppler.png"},
        {name: "Survival Knife - Marble Fade (Special Item)", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-MarbleFade.png"},
        {name: "Survival Knife - Rust Coat (Special Item)", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-RustCoat.png"},
        {name: "Survival Knife - Ultraviolet (Special Item)", img: "Images/Cases/FeverCase/Skins/SurvivalKnife-Ultraviolet.png"}
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
    FeverResults.innerText = ChosenSkin.name;
    FeverImageDrops.src = ChosenSkin.img;
    CaseTotal.innerText = "Total Fever Cases Opened: " + CasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
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
        {name: "MAC-10 - Monkeyflage (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/MAC10-Monkeyflage.png"},
        {name: "UMP-45 - Roadblock (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/UMP45-Roadblock.png"},
        {name: "Negev - Drop Me (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/Negev-DropMe.png"},
        {name: "FAMAS - Meow 36 (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/FAMAS-Meow36.png"},
        {name: "Galil AR - Destroyer (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/Galil-Destroyer.png"},
        {name: "M4A4 - Poly Mag (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/M4-PolyMag.png"},
        {name: "Glock 18 - Winterized (Mil-Spec)", img: "Images/Cases/RecoilCase/Skins/RecoilMilSpec/G18-Winterized.png"}
    ],
    restricted: [
        {name: "Dual Berettas - Flora Carnivora (Restricted)", img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/DualB-FloraCarnivora.png"},
        {name: "P90 - Vent Rush (Restricted)", img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/P90-VentRush.png"},
        {name: "SG 553 - Dragon Tech (Restricted)", img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/SG553-DragonTech.png"},
        {name: "R8 Revolver - Crazy 8 (Restricted)", img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/R8-Crazy8.png"},
        {name: "M249 - Downtown (Restricted)", img: "Images/Cases/RecoilCase/Skins/RecoilRestricted/Downtown.png"}
    ],
    classified: [
        {name: "AK-47 - Ice Coaled (Classified)", img: "Images/Cases/RecoilCase/Skins/RecoilClassified/AK-IceCoaled.png"},
        {name: "P250 - Visions (Classified)", img: "Images/Cases/RecoilCase/Skins/RecoilClassified/P250-Visions.png"},
        {name: "Sawed-Off - Kiss♥Love (Classified)", img: "Images/Cases/RecoilCase/Skins/RecoilClassified/SawedOff-KissLove.png"}
    ],
    covert: [
        {name: "AWP - Chromatic Aberration (Covert)", img: "Images/Cases/RecoilCase/Skins/RecoilCovert/AWP-ChromaticAberration.png"},
        {name: "USP-S - Printstream (Covert)", img: "Images/Cases/RecoilCase/Skins/RecoilCovert/USPS-Printstream.png"}
    ],
    specialItem: [
        {name: "Broken Fang Gloves - Jade (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-Jade.png"},
        {name: "Broken Fang Gloves - Needle Point (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-NeedlePoint.png"},
        {name: "Broken Fang Gloves - Unhinged (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-Unhinged.png"},
        {name: "Broken Fang Gloves - Yellow-Banded (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/BrokenFangGloves-YellowBanded.png"},
        {name: "Driver Gloves - Black Tie (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DriverGloves-BlackTie.png"},
        {name: "Driver Gloves - Queen Jaguar (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DriverGloves-QueenJaguar.png"},
        {name: "Driver Gloves - Snow Leopard (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DriverGloves-SnowLeopard.png"},
        {name: "Driver Gloves - Rezan the Red (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/DrivingGloves-RezanRed.png"},
        {name: "Hand Wraps - CAUTION! (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-Caution.png"},
        {name: "Hand Wraps - Constrictor (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-Constrictor.png"},
        {name: "Hand Wraps - Desert Shamagh (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-DesertShamagh.png"},
        {name: "Hand Wraps - Giraffe (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/HandWraps-Giraffe.png"},
        {name: "Moto Gloves - 3rd Commando Company (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-3rdCommandoCompany.png"},
        {name: "Moto Gloves - Blood Pressure (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-BloodPressure.png"},
        {name: "Moto Gloves - Finish Line (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-FinishLine.png"},
        {name: "Moto Gloves - Smoke Out (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/MotoGloves-SmokeOut.png"},
        {name: "Specialist Gloves - Field Agent (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-FieldAgent.png"},
        {name: "Specialist Gloves - Lt. Commander (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-LtCommander.png"},
        {name: "Specialist Gloves - Marble Fade (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-MarbleFade.png"},
        {name: "Specialist Gloves - Tiger Strike (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SpecialistGloves-TigerStrike.png"},
        {name: "Sport Gloves - Big Game (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-BigGame.png"},
        {name: "Sport Gloves - Nocts (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-Nocts.png"},
        {name: "Sport Gloves - Scarlet Shamagh (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-ScarletShamagh.png"},
        {name: "Sport Gloves - Slingshot (Special Item)", img: "Images/Cases/RecoilCase/Skins/RecoilSpecialItems/SportGloves-Slingshot.png"}
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
    RecoilResults.innerText = RecoilChosenSkin.name;
    RecoilImageDrops.src = RecoilChosenSkin.img;
    RecoilCaseTotal.innerText = "Total Recoil Cases Opened: " + RecoilCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
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
        {name: "Five-SeveN - Scrawl (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/FiveSeveN-Scrawl.png"},
        {name: "MAC-10 - Ensnared (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/MAC10-Ensnared.png"},
        {name: "MAG-7 - Foresight (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/MAG7-Foresight.png"},
        {name: "MP5-SD - Necro Jr. (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/MP5SD-NecroJr.png"},
        {name: "P2000 - Lifted Spirits (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/P2000-LiftedSpirits.png"},
        {name: "Sawed-Off - Spirit Board (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/SawedOff-SpiritBoard.png"},
        {name: "SCAR-20 - Poultrygeist (Mil-Spec)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresMilSpec/SCAR20-Poultrygeist.png"}
    ],
    restricted: [
        {name: "G3SG1 - Dream Glade (Restricted)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/G3SG1-DreamGlade.png"},
        {name: "M4A1-S - Night Terror (Restricted)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/M4A1S-NightTerror.png"},
        {name: "PP-Bizon - Space Cat (Restricted)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/PPBizon-SpaceCat.png"},
        {name: "USP-S - Ticket to Hell (Restricted)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/USPS-TicketToHell.png"},
        {name: "XM1014 - Zombie Offensive (Restricted)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresRestricted/XM1014-ZombieOffensive.png"}
    ],
    classified: [
        {name: "Dual Berettas - Melondrama (Classified)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresClassified/DualB-Melondrama.png"},
        {name: "FAMAS - Rapid Eye Movement (Classified)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresClassified/FAMAS-RapidEyeMovement.png"},
        {name: "MP7 - Abyssal Apparition (Classified)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresClassified/MP7-AbyssalApparition.png"}
    ],
    covert: [
        {name: "AK-47 - Nightwish (Covert)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresCovert/AK-Nightwish.png"},
        {name: "MP9 - Starlight Protector (Covert)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresCovert/MP9-StarlightProtector.png"}
    ],
    specialItem: [
        {name: "Bowie Knife - Autotronic (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-Autotronic.png"},
        {name: "Bowie Knife - Black Laminate (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-BlackLaminate.png"},
        {name: "Bowie Knife - Bright Water (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-BrightWater.png"},
        {name: "Bowie Knife - Freehand (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-Freehand.png"},
        {name: "Bowie Knife - Gamma Doppler (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-GammaDoppler.png"},
        {name: "Bowie Knife - Lore (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/BowieKnife-Lore.png"},
        {name: "Butterfly Knife - Autotronic (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-Autotronic.png"},
        {name: "Butterfly Knife - Black Laminate (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-BlackLaminate.png"},
        {name: "Butterfly Knife - Bright Water (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-BrightWater.png"},
        {name: "Butterfly Knife - Freehand (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-Freehand.png"},
        {name: "Butterfly Knife - Gamma Doppler (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-GammaDoppler.png"},
        {name: "Butterfly Knife - Lore (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ButterflyKnife-Lore.png"},
        {name: "Falchion Knife - Autotronic (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-Autotronic.png"},
        {name: "Falchion Knife - Black Laminate (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-BlackLaminate.png"},
        {name: "Falchion Knife - Bright Water (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-BrightWater.png"},
        {name: "Falchion Knife - Freehand (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-Freehand.png"},
        {name: "Falchion Knife - Gamma Doppler (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-GammaDoppler.png"},
        {name: "Falchion Knife - Lore (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/FalchionKnife-Lore.png"},
        {name: "Huntsman Knife - Autotronic (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-Autotronic.png"},
        {name: "Huntsman Knife - Black Laminate (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-BlackLaminate.png"},
        {name: "Huntsman Knife - Bright Water (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-BrightWater.png"},
        {name: "Huntsman Knife - Freehand (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-Freehand.png"},
        {name: "Huntsman Knife - Gamma Doppler (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-GammaDoppler.png"},
        {name: "Huntsman Knife - Lore (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/HuntsmanKnife-Lore.png"},
        {name: "Shadow Daggers - Autotronic (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-Autotronic.png"},
        {name: "HShadow Daggers - Black Laminate (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-BlackLaminate.png"},
        {name: "Shadow Daggers - Bright Water (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-BrightWater.png"},
        {name: "Shadow Daggers - Freehand (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-Freehand.png"},
        {name: "Shadow Daggers - Gamma Doppler (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-GammaDoppler.png"},
        {name: "Shadow Daggers - Lore (Special Item)", img: "Images/Cases/DreamsNightmaresCase/Skins/DreamsNightmaresSpecialItems/ShadowDaggers-Lore.png"}
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
    DreamsNightmaresResults.innerText = DreamsNightmaresChosenSkin.name;
    DreamsNightmaresImageDrops.src = DreamsNightmaresChosenSkin.img;
    DreamsNightmaresCaseTotal.innerText = "Total Dreams & Nightmares Cases Opened: " + DreamsNightmaresCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
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
        {name: "CZ75-Auto - Twist (Mil-Spec)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/CZ75Auto-Twist.png"},
        {name: "Galil AR - Kami (Mil-Spec)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/Galil-Kami.png"},
        {name: "P90 - Module (Mil-Spec)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/P90-Module.png"},
        {name: "P2000 - Pulse (Mil-Spec)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/P2000-Pulse.png"},
        {name: "SSG 08 - Slashed (Mil-Spec)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/SSG08-Slashed.png"},
        {name: "Tec9 - Isaac (Mil-Spec)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponMilSpec/Tec-Isaac.png"}
    ],
    restricted: [
        {name: "AUG - Torque (Restricted)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/AUG-Torque.png"},
        {name: "MAC-10 - Tatter (Restricted)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/MAC10-Tatter.png"},
        {name: "PP-Bizon - Antique (Restricted)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/PPBizon-Antique.png"},
        {name: "XM1014 - Heaven Guard (Restricted)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponRestricted/XM1014-HeavenGuard.png"}
    ],
    classified: [
        {name: "M4A1-S - Atomic Alloy (Classified)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponClassified/M4A1S-AtomicAlloy.png"},
        {name: "SCAR-20 - Cyrex (Classified)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponClassified/SCAR20-Cyrex.png"},
        {name: "USP-S - Caiman (Classified)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponClassified/USPS-Caiman.png"}
    ],
    covert: [
        {name: "AK-47 - Vulcan (Covert)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponCovert/AK-Vulcan.png"},
        {name: "M4A4 - Desert Strike (Covert)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponCovert/M4-DesertStrike.png"}
    ],
    specialItem: [
        {name: "Huntsman Knife - Blue Steel (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-BlueSteel.png"},
        {name: "Huntsman Knife - Boreal Forest (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-BorealForest.png"},
        {name: "Huntsman Knife - Case Hardened (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-CaseHardened.png"},
        {name: "Huntsman Knife - Crimson Web (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-CrimsonWeb.png"},
        {name: "Huntsman Knife - Fade (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Fade.png"},
        {name: "Huntsman Knife - Forest DDPAT (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-ForestDDPAT.png"},
        {name: "Huntsman Knife - Night (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Night.png"},
        {name: "Huntsman Knife - Safari Mesh (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-SafariMesh.png"},
        {name: "Huntsman Knife - Scorched (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Scorched.png"},
        {name: "Huntsman Knife - Slaughter (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Slaughter.png"},
        {name: "Huntsman Knife - Stained (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Stained.png"},
        {name: "Huntsman Knife - Urban Masked (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-UrbanMasked.png"},
        {name: "Huntsman Knife - Vanilla (Special Item)", img: "Images/Cases/HuntsmanWeaponCase/Skins/HuntsmanWeaponSpecialItems/HuntsmanKnife-Vanilla.png"}
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
    HuntsmanWeaponResults.innerText = HuntsmanWeaponChosenSkin.name;
    HuntsmanWeaponImageDrops.src = HuntsmanWeaponChosenSkin.img;
    HuntsmanWeaponCaseTotal.innerText = "Total Huntsman Weapon Cases Opened: " + HuntsmanWeaponCasesOpenedTotal
    GlobalCaseTotal.innerText = "Total Cases Opened: " + GlobalCasesOpenedTotal
}
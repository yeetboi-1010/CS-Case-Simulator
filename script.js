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
    FeverResults.innerText = ChosenSkin.name;
    FeverImageDrops.src = ChosenSkin.img;
    CaseTotal.innerText = "Total Cases Opened: " + CasesOpenedTotal
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

OpenRecoilButton.addEventListener("click", RecoilCaseOpened)

function RecoilCaseOpened() {
    let roll = Math.random() * 100;
    let RecoilRunningTotal = 0;
    let RecoilChosenItem;

    for (let i=0; i < RecoilCaseItems.length; i++) {
        RecoilRunningTotal += RecoilCaseItems[i].chance

        if (roll < RecoilRunningTotal) {
            RecoilChosenItem = RecoilCaseItems[i];
            break;
        }
    }

    let skinsRecoil = RecoilCaseDropped[RecoilChosenItem.name]
    let randomIndexRecoil = Math.floor(Math.random() * skinsRecoil.length)
    let RecoilChosenSkin = skinsRecoil[randomIndexRecoil]

    RecoilCasesOpenedTotal = RecoilCasesOpenedTotal + 1;
    RecoilResults.innerText = RecoilChosenSkin.name;
    RecoilImageDrops.src = RecoilChosenSkin.img;
    RecoilCaseTotal.innerText = "Total Cases Opened: " + RecoilCasesOpenedTotal
}
import React from "react";
import ItemPage from "./ItemPage";
import Header from "./Header";

const guitars = [
    {
        id: "BODEN PROG NX 6 EARTH GREEN",
        name: "BODEN PROG NX 6 EARTH GREEN",
        img: [
            "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=1066,height=1600,fit=cover/wp-content/uploads/2021/09/bd6tct-21p-l-q-gn_6.png",
            "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=768/wp-content/uploads/2021/09/bd6tct-21p-l-q-gn_2.png",
            "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=768/wp-content/uploads/2021/09/bd6tct-21p-l-q-gn_b.png",
            "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=768/wp-content/uploads/2021/09/bd6tct-21p-l-q-gn_c.png",
            "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=1920/wp-content/uploads/2021/09/nx-prog-6-family.png",
        ],
        descr: "Aggressive and sophisticated, the Prog NX models are an extension of the Original model design with the new improved EGS Pro Rev7 Tremolo System and the smooth and slick-playing Richlite fretboard. With a more cutting tone than the Original, the Prog models are ideal for modern progressive and metal players using high-gain amplification systems. The versatile Suhr™ pickups and switching system provide a wide range of sounds for virtually any playing style and musical genre.",
        specs: {
            general: [
                "Bolt-On Construction with new sculpted neck joint heel",
                "Chambered Swamp Ash Body with Arm and Torso Carves",
                "Solid Maple Top with 4A Flame Maple or Quilt Maple veneer",
                "  Available Finishes: Charcoal Black for Flame, Earth Green for Quilt",
                "Approximate Weight: 2.3kg / 5 lbs +/- 10%",
                "Manufactured in Indonesia",
            ],
            neck: [
                "Maple neck – Quartersawn, Carbon Fiber reinforced",
                "EndurNeck™ Profile",
                "Richlite Fretboard",
                "20” Fretboard Radius",
                "24 Frets",
                "Jescar 51100 Stainless Steel Fretwire (57110 for zero fret)",
                "Standard tuning EADGBE",
            ],
            profile: [
                "H-H Pickup Configuration",
                "Neck: Suhr SSV Neck",
                "Bridge: Suhr SSH+ Bridge",
                "5-Way Pickup Selector",
                "Master Volume + Master Tone",
            ],
        },
    },
];


const App = () => {
    return (
        <div>
            <Header/>
            <ItemPage/>
        </div>
    );
};

export default App;

import Diena from "./Diena";
import { useEffect, useState } from "react";

function App() {
        const[lessons, setLessons] = useState([]);
        const [loading, setLoading] = useState(true);
        useEffect(()=>{
                async function getLessons() {
                        const response = await fetch (
                                "https://cheese-cake.onthewifi.com/api/lessons"
                        );
                        const data = await response.json()
                        console.log(data.IPb22);
                        const cleansedData = [
                                {
                                        diena: "Pirmdiena",
                                        stundas:data.IPb22[0].classes
                                },
                                {
                                        diena: "Otradiena",
                                        stundas:data.IPb22[1].classes
                                },
                                {
                                        diena: "Tresdiena",
                                        stundas:data.IPb22[2].classes
                                },
                                {
                                        diena: "Ceturdiena",
                                        stundas:data.IPb22[3].classes
                                },
                                {
                                        diena: "Piekdiena",
                                        stundas:data.IPb22[4].classes
                                }

                        ]

                        
               
                setLessons(cleansedData);
                setLoading(false); 
        }
                getLessons();
        }, []);


  const pirmdienasStundas = [
    "Sports pie Klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥",
  ];
  const otrdienasStundas = ["Cita stunda", "Vēl stunda"];

  const visasStundas = [
    {
      diena: "Pirmdiena",
      stundas: [
        "Sports pie Klintas",
        "Dabaszinības mīlu fiziku",
        "Vēsture",
        "🫥",
      ],
    },
    {
      diena: "Otrdiena",
      stundas: [
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Trešdiena",
      stundas: [
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Ceturtdiena",
      stundas: [
        "IM done Edmunds",
        "let me go",
        "when will the friday come",
        "🫥",
      ],
    },
    {
      diena: "Piektdiena",
      stundas: [
        "Atdot Railijam datoru stunda",
        "Nu gan viss?",
        "AAudzināšana",
        "🫥",
      ],
    },
  ];


  const dienasJSX = visasStundas.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
  });
  return (
    <>
    
      {loading ? <p>Loading...</p> : dienasJSX}
      
    </>
  );
}

export default App;

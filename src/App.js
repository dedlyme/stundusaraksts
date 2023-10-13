import Diena from "./Diena"
 function App() {

    const visasStundas = [
      {diena: "pirmdiena", 
stundas: [
        "sports",
        "dabaszinibas",
        "da nah",
        "uj"
]
},
      {diena: "otrdiena", 
stundas: [
        "sports",
        "dabaszinibas",
        "da nah",
        "uj"
]},
      {diena: "tresdiena", 
stundas: [
        "sports",
        "dabaszinibas",
        "da nah",
        "uj"
]},
      {diena: "ceturdiena", 
stundas: [
        "sports",
        "dabaszinibas",
        "da nah",
        "uj"
]},
      {diena: "piektdiena", 
stundas: [
        "sports",
        "dabaszinibas",
        "da nah",
        "uj"
]
},
]

    const DienasJSX = visasStundas.map((diena, indekss) => {
      return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
  })
  return (
    <>
      {DienasJSX}
    </>
  )
  }
  

 export default App;

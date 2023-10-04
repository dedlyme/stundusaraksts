import Stunda from "./Stunda"
import Diena from "./Diena"
 function App() {
     const PirmdienasStundas = [
"sports",
"dabaszinibas",
"da nah",
"uj"
 ];
  
 
 const OtradienasStundas = [
  "sportdsdss",
  "dabasdsdszinibas",
  "dadsad nah",
  "uasdsadj"
   ];
   
  return (
    <>
    <div> stundu sataksts jau tagad </div>
    <Diena diena ="pirmdiena" stunda={PirmdienasStundas}/>
    <Diena diena ="otradiena" stunda={OtradienasStundas}/>
    </>
  )
  }
  

 export default App;

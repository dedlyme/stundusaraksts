import Stunda from "./Stunda";

function Diena(props) {
    const stundasJSX = props.stunda.map((stunda, indekss) => {
        return <Stunda key={indekss} nosaukums={stunda} />
    });
    return (
        <>
<h2>{props.diena}</h2>
<ul>
 {stundasJSX}
    </ul>
    </>
    )};
   export default Diena;
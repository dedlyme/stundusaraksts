import Stunda from "./Stunda";

function Diena(props) {
    const stundasJSX = props.stunda.map((stunda) => {
        return <Stunda nosaukums={stunda} />
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
import Stunda from "./Stunda";

function Diena(props) {
    const stundasJSX = props.stundas.map((stundas,indekss) => {
        return <Stunda key = {indekss} stundas={stundas} />
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
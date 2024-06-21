function Boton3(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "20px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <>
        <button style={styles}>BOTON3</button>
        <button style={styles}>BOTON3</button>
        </>
    );
}

export default Boton3

//SU USO SE RESTRINGE PARA AISLAR COMPONENTES COMO BOTONES ESPECIFICOS
//LO MALO ES QUE NO ES MANTENIBLE DE MANERA GLOBAL POR LO QUE CADA VEZ QUE SE REQUIERA CAMBIAR TENDRIAMOS QUE MODIFICAR
//CADA UNO DE ESTOS COMPONENTES
import styles from './Boton2.module.css'

function Boton2(){
    return(
        <>
        <button className={styles.Boton2}>BOTON2</button>
        </>
    );
}

export default Boton2

//Lo mejor de los modulos es que no tenemos que estar complicandonos con nombres de clases
//ya que al ser llamado como desde otro archivo nos crea un id unico para ese estilo o HASH
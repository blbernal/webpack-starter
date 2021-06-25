
import '../css/componentes.css'; 
// import homero from '../assets/img/homero.png';

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement( 'h1' ); 
    h1.innerText = `Hola ${ nombre }!!` ; 

    document.body.append( h1 ) ; 

}

// Img
// console.log(homero);
// const img = document.createElement('img'); 
// img.src = homero; 
// document.body.append( img ); 





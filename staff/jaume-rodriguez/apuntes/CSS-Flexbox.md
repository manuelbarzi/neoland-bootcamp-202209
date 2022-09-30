    CSS FlexBox [display: flex;]

    Introduction:
    Cuando describimos a flexbox como unidimensional destacamos el hecho que flexbox maneja el layout en una sola dimensión a la vez ya sea como fila o como columna.

    The flex container properties are:

    flex-direction	| Dirección horizontal o vertical en la que los items se acomulan
    flex-wrap	  	| Si no hay sitio, salta linea o columna y sigue añadiendo items
    flex-flow		| flex-direction + flex-wrap
    justify-content	| Alinea Items horizontalmente
    align-content 	| Alinea Lineas verticalmente
    align-items 	| Alinea Items verticalmente

    The flex item properties are:

    order		    | Ordena los items según el valor que le des 0-10..
    flex-grow		| Más alto el valor del item, este "crecerá" más respecto a los otros
    flex-shrink		| Más alto el valor del item, este "encogerá" más respecto a los otros
    flex-basis		| Añade un valor manual al item para agrandarlo o decrecerlo horizontalmente respecto a los otros
    flex		    | flex-grow + flex-shrink + flex-basis
    align-self		| Alinea verticalmente un item selecionado independientemente del resto

---

    CSS Flexbox Responsive

    flex-direction: row;	| Pc y grandes pantallas
    flex-direction: column;	| Mobiles y Tablets

    @media screen and (max-width: 800px) {
      .flex-container {
        flex-direction: column;
      }
    }

---

    flex-wrap: wrap;	| Para que al mutar salte de horizontal a vertical
    flex: ".."%;		| Añadir un valor <100% al item para que mute a un 100% cuando se lo pidamos

    @media screen and (max-width: 800px) {
      .flex-item--right, .flex-item--left {
        flex: 100%;
      }
    }

---

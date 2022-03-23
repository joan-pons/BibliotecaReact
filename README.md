# Exercici final curs React
Aquest és l'exercici final del curs de React.


Recupera dades d'una biblioteca d'una api.

La idea del projecte és seleccionar una llengua i veure les obres registrades a la biblioteca escrites en aquesta llengua i  també els autors dels quals tenim alguna obra en la llengua seleccionada a la biblioteca.

---
La branca actual és ___master___

## Components

- Llengua: En crear-se el component carrega les distintes llengues registrades a la base de dades i crea una llista despplegable amb aquestes dades. Guarda la llengua dins un store de React-Redux.
- LlistaObres: En canviar la llengua guardada a l'store recupera de la base de dades les obres escrites en aquesta llengua, les guarda a l'estat del component i crea un element de llista per a cada una d'elles amb el seu títol.
- LlistaAutors: En canviar la llengua guardada a l'store recupera de la base de dades els autors amb alguna obra en aquesta llengua i crea un element de llista per a cada un d'ells mostrant el seu nom.

## Redux
La llengua seleccionada al component _Llengua_ es guarda dins un _store_ React Redux, amb un slice amb un únic reducer que permet canviar el valor de la llengua.

Els components utilitzen 
- _useSelector_ per accedir al valor de l'_store_.
- _useEffect (()=>{...}, [ llengua ] )_ per actualitar les llistes quan canvia el valor de l'_store_.

## React Bootstrap
Per donar un mínim format a la pàgina s'ha utilitzat _React Bootstrap_.

## Desplegament
El projecte està desplegat a un servidor Azure. És accesible a la url <a href="http://52.178.39.51" target="blank">http://52.178.39.51 </a>
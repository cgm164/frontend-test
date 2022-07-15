# FrontEnd Test

## Librerías utilizadas y motivación 

Para esta prueba, las tecnologías utilizadas han sido: 
- Reactjs
- CSS

Se ha buscado utilizar las menores dependencias posibles para la creación de la aplicación con el fin de mostrar un manejo más profundo de JS. Es por ello, que únicamente se utiliza una librería de enrutado: `react-router`

La librería de persistencia de estado se ha creado desde **cero**. Hoy en día existen varias maneras de gestionar la persistencia de datos, algunas de estas son: 
- **Librerías de estado del servidor**: son responsables de administrar las operaciones asíncronas entre un servidor y el cliente. Algunos ejemplos son: `react-query` o `swr`

- **Librerías de estado de cliente**: Se utilizan para administrar el estado de la aplicación en el cliente. Algunos ejemplos son: `redux`, `mobX` o `zustand`

Para esta prueba, he decidido crear  un mini-librería para gestionar el estado del servidor inspirada en `react-query` y `swr`. El objetivo es lograr el almacenamiento 
en cache de las peticiones y realizar mutaciones optimistas sobre dicho almacenamiento. 

La implementación se puede encontrar en `src/core/storage`. La idea es tener un clase proveedor de cache que gestionará la persistencia de los datos y un contexto de React que lo encapsulará. El proveedor será el encargada de eliminar los datos cuanto estos expiren y notificar a los observadores que esten subscritos a estos cambios. Por otra parte, existirán dos hooks (`useQuery` y `useMutation`) que se encargarán de llamar al proveedor para mantener los datos en el cliente actualizados y sincronizar dichos datos con el servidor.  

Por otra parte, para el buscador se ha implementado un debounce para evitar renderizaciones innecesarias de los elementos del DOM. La implementación se puede encontrar en `src/core/debounce`.

## Instalación

Para ejecutar la aplicación previamente se deben de haber instalado las dependencias: 

```
npm install
```

o si está utilizando el gestor `yarn`: 

```
yarn
```

## Comandos disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm start` o `yarn start`

Ejecuta la aplicación en modo desarrollo.\
Puede navegar hacia [http://localhost:3000](http://localhost:3000) 
en su navegador para ver la aplicación.

La página se recargará de manera automática al detectar cambios
en los ficheros.

### `npm run build` o `yarn build`
 
Construye la aplicación para producción en la carpeta `build`.
Agrupa el código de la carpeta `src` de React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.

### `npm run test` o `yarn test`

Ejecuta los test. Ya que es una prueba técnica y no se requería, no se ha implementado ninguno.

### `npm run lint` o `yarn lint`

Ejecuta el linter sobre el código existente en `src`.

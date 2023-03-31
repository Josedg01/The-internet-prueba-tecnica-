# The internet pages

Pruebas automatizadas de las siguientes páginas
- https://the-internet.herokuapp.com/login
- https://the-internet.herokuapp.com/inputs
- https://the-internet.herokuapp.com/dropdown
- https://the-internet.herokuapp.com/hovers 


Module           |Number of Scenarios  | Status                                                                |
| ----------------- |------------ |------------------------------------------------------------------ |
| Smoke test |4 | :white_check_mark: |
| Login |5 | :white_check_mark: |
| Inputs |7 | :white_check_mark: |
| Hovers |3 | :white_check_mark: |
| Dropdown |2 | :white_check_mark: |



## Tecnologías utilizadas

- Cypress
- JavaScript
- Mocha
- Allure

 ## Configuración del proyecto
 En el archivo **cypress.env.json** se pueden modificar la propiedades:

     "loginUrl": <URL de la pagina del login>,
     "USER_NAME": <Usuario con el que se hara el login conrrecto>,
     "PASSWORD": <Contraseña con la que se hara el login correcto>,
     "inputsUrl": <URL de la pagina de inputs>,
     "hoversUrl": <URL de la pagina de hovers>,
     "dropdownUrl": <URL de la pagina del dropdown>,
     "viewport": <Dimension del viewport>

 ***Nota**: El valor de la propiedad `viewport` debe de ser alguno de los presets establecidos en Cypress, los valores numericos del ancho y el alto contenidos en un array en el orden mencionado o los valores del ancho y el alto contenidos en un objeto en el orden mencionado. De lo contrario el viewport tomara el valor por default.*

## Instalación del proyecto

 - Descargar e instalar [node.js] (https://nodejs.org/en)

 - Descargar [Allure] (https://github.com/allure-framework/allure2/releases) y agregar como una variable de entorno el path ***"[allure path]/bin"*** 

 - Ejecutar el comando `npm run install` en la terminal del proyecto para instalar todas las dependencias requeridas.

 ## Ejecución del proyecto 

 - Ejecutar el comando `npm run ui-regression-allure` para la ejecucion de todos los test cases creados.

 - Ejecutar el comando `npm run allure:report` para abrir el reporte de allure de todos los casos de pruebas ejecutados.
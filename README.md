# The internet pages

Pruebas automatizadas de las siguientes paginas
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

## Instalación del proyecto

 - Descargar e instalar [node.js] (https://nodejs.org/en)

 - Descargar [Allure] (https://github.com/allure-framework/allure2/releases) y agregar como una variable de entorno el path ***"[allure path]/bin"*** 

 - Ejecutar el comando `npm run install` en la terminal del proyecto para instalar todas las dependencias requeridas.

 ## Ejecucion del proyecto 

 - Ejecutar el comando `npm run ui-regression-allure` para la ejecucion de todos los test cases creados.

 - Ejecutar el comando `npm run allure:report` para abrir el reporte de allure de todos los casos de pruebas ejecutados.
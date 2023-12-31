# Cómo Clonar un Repositorio de GitHub

[GitHub](https://github.com/) es una plataforma ampliamente utilizada para el almacenamiento y colaboración de proyectos de desarrollo de software. Clonar un repositorio de GitHub te permite obtener una copia local del código fuente de un proyecto para que puedas trabajar en él en tu propio entorno. A continuación, se describen los pasos para clonar un repositorio de GitHub:

## Paso 1: Iniciar Sesión en GitHub

Si aún no tienes una cuenta de GitHub, debes registrarte en [GitHub](https://github.com/join) para poder clonar repositorios y colaborar en proyectos.

## Paso 2: Encuentra el Repositorio

1. Inicia sesión en tu cuenta de GitHub.
2. Utiliza la barra de búsqueda en la parte superior de la página para buscar el el usuario `eduanayardo`.
![proyecto](/public/assets/images/github_0.png) <br>
![proyecto](/public/assets/images/github_1.png) <br>
3. Haz clic en la opción `Users` en el menú izquierdo.
![proyecto](/public/assets/images/github_2.png) <br>
4. Dar clic en el nombre del usuario.
![proyecto](/public/assets/images/github_3.png) <br>
5. Seleccionar la opción de `Repositories`.
![proyecto](/public/assets/images/github_4.png) <br>
6. Seleccionar el repositorio a clonar.
![proyecto](/public/assets/images/github_5.png) <br>

## Paso 3: Copiar la URL del Repositorio

En la página principal del repositorio, encontrarás el botón "Code" (Código) en la esquina superior derecha. Haz clic en el botón.
![proyecto](/public/assets/images/github_6.png) <br>
Y, a continuación, selecciona la URL del repositorio. Puedes copiar esta URL al hacer clic en el icono de copiar que se encuentra junto a ella.
![proyecto](/public/assets/images/github_7.png) <br>

## Paso 4: Abre la Terminal o Línea de Comandos

Abre la terminal o línea de comandos en tu sistema operativo. Asegúrate de estar ubicado en el directorio donde deseas clonar el repositorio.
![proyecto](/public/assets/images/github_8.png) <br>
![proyecto](/public/assets/images/github_9.png) <br>

## Paso 5: Clonar el Repositorio

Utiliza el siguiente comando para clonar el repositorio en tu máquina local:

```bash
git clone https://github.com/eduanayardo/appSinaloa.git
```
![proyecto](/public/assets/images/github_10.png) <br>


# Instalar Dependencias

## Paso 1: Instalar Node.js y npm

Si aún no tienes Node.js y npm instalados en tu sistema, debes hacerlo antes de poder utilizar npm. Puedes descargar la última versión de Node.js desde el [sitio web oficial de Node.js](https://nodejs.org/).

## Paso 2: Abrir consola de git dentro de la carpeta de nuestro proyecto

Para la instgalacion de nuestras dependencias debemos abrir en el explorador nuestro proyecto. <br />
![proyecto](/public/assets/images/npm_0.png)

## Paso 3: Abrir la Terminal

Abre la terminal o línea de comandos en tu sistema operativo. Asegúrate de estar en el directorio raíz de tu proyecto (donde se encuentra el archivo `package.json`, que es el archivo de configuración de npm). <br />
![proyecto](/public/assets/images/npm_1.png)
![proyecto](/public/assets/images/npm_2.png)

## Paso 4: Instalar Dependencias

Para instalar dependencias en tu proyecto, utiliza el siguiente comando en la terminal:

```bash
npm install
```
![proyecto](/public/assets/images/npm_3.png)

#Otra opción

## Paso 1: Abrir VScode

1. Para esta opcion requerimos que cargue toda la interfaz de Vscode, una vez cargada en la pagina de inicio buscaremos y seleccionaremos la opcion abrir carpeta.
![proyecto](/public/assets/images/npm_4.png)

1. Ingresar hasta la raíz de nuestro proyecto y presionar el boton de seleccionar carpeta
![proyecto](/public/assets/images/npm_5.png)

1. Esperar que cargue nuestro proytecto completo
![proyecto](/public/assets/images/npm_6.png)

4. Buscar el menú "Terminal" en la barra superior de VScode, abrirlo y señecciona la opción "Nuevo Terminal"
![proyecto](/public/assets/images/npm_7.png)

5. En la terminar tiliza el siguiente comando en la terminal:
    ```bash
    npm install
    ```
    ![proyecto](/public/assets/images/npm_9.png)

****
# Configurar URL para el consumo de API REST

En este paso asignaremos la URL que utilizamos para hacer el consumo en la API REST al momento de configurar el repositorio api_rest.

1. Buscar y abrir los archivos `Destinos.tsx` y `Municipios.tsx` en la ruta `src/pages`
2. Localizar la función `sendGetRequest`
3. localizar el parametro `url`
4. Colocar la URL que se utilizara para el consumo de la API REST

****
# Correr nuestra aplicación

Para ello utilizaremos la extencion de [Ionic](https://marketplace.visualstudio.com/items?itemName=ionic.ionic), que nos ayudara a poder vizualizar nuestra aplicacion en la web.

## Paso 1: Instalar la Extensión Ionic

Si aún no tienes Visual Studio Code instalado, puedes descargarlo desde el [sitio web oficial de VSCode](https://code.visualstudio.com/). Luego, sigue estos pasos para instalar la extensión "Ionic":

1. Abre Visual Studio Code.
2. Ve al menú "Extensions" (Extensiones) en la barra lateral izquierda o presiona `Ctrl+Shift+X`.
  <br />![Texto alternativo](public/assets/images/postman_1.png)
3. En el campo de búsqueda, escribe "Ionic" y selecciona la extensión proporcionada por "Ionic" y asegurarnos que es del editor verificado.
  <br />![Texto alternativo](public/assets/images/ionic_1.png)
4. Haz clic en el botón "Install" (Instalar) para instalar la extensión.
  <br />![Texto alternativo](public/assets/images/ionic_2.png)

## Paso 2: Correr nuestra aplicación

En VSCode, ve al menú "Ionic" en la barra laterla izquierda. Sigue estos pasos:![Texto alternativo](public/assets/images/ionic_3.png)

1. Buscar la opción "Web" para lanzar nuestra aplicación a un navegador ![Texto alternativo](public/assets/images/ionic_4.png)
2. En el panel izquierdo nos mostrara un Qr (para vizualizarlo en un dispositivo movil) y se nos abrira la terminal en la seccion de salida, donde podremos ver las url a las cuale spodemos acceder para vizualizar nuestra aplicación: <br> ![Texto alternativo](public/assets/images/ionic_5.png)
3. Se abrira abrira el navegador web por defecto o abrira una pestaña.<br> ![Texto alternativo](public/assets/images/ionic_6.png)
4. Presionaremos la tecla `F12` para abrir el inspeccionador de elementos y daremos clic o presiona `Ctrl+Shift+M` para abrir la "Barra de herramientas del dispositivo"  <br> ![Texto alternativo](public/assets/images/ionic_7.png)
5. Vizualisaremos nuestra apliación como un dispositivo movil <br> ![Texto alternativo](public/assets/images/ionic_8.png)
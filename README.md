
#  MUY IMPORTANTE LEER!!!!!!!!
Datos para iniciar sesión:
Correo: usuario@empresa.cl

Contraseña: vacaciones123

# Objetivo Esperado

Aplicación de Vacaciones - Attendify
Nuestro objetivo es crear una aplicación para poder solicitar vacaciones para trabajadores de ciertas empresas, teniendo en cuenta la recepción y resolución de su solicitud de vacaciones.


# Estructura del Proyecto

src/
├── components/
│   ├── Layout.js
│   ├── Navbar.js
│   └── PrivateRoute.js
├── context/
│   └── AuthContext.js
├── pages/
│   ├── Inicio.js
│   ├── Dashboard.js
│   ├── Login.js
│   ├── PerfilUsuario.js
│   ├── Configuracion.js
│   └── Registro.js
├── utils/
│   └── fakeAuth.js
├── App.js
├── index.js
└── App.css


# Funcionalidades principales

Inicio: Página de bienvenida para todos los usuarios.

Login: Formulario de acceso al sistema.

Registro: Creación de una nueva cuenta.

Dashboard: Panel principal que muestra información relevante.

Perfil de Usuario: Datos personales y configuración de cuenta (requiere login).

Configuración: Ajustes avanzados (requiere login).

Protección de rutas: Acceso controlado usando PrivateRoute.



# Autenticación

Context API es utilizada para manejar el estado de autenticación globalmente (AuthContext.js).

Para simular el login, se usa una función de autenticación falsa (fakeAuth.js)


# Rutas de Navegación

Ruta	              Componente	             Protección
/ ó /inicio	            Inicio	                   Pública
/login	                Login	                   Pública
/registro	          Registro	                   Pública
/dashboard	          Dashboard	                   Pública
/perfil	            PerfilUsuario	       Protegida (requiere login)
/configuracion	    Configuracion	       Protegida (requiere login)


# Tecnologías Usadas

React

React Router DOM

Context API (para la autenticación)

HTML y CSS básico


# Guia Simple de como usar:

En el directorio del proyecto puedes correr:

npm start
Corre la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en el navegador.

npm run build
Construye la aplicación para producción en la carpeta build/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

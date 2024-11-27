<img src="https://github.com/JoelCHN/SAETA-PWA/blob/main/public/icon512_rounded.png" alt="SAETA PWA Logo" width="200" height="200">

# SAETA PWA (Sistema de Autotransporte y Enlace de Tabasco)

Aplicación web para la consulta de información de las rutas del transporte publico de tabasco

## Features

- Mapas interactivos
- Multiplataforma
- Consulta rápida
- Fácil de usar

## Run Locally

Clona el repositorio

```bash
  git clone https://github.com/JoelCHN/SAETA-PWA.git
```

Ve a la carpeta del proyecto

```bash
  cd SATEA-PWA
```

Instala las dependencias

```bash
  npm install
```

Inicia el proyecto en modo desarrollo

```bash
  npm run dev
```

## Run Production

Compila el proyecto

```bash
  npm run build
```

Inicia el proyecto en modo producción

```bash
  npm start
```

## Environment Variables

Para ejecutar este proyecto, necesitarás agregar las siguientes variables de entorno a tu archivo .env

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`

`NEXT_PUBLIC_FIREBASE_APP_ID`

`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

## API Reference

Este proyecto hace uso de la API propietaria de [saeta-node-api](https://saeta-node-api.onrender.com/), la cual no requiere de clave de API para su funcionamiento, pero si deseas utilizar la API en tu propio proyecto, se debe hacer un fork de la misma (respetando la licencia MIT) y configurar las variables de entorno necesarias (Endpoints, Tokens, etc.).

Es recomendado que consultes la documentación de la API para obtener más información sobre su funcionamiento.

## Screenshots

![Dashboard Screen](https://github.com/JoelCHN/SAETA-PWA/blob/main/public/readme/dashboard-saeta-pwa.png)

![Routes Screen](https://github.com/JoelCHN/SAETA-PWA/blob/main/public/readme/routes-saeta-pwa.png)}

![Route Details Screen](https://github.com/JoelCHN/SAETA-PWA/blob/main/public/readme/route-map-saeta-pwa.png)

![Places Screen](https://github.com/JoelCHN/SAETA-PWA/blob/main/public/readme/places-saeta-pwa.png)

![Place Details Screen](https://github.com/JoelCHN/SAETA-PWA/blob/main/public/readme/place-map-saeta-pwa.png)

![Login Screen](https://github.com/JoelCHN/SAETA-PWA/blob/main/public/readme/login-saeta-pwa.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

Si tienes algún comentario, por favor de realizar una issue en este repositorio. Se recomienda utilizar la etiqueta `feedback` para identificar las issues relacionadas con el feedback.

Si tienes alguna sugerencia, por favor de crear una issue en este repositorio. Se recomienda utilizar la etiqueta `suggestion` para identificar las issues relacionadas con las sugerencias.

## Authors

- [@JoelCHN](https://github.com/JoelCHN)
- [@AlexOT03](https://github.com/AlexOT03)
- [@Gene7sis](https://github.com/Gene7sis)

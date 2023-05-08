# Posts Readers

Aplicación para leer y marcar como favoritos un listado de posts consumidos de una API externa.

![image](https://user-images.githubusercontent.com/19885713/236798257-34cc980f-3a9e-4c81-bfb3-5efbb74e09c0.png) ![image](https://user-images.githubusercontent.com/19885713/236793407-61366258-fb7b-41c5-9e2a-f148ab1109db.png) ![image](https://user-images.githubusercontent.com/19885713/236798324-4a402b95-54b3-405c-9475-8c6d88394196.png)





## Requisitos

- Node.js
- Expo CLI
- React Native
- TypeScript

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/uRuiz/posts_reader
```

2. Instalar las dependencias:

```bash
cd posts_reader
npm install
```

3. Iniciar el proyecto con Expo:

```bash
npx expo stat
```

## Estructura del Proyecto

```
.
├── src
│ ├── components
│ │ ├── Button
│ │ ├── ErrorNotification
│ │ ├── FavoriteButton
│ │ ├── LoadSpinner
│ │ ├── PostsItem
│ │ └── PostModal
│ ├── context
│ │ └── FavoriteContext
│ ├── hooks
│ │ ├── useGetCommentsById
│ │ └── useGetPosts
│ ├── screens
│ │ └── PostsScreen
│ ├── utils
│ ├── services
│ └── types
├── App
└── README.md
```

## Componentes

### PostScreen

Pantalla principal que muestra una lista de posts.

### Posts

Componente que muestra la lista de posts con paginación.

### PostModal

Componente modal que muestra los detalles del post y permite marcarlo como favorito.

### FavoriteButton

Componente que permite marcar un post como favorito o quitarlo de la lista de favoritos.

### ErrorNotification

Componente que muestra un mensaje de error si ocurre un problema al cargar datos de la API.

## Hooks

### usePosts

Hook para cargar los posts desde la API.

### useComments

Hook para cargar los comentarios de un post específico desde la API.

### useFavorites

Hook para gestionar los posts favoritos en el contexto de la aplicación.

## Context

### FavoriteContext

Contexto para almacenar y gestionar los posts favoritos a nivel global.

## Utilidades

### api.ts

Funciones para interactuar con la API.

### types.ts

Definiciones de tipos y interfaces para el proyecto.

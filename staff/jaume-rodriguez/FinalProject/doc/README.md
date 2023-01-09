# World Adventures App

## Intro

The app consists of creating a fidelity with the user based on achievements that will be obtained by interacting with it. For example by participating in daily quests and adventures.

![](https://media.giphy.com/media/3XCftPYNeLmso/giphy.gif)

## Functional Description

### App info

- Register / Login

- Profile

  - Name
  - Combat power
  - Level
  - Gold
  - Settings

- Home

  - Daily Quests
  - Adventures
    - Main
    - World

- Community

  - Posts
  - Ranking

### User

- Profile

  - View Level
  - View Combat Power
  - View Gold
  - Settings
    - Change Name
    - Change Email
    - Change Password

- Daily Quest

  - Interact with Daily Quests
    - 1 play/24h
    - Get Gold and Combat Power as a reward

- Adventures

  - Interact with Adventures
    - 1 play/24H/-200 Gold
    - Get 3000 Combat Power/Completed
  - Create Adventure
    - Get 25 gold (for each user has finished your adventure)
  - Delete Adventure

- Community

  - Create post
  - Edit post
  - Delete post
  - View Target User Posts

## Technical Description

### Blocks

```
App (client-side)        API (server-side)       DB
[React > logic > xhr] -> [Express > Mongoose] -> [Mongo]
```

### Data Model

User

- name: {
  type: String,
  required: true
  },
- email: {
  type: String,
  required: true,
  unique: true
  },
- password: {
  type: String,
  required: true
  },
- exp: {
  type: Number,
  default: 25,
  required: true
  },
- level: {
  type: Number,
  default: 1,
  required: true
  },
- gold: {
  type: Number,
  default: 100,
  required: true
  },
- lastQuestPlayedText: {
  type: String,
  default: ' ',
  required: true
  },
- lastQuestPlayedTime: {
  type: Number,
  default: 0,
  required: true
  },
- questsPlayed: [questPlayed],
- adventuresPlayed: [adventurePlayed]
  })

Quest

- creator: {
  type: ObjectId,
  ref: 'User'
  },
- text: {
  type: String,
  required: true
  },
- isMainQuest: {
  type: Boolean,
  default: false,
  required: true
  },
- isAdventureStep: {
  type: Boolean,
  default: false,
  required: true
  },
- votes: [{
  type: ObjectId,
  ref: 'User'
  }]
  })

Quest Played

- quest: {
  type: ObjectId,
  ref: 'Quest',
  required: true
  },
- timesCompleted: {
  type: Number,
  default: 1,
  required: true
  }
  })

Adventure

- creator: {
  type: ObjectId,
  ref: 'User'
  },
- title: {
  type: String,
  required: true
  },
- isMainAdventure: {
  type: String,
  default: 'main',
  required: true
  },
- steps: [{
  type: ObjectId,
  ref: 'Quest'
  }],
- votes: [{
  type: ObjectId,
  ref: 'User'
  }]
  })

Adventures Played

- adventure: {
  type: ObjectId,
  ref: 'Adventure',
  required: true
  },
- stepsCompleted: {
  type: Number,
  default: 1,
  required: true
  },
- timesCompleted: {
  type: Number,
  default: 0,
  required: true
  },
- lastStepPlayedTime: {
  type: Number,
  default: 0,
  required: true
  }
  })

Post

- user (ObjectId, required)
- text (String, required)
- date (Date, required)

## Technologies

- JavaScript
- React
- Node
- Express
- Mongo
- Mongoose
- Insomnia
- Tailwind
- Photoshop
- VsCode

## Planning

**BACKLOG**
a

- Aventos de Grupos donde todos participan y aportan según el Combat Power
- Objetos que limiten o permitan el avance en las DailyQuest y Adventure Steps.

**DOING**

- Crear los 5 steps de golpe y luego darle a los steps añadir texto.
- Cada 5 Steps recompensa para el jugador 50 Combat Points
- Coste de aventura 100^2 cada 5 pasos creados.
- Beneficios para el creador, 5 por paso ( primeros 5), 20 por paso ( segundos 5)

- **TODO**

- BUG Primer step no entra el cd
- BUG Crear Adventure sin dinero con 2 browsers.
- Resolver Waring React prop key
- SPINERS
- Permitir borrar y editar steps
- Etiquetar que es cada cosa en los render de páginas y componentes
- Limitar la info que nos llegan de los retriev
- JWT evitar que expire y no se actualice
- RAID event
- Permitir actualizar aventuras
- Borradores de adventures
- Publicar adventure ( no es lo mismo que crear)
- preload de todas las imagenes
- Algunos quest requieren de objetos
- EVENTOS SEMANALES QUE OBLIGANA EQUIPARSE X TIPO DE OBJETOS PARA LAS DAILYQUEST. ELEMENTALES, CALOR, ETC
- Añadir rewards distintos por repetición de aventura.
- Buscador de aventuras, recientes jugadas predeterminado + filtros por tags.
- Arreglar Tailwind Login & Register

**DONE**

- Balance subida de nivel x combat points
- BUG goldCollected does not get gold from first step adventure
- Limitar el número de caracteres del título de las aventuras creadas.
- Remarcar la aventura completada en el panel de aventuras
- Mostrar steps que lleva el jugador
- EL nivel default es 1
- Delete adventure change a status and not delete the adventure from DB
- AL terminar una aventura, no reinicia la aventura
- Mostrar que ganancia ha tenido el jugador en la dailyQuest
- Ganancias DailyQuest random
- Balanceo de costes (Borja)
- Alert de create Adventure sea un validator y no un compo
- Borrar aventura coste de oro igual o más a crearla.
- Arreglar pixel que se mueve entre loginy register
- Quitar titulo Main y World, añadir decoración al dibujo.
- Ver cuanta gente juega tu aventura.
- Ver el dinero que ha generado tu aventura.
- Página de tus aventuras.
- Crear aventura cuesta dinero
- Completar aventura da dinero al creador de la misma
- Ordenar los archivos y variables
- Aplicar questCompleted to random
- Barra superior con todos los recursos
- Agregar un timer a los cooldown de las aventuras
- Cambiar en Tailwind los styles para que sea responsive
- Añadir distintas imágenes según el tipo de aventura
- Convertir en galería la Página Adventures
- Crear un ranking según Combat Power
- Crear una página de posts para la comunidad
- Deshabilitar play adventure si no hay dinero
- Fix el bug de plantalla en blanco cuando se borra una aventura
- Añadir la opción de volver atrás en las páginas
- Ajustar tamaños y colores a todos los botones
- Añadir recompensa al completar las aventuras y DailyQuests
- Agregar más y mejores estilos en la página de posts comunidad.
- Agregar textos a los 2 botones de home que llevan a Adventures y Daily Quest
- Añadir fade out fade in a las alertas y que se cierren solas
- Agregar selector a la creación de Adventures
- Reiniciar los stepsCompleted en adventurePlayed dentro del usuario al completarla
- Añadir al front (React) ternarios a la página Adventure para que salgan distintos botones según el estado de progreso, cooldown y/o dinero que posea ese usuario.
- Autocompletar stepAdventure cuando se presiona Play en la página de Adventure. Así se ahorra un paso.
- Añadir nuevo sistema de errores
- Encriptar la password
- Añadir alertas personalizadas

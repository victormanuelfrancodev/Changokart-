# Changokart-


Juego de carreras estilo kart en 3D retro (Mode 7) protagonizado por changuitos, hecho en un solo archivo HTML sin dependencias.

## Corredores

| # | Changuito | Estilo |
|---|-----------|--------|
| 1 | Capuchino | Equilibrado |
| 2 | Gorila | Mucha velocidad, poca aceleración, pesado |
| 3 | Mono Araña | El mejor manejo |
| 4 | Mandril | Rápido |
| 5 | Orangután | Pesado y veloz |
| 6 | Tití | Ligero, acelera rapidísimo |
| 7 | Aullador | Buena aceleración |
| 8 | Macaco Japonés | Buen manejo |

## Monedas y Taller 🔧

- **Monedas 🪙**: recógelas en la pista (cada una te hace un poquito más rápido, hasta 10) y gana más según tu lugar al terminar (×1.5 en Normal, ×2 en Difícil). Si te pegan, pierdes 2 de la carrera. Empiezas con 100 de regalo.
- **Taller**: gasta tus monedas para armar el vehículo de cada changuito:

| Pieza | Opciones |
|-------|----------|
| Vehículo | Kart, Moto, Jeep, Tina de baño, Bólido, Platanomóvil, Cohete |
| Color | 13 colores, Arcoíris y Dorado |
| Llantas | Normales, Madera, Slick, Neón, Monstruo, Doradas |
| Accesorio | Antena plátano, Banderín, Alerón, Turbos, Alas |
| Sombrero | Gorra, Lentes, Sombrero de paja, Hélice, Casco vikingo, Corona |
| Tamaño | Normal, Mini, Grande |

Muchas piezas cambian las estadísticas (velocidad, aceleración, manejo, peso). Las Alas te hacen planear en los saltos, los Turbos alargan el turbo y el Jeep o las llantas Monstruo no se frenan fuera de la pista. Cada changuito trae un vehículo "de fábrica" gratis (el Gorila un jeep, el Mono Araña una moto, el Macaco un platanomóvil...). Las monedas y piezas se guardan en el dispositivo; en línea, todos ven tu vehículo.

## Pistas

| Pista | Ambiente |
|-------|----------|
| 🌴 Selva Plátano | Palmeras, un lago y un volcán dormido |
| 🏖️ Playa Coco | Isla de arena rodeada de mar, sombrillas y palmeras |
| 🌋 Volcán Mandril | Roca negra, grietas y lagos de lava, cielo de fuego |
| 🗻 Nevado Macaco | Nieve, pinos, cerezos, toriis y aguas termales |

Después de elegir changuito eliges la pista. En línea, el anfitrión elige la pista en la sala. Los récords se guardan por pista y dificultad.

## Objetos

- 🍌 **Plátano** (o racimo de 3): déjalo atrás para que los demás se resbalen.
- 🥥 **Coco**: lánzalo hacia adelante; también rompe cáscaras.
- 🥭 **Mango**: turbo (a veces te tocan 3).
- 🐝 **Abejas**: persiguen al que va en primer lugar (solo salen si vas atrás).
- 🍍 **Piña**: se lanza hacia adelante y rebota en las orillas.
- ⚡ **Rayo**: encoge a todos los demás unos segundos; si los pisas, dan vueltas.
- ⭐ **Estrella**: invencible y más rápido; tumbas a quien toques.

## Rampas y obstáculos

Cada pista tiene dos rampas de madera. Si tocas derrape en el aire haces un truco y ganas turbo al caer.

| Pista | Obstáculo |
|-------|-----------|
| Selva Plátano | 🐢 Tortugas que cruzan |
| Playa Coco | 🦀 Cangrejos de lado a lado |
| Volcán Mandril | ☄️ Rocas de lava que caen (fíjate en la sombra roja) |
| Nevado Macaco | ⚪ Bolas de nieve que ruedan |

## Récords y vibración

- **Récords**: desde el inicio ves tus 5 mejores tiempos y tu mejor vuelta por pista y dificultad (se guardan en el dispositivo).
- **Vibración**: en celulares Android vibra al chocar, saltar, agarrar turbo y llegar a la meta. Se apaga con el botón 📳. iPhone no permite vibrar desde el navegador.

Además: música de marimba que acelera en la última vuelta, tres dificultades (Fácil, Normal, Difícil) con récord guardado por dificultad, aviso de “¡vas al revés!”, temblor de pantalla y estrellitas al chocar, confeti en el podio, y rampas de turbo amarillas, derrape con mini‑turbo (azul y naranja), arrancón si aceleras justo antes del "¡YA!", y un tucán que te rescata si te caes al lago.

## Controles

| Acción | Teclado | Celular (deslizar) |
|--------|---------|--------|
| Acelerar | ↑ / W | automático |
| Girar | ← → / A D | desliza el dedo a la izquierda o derecha y mantenlo |
| Frenar / reversa | ↓ / S | desliza hacia abajo |
| Usar objeto | Z, X o Enter | toca la pantalla o desliza hacia arriba |
| Derrapar | Shift o Espacio (mantén y gira) | mientras giras, apoya un segundo dedo |
| Pausa | P o Esc | ⏸ |

## Multijugador en línea

No necesita cuentas ni Firebase. Usa WebRTC (conexión directa entre navegadores) con el servidor público y gratuito de [PeerJS](https://peerjs.com) solo para que los jugadores se encuentren.

1. Elige **EN LÍNEA**, escoge tu changuito y toca **Crear sala**.
2. Comparte el código de 4 letras (o el botón **Copiar invitación**).
3. Tus amigos eligen **EN LÍNEA → Unirme** y escriben el código.
4. El anfitrión toca **Iniciar carrera**. Hasta 8 jugadores; los lugares vacíos los ocupan changos de la computadora.

El anfitrión simula la carrera (IA, objetos y vueltas) y cada jugador maneja su kart en su propio navegador, así el control se siente inmediato. En algunas redes muy cerradas (ciertas redes de empresa o datos móviles) WebRTC puede no conectar; para esos casos habría que agregar un servidor TURN.

## Estadísticas y tabla mundial (Firebase, gratis)

El juego puede mandar estadísticas a Firebase para que veas cuánta gente juega, y tener una tabla mundial de récords. Si no lo configuras, todo funciona igual sin conexión.

1. Entra a <https://console.firebase.google.com> con tu cuenta de Google y crea un proyecto (por ejemplo `changokart`). Activa Google Analytics cuando te lo pregunte.
2. En el proyecto, toca el ícono **Web `</>`** para agregar una app web. Copia el objeto `firebaseConfig` que te muestra.
3. Pega ese objeto en [`firebase-config.js`](firebase-config.js), en lugar de `null`.
4. En el menú, abre **Firestore Database → Crear base de datos** (modo producción, cualquier región).
5. En **Firestore → Reglas**, pega el contenido de [`firestore.rules`](firestore.rules) y toca **Publicar**.
6. Sube los cambios a `main`. Listo.

Qué vas a ver en la consola de Firebase:

- **Analytics → Tiempo real / Eventos**: `juego_abierto`, `carrera_inicio`, `carrera_meta`, `record_subido`, `sala_creada`, `sala_unido` (con pista, chango, modo y lugar).
- **Firestore → `partidas`**: cada carrera iniciada y terminada, con pista, chango, modo, dificultad, lugar, tiempo y si fue en celular o compu.
- **Firestore → `records_<pista>_<dificultad>`**: los tiempos que la gente sube a la tabla mundial.

El plan gratuito (Spark) alcanza de sobra: 50,000 lecturas y 20,000 escrituras al día.

## Cómo jugar

Abre `index.html` en el navegador. Para publicarlo: en GitHub ve a **Settings → Pages**, elige la rama `main` y la carpeta raíz.

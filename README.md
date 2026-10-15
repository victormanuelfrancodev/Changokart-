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

## Objetos

- 🍌 **Plátano** (o racimo de 3): déjalo atrás para que los demás se resbalen.
- 🥥 **Coco**: lánzalo hacia adelante; también rompe cáscaras.
- 🥭 **Mango**: turbo (a veces te tocan 3).

Además hay rampas de turbo amarillas, derrape con mini‑turbo (azul y naranja), arrancón si aceleras justo antes del "¡YA!", y un tucán que te rescata si te caes al lago.

## Controles

| Acción | Teclado | Táctil |
|--------|---------|--------|
| Acelerar | ↑ / W | automático |
| Frenar / reversa | ↓ / S | FRENO |
| Girar | ← → / A D | ◀ ▶ |
| Derrapar | Shift o Espacio (mantén y gira) | DERRAPE |
| Usar objeto | Z, X o Enter | OBJETO |
| Pausa | P o Esc | ⏸ |

## Multijugador en línea

No necesita cuentas ni Firebase. Usa WebRTC (conexión directa entre navegadores) con el servidor público y gratuito de [PeerJS](https://peerjs.com) solo para que los jugadores se encuentren.

1. Elige **EN LÍNEA**, escoge tu changuito y toca **Crear sala**.
2. Comparte el código de 4 letras (o el botón **Copiar invitación**).
3. Tus amigos eligen **EN LÍNEA → Unirme** y escriben el código.
4. El anfitrión toca **Iniciar carrera**. Hasta 8 jugadores; los lugares vacíos los ocupan changos de la computadora.

El anfitrión simula la carrera (IA, objetos y vueltas) y cada jugador maneja su kart en su propio navegador, así el control se siente inmediato. En algunas redes muy cerradas (ciertas redes de empresa o datos móviles) WebRTC puede no conectar; para esos casos habría que agregar un servidor TURN.

## Cómo jugar

Abre `index.html` en el navegador. Para publicarlo: en GitHub ve a **Settings → Pages**, elige la rama `main` y la carpeta raíz.

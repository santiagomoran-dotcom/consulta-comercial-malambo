# Casos de prueba

Los resultados reales los registra el equipo después de probar en el navegador. Ningún caso se marca como "Pasó" sin esa confirmación.

## Etapa 0 – Base

| ID | Descripción | Pasos | Resultado esperado | Resultado real | Estado | Fecha |
|----|-------------|-------|--------------------|----------------|--------|-------|
| CP-001 | Abrir con file:// | Abrir `index.html` con doble clic y revisar la consola (F12) | Carga el inicio sin errores en consola | Pendiente | Pendiente | — |
| CP-002 | Abrir con servidor local | Ejecutar `python -m http.server` en la raíz y abrir `http://localhost:8000` | Carga el inicio sin errores en consola | Pendiente | Pendiente | — |
| CP-003 | Las 4 rutas cargan | Visitar `#/`, `#/comercio/panaderia-el-trigal`, `#/mapa` y `#/panel` | Cada ruta muestra su título y el enlace activo de la navegación se resalta | Pendiente | Pendiente | — |
| CP-004 | Comercio inexistente | Visitar `#/comercio/xyz` | Mensaje "Comercio no encontrado" con botón para volver al inicio | Pendiente | Pendiente | — |
| CP-005 | Ruta desconocida | Visitar `#/algo-que-no-existe` | Redirige al inicio | Pendiente | Pendiente | — |
| CP-006 | Aviso permanente | Navegar por las 4 rutas | El aviso "Datos de ejemplo para fines académicos" se ve siempre arriba | Pendiente | Pendiente | — |
| CP-007 | Restablecer datos | Pulsar "Restablecer datos de ejemplo" y aceptar la confirmación | La app recarga la vista sin errores; si se cancela, no pasa nada | Pendiente | Pendiente | — |
| CP-008 | LocalStorage dañado | En la consola: `localStorage.setItem('ccm.datos.v1', '{roto')` y recargar | La app carga con los datos de ejemplo, sin errores | Pendiente | Pendiente | — |
| CP-009 | Vista a 360 px | Abrir a 360 px de ancho (modo dispositivo del navegador) | Sin scroll horizontal; barra inferior con 3 enlaces visibles; textos legibles | Pendiente | Pendiente | — |
| CP-010 | Navegación con teclado | Recorrer la página con Tab | Foco visible en todos los enlaces y botones; "Saltar al contenido" aparece primero | Pendiente | Pendiente | — |

## Etapa 1 – Versión mínima

| ID | Descripción | Pasos | Resultado esperado | Resultado real | Estado | Fecha |
|----|-------------|-------|--------------------|----------------|--------|-------|
| CP-011 | Búsqueda insensible a mayúsculas | Buscar "arroz", "Arroz" y "ARROZ" | Los tres dan los mismos 4 resultados, ordenados de menor a mayor precio | Pendiente | Pendiente | — |
| CP-012 | Búsqueda sin tildes | Buscar "limon" y "LIMÓN" | Ambos muestran el limón de Frutería La Cosecha | Pendiente | Pendiente | — |
| CP-013 | Contador de resultados | Escribir "arroz" | El contador dice "4 resultados" y se actualiza al escribir | Pendiente | Pendiente | — |
| CP-014 | Estado vacío | Buscar "zzz" | Mensaje con la sugerencia "Prueba con arroz o pan." y botón para limpiar | Pendiente | Pendiente | — |
| CP-015 | Chips de categoría | Tocar el chip "Carnes" | Solo se ven productos de carnes; el chip queda marcado con ✓ | Pendiente | Pendiente | — |
| CP-016 | Filtro por medio de pago | Elegir "tarjeta" con "arroz" | Solo aparece el arroz de Miscelánea La Esquina | Pendiente | Pendiente | — |
| CP-017 | Filtro por barrio | Elegir "Pueblo Nuevo" | Solo productos de Ferretería El Tornillo y Carnicería El Corral | Pendiente | Pendiente | — |
| CP-018 | Filtro "Abierto ahora" | Activar "Abierto ahora" a distintas horas | Solo se ven comercios cuya insignia dice Abierto, según la hora de Bogotá | Pendiente | Pendiente | — |
| CP-019 | Ficha del comercio | Entrar a un comercio desde un resultado | Se ven insignia, horario por día (hoy resaltado), medios de pago, WhatsApp, productos y mapa | Pendiente | Pendiente | — |
| CP-020 | Cómo llegar | Pulsar "Cómo llegar (Google Maps)" en una ficha | Abre Google Maps en otra pestaña con la ruta hacia el comercio | Pendiente | Pendiente | — |
| CP-021 | Mapa general | Abrir `#/mapa` y tocar un pin | Se ven 7 pines; el globo muestra el nombre y el enlace "Ver ficha" lleva a la ficha | Pendiente | Pendiente | — |
| CP-022 | Vista a 360 px | Revisar buscador, ficha y mapa a 360 px | Sin scroll horizontal; chips en una fila deslizable; botones de al menos 44 px | Pendiente | Pendiente | — |
| CP-023 | Sin internet | Abrir `#/mapa` sin conexión | Mensaje "No pudimos cargar el mapa", sin romper el resto de la app | Pendiente | Pendiente | — |

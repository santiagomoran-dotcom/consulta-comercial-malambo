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

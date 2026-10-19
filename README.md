# Consulta Comercial Malambo

Prototipo web para consultar productos, precios, ubicación y medios de pago de comercios de Malambo, Atlántico.

> Datos de ejemplo para fines académicos.

Proyecto Aplicado en Gerencia de Proyectos Informáticos, Ingeniería de Sistemas, CUN. Equipo 5, ficha 55530. Entrega final: 8 de noviembre de 2026.

## Problema

No hay un lugar único para consultar qué hay, a qué precio, dónde queda y cómo se paga en los comercios de Malambo, y los negocios pequeños casi no tienen presencia digital.

## Alcance

Incluye: buscador, ficha del comercio, mapa general, panel del comercio con PIN, disponibilidad con tres estados, 7 comercios de ejemplo y documentación.

No incluye: compra o pago en línea, backend, inventarios reales ni app nativa.

## Estado

Etapa 0 (base) terminada: estructura, enrutador, almacén con LocalStorage, datos de ejemplo y aviso permanente. Las pantallas aún son marcadores de posición.

## Cómo ejecutar

- Opción 1: abrir `index.html` con doble clic (funciona con `file://`).
- Opción 2: en la raíz, ejecutar `python -m http.server` y abrir `http://localhost:8000`.

Requiere internet para cargar Tailwind CSS desde su CDN.

## Estructura

```
index.html        Página única (la que sirve Vercel)
css/estilos.css   Variables de color y componentes comunes
js/               app, router, store, utils y views/ (una vista por ruta)
data/seed.js      Datos de ejemplo como window.SEED
docs/evidencias/  Casos de prueba y capturas
```

## Decisiones técnicas

- **JavaScript clásico en un solo espacio de nombres (`window.CCM`)**: los módulos ES no funcionan con `file://`.
- **Datos en `data/seed.js`, sin `fetch`**: el navegador bloquea `fetch` de archivos locales.
- **Rutas con hash** (`#/`, `#/comercio/ID`, `#/mapa`, `#/panel`): funcionan sin configurar el servidor.
- **LocalStorage validado**: si los datos guardados están dañados, la app vuelve a la semilla.
- **Tailwind por CDN**: evita un paso de compilación; el CDN no se recomienda para producción.

## Limitaciones

- Sin backend: los cambios del panel viven solo en el navegador de cada persona.
- El PIN del panel es de ejemplo y no ofrece seguridad real.
- Los comercios, teléfonos, WhatsApp y precios son ficticios. Las coordenadas son aproximadas y deben verificarse en OpenStreetMap.

## Trabajo futuro

- Código QR por comercio.
- Comparador de precios entre comercios.

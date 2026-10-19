/*
 * Vista de la ficha de un comercio (#/comercio/ID).
 * En la Etapa 0 muestra los datos básicos y el caso de comercio inexistente;
 * horario, productos y mapa del local llegan en la Etapa 1.
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};
  window.CCM.vistas = window.CCM.vistas || {};

  const TITULO_NO_ENCONTRADO = 'Comercio no encontrado';

  function renderizarNoEncontrado(contenedor) {
    const crear = window.CCM.utils.crearElemento;
    contenedor.appendChild(crear('h1', 'titulo-pagina', TITULO_NO_ENCONTRADO));
    const estado = crear('div', 'estado');
    estado.appendChild(crear('p', 'subtitulo', 'No encontramos ese comercio. Puede que el enlace esté incompleto.'));
    const volver = crear('a', 'boton', 'Volver al inicio');
    volver.href = '#/';
    estado.appendChild(volver);
    contenedor.appendChild(estado);
    return TITULO_NO_ENCONTRADO;
  }

  /**
   * Dibuja la ficha del comercio indicado en la ruta.
   * @param {HTMLElement} contenedor Elemento donde se pinta la vista.
   * @param {{id: string}} parametros Parámetros de la ruta.
   * @returns {string} Título de la página.
   */
  function renderizar(contenedor, parametros) {
    const crear = window.CCM.utils.crearElemento;
    const comercio = window.CCM.store.obtenerComercio(parametros.id);
    if (!comercio) {
      return renderizarNoEncontrado(contenedor);
    }

    contenedor.appendChild(crear('h1', 'titulo-pagina', comercio.nombre));
    contenedor.appendChild(crear('p', 'subtitulo', comercio.categoria + ' · ' + comercio.barrio));

    const tarjeta = crear('section', 'tarjeta');
    tarjeta.appendChild(crear('p', 'tarjeta-detalle', comercio.descripcion));
    tarjeta.appendChild(crear('p', 'tarjeta-detalle', 'Dirección: ' + comercio.direccion));
    contenedor.appendChild(tarjeta);
    return comercio.nombre;
  }

  window.CCM.vistas.comercio = { renderizar: renderizar };
})();

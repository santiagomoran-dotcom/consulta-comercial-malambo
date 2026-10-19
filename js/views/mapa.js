/*
 * Vista del mapa general (#/mapa).
 * En la Etapa 0 es solo un marcador de posición; Leaflet y los pines se agregan en la Etapa 1.
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};
  window.CCM.vistas = window.CCM.vistas || {};

  const TITULO_PAGINA = 'Mapa';

  /**
   * Dibuja la pantalla del mapa.
   * @param {HTMLElement} contenedor Elemento donde se pinta la vista.
   * @returns {string} Título de la página.
   */
  function renderizar(contenedor) {
    const crear = window.CCM.utils.crearElemento;
    contenedor.appendChild(crear('h1', 'titulo-pagina', 'Mapa de comercios'));
    contenedor.appendChild(crear('p', 'estado', 'El mapa con los comercios llega en la Etapa 1.'));
    return TITULO_PAGINA;
  }

  window.CCM.vistas.mapa = { renderizar: renderizar };
})();

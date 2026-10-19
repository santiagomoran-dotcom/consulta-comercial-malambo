/*
 * Vista del panel del comercio (#/panel).
 * En la Etapa 0 es solo un marcador de posición; el acceso con PIN y la gestión de productos llegan en la Etapa 2.
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};
  window.CCM.vistas = window.CCM.vistas || {};

  const TITULO_PAGINA = 'Panel del comercio';

  /**
   * Dibuja la pantalla del panel.
   * @param {HTMLElement} contenedor Elemento donde se pinta la vista.
   * @returns {string} Título de la página.
   */
  function renderizar(contenedor) {
    const crear = window.CCM.utils.crearElemento;
    contenedor.appendChild(crear('h1', 'titulo-pagina', 'Panel de mi comercio'));
    contenedor.appendChild(crear('p', 'estado', 'El acceso con PIN llega en la Etapa 2.'));
    return TITULO_PAGINA;
  }

  window.CCM.vistas.panel = { renderizar: renderizar };
})();

/*
 * Vista de inicio (#/). En la Etapa 0 solo muestra los comercios cargados para probar
 * el enrutador y el almacén; el buscador real llega en la Etapa 1.
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};
  window.CCM.vistas = window.CCM.vistas || {};

  const TITULO_PAGINA = 'Inicio';

  function crearTarjetaComercio(comercio) {
    const crear = window.CCM.utils.crearElemento;
    const item = crear('li');
    const enlace = crear('a', 'tarjeta tarjeta-enlace');
    enlace.href = '#/comercio/' + encodeURIComponent(comercio.id);
    enlace.appendChild(crear('h3', 'tarjeta-titulo', comercio.nombre));
    enlace.appendChild(crear('p', 'tarjeta-detalle', comercio.categoria + ' · ' + comercio.barrio));
    item.appendChild(enlace);
    return item;
  }

  /**
   * Dibuja la pantalla de inicio.
   * @param {HTMLElement} contenedor Elemento donde se pinta la vista.
   * @returns {string} Título de la página.
   */
  function renderizar(contenedor) {
    const crear = window.CCM.utils.crearElemento;
    const datos = window.CCM.store.obtenerDatos();

    contenedor.appendChild(crear('h1', 'titulo-pagina', '¿Qué estás buscando en Malambo?'));
    contenedor.appendChild(crear(
      'p',
      'subtitulo',
      datos.comercios.length + ' comercios y ' + datos.productos.length +
        ' productos de ejemplo cargados. El buscador llega en la Etapa 1.'
    ));

    const lista = crear('ul', 'lista-tarjetas');
    datos.comercios.forEach(function (comercio) {
      lista.appendChild(crearTarjetaComercio(comercio));
    });
    contenedor.appendChild(lista);
    return TITULO_PAGINA;
  }

  window.CCM.vistas.buscador = { renderizar: renderizar };
})();

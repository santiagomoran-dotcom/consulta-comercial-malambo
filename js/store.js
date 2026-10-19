/*
 * Almacén de datos de Consulta Comercial Malambo.
 * Parte de la semilla (window.SEED), guarda los cambios en LocalStorage y valida lo leído:
 * si el contenido guardado está dañado, se vuelve a la semilla en lugar de romper la app.
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};

  // La versión en la clave permite descartar datos viejos si el modelo cambia.
  const CLAVE_ALMACEN = 'ccm.datos.v1';
  const ESTADOS_PRODUCTO = ['disponible', 'pocas_unidades', 'agotado'];

  // Copia en memoria: también sirve cuando LocalStorage no está disponible (modo privado).
  let datosEnMemoria = null;

  function clonar(objeto) {
    return JSON.parse(JSON.stringify(objeto));
  }

  function esTexto(valor) {
    return typeof valor === 'string' && valor.length > 0;
  }

  function esComercioValido(comercio) {
    return Boolean(comercio) &&
      esTexto(comercio.id) &&
      esTexto(comercio.nombre) &&
      Number.isFinite(comercio.lat) &&
      Number.isFinite(comercio.lng) &&
      Array.isArray(comercio.medios_pago) &&
      Boolean(comercio.horario) &&
      /^\d{4}$/.test(comercio.pin);
  }

  function esProductoValido(producto, idsComercios) {
    return Boolean(producto) &&
      esTexto(producto.id) &&
      idsComercios.has(producto.comercio_id) &&
      esTexto(producto.nombre) &&
      Number.isInteger(producto.precio) && producto.precio >= 0 &&
      ESTADOS_PRODUCTO.indexOf(producto.estado) !== -1;
  }

  function sonDatosValidos(datos) {
    if (!datos || !Array.isArray(datos.comercios) || !Array.isArray(datos.productos)) {
      return false;
    }
    if (!datos.comercios.every(esComercioValido)) {
      return false;
    }
    const idsComercios = new Set(datos.comercios.map(function (c) { return c.id; }));
    return datos.productos.every(function (p) { return esProductoValido(p, idsComercios); });
  }

  /** Lee y valida LocalStorage; devuelve null si no hay datos o están dañados. */
  function leerAlmacen() {
    try {
      const crudo = window.localStorage.getItem(CLAVE_ALMACEN);
      if (crudo === null) {
        return null;
      }
      const datos = JSON.parse(crudo);
      return sonDatosValidos(datos) ? datos : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Guarda los datos en memoria y, si es posible, en LocalStorage.
   * @param {{comercios: Array, productos: Array}} datos Estado completo a conservar.
   * @returns {boolean} true si quedó guardado en LocalStorage.
   */
  function guardarDatos(datos) {
    datosEnMemoria = datos;
    try {
      window.localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(datos));
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Devuelve los datos vigentes: LocalStorage si es válido, o la semilla.
   * @returns {{comercios: Array, productos: Array}}
   */
  function obtenerDatos() {
    if (datosEnMemoria === null) {
      const guardados = leerAlmacen();
      if (guardados) {
        datosEnMemoria = guardados;
      } else {
        guardarDatos(clonar(window.SEED));
      }
    }
    return datosEnMemoria;
  }

  /**
   * Descarta los cambios del panel y vuelve a los datos de ejemplo.
   * @returns {{comercios: Array, productos: Array}}
   */
  function restablecer() {
    guardarDatos(clonar(window.SEED));
    return datosEnMemoria;
  }

  /**
   * Busca un comercio por su identificador.
   * @param {string} id Identificador del comercio.
   * @returns {Object|undefined}
   */
  function obtenerComercio(id) {
    return obtenerDatos().comercios.find(function (comercio) {
      return comercio.id === id;
    });
  }

  window.CCM.store = {
    obtenerDatos: obtenerDatos,
    guardarDatos: guardarDatos,
    restablecer: restablecer,
    obtenerComercio: obtenerComercio
  };
})();

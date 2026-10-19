/*
 * Utilidades compartidas de Consulta Comercial Malambo.
 * Por ahora solo ayuda a construir nodos del DOM de forma segura (sin innerHTML).
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};

  /**
   * Crea un elemento con clases y texto opcionales.
   * Usa textContent para que cualquier dato externo quede escapado y no abra la puerta a XSS.
   * @param {string} etiqueta Nombre de la etiqueta HTML.
   * @param {string} [clase] Clases CSS separadas por espacio.
   * @param {string} [texto] Texto plano del elemento.
   * @returns {HTMLElement}
   */
  function crearElemento(etiqueta, clase, texto) {
    const nodo = document.createElement(etiqueta);
    if (clase) {
      nodo.className = clase;
    }
    if (texto !== undefined) {
      nodo.textContent = texto;
    }
    return nodo;
  }

  window.CCM.utils = { crearElemento: crearElemento };
})();

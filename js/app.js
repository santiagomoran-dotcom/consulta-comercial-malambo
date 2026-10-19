/*
 * Punto de entrada de Consulta Comercial Malambo.
 * Registra las rutas, conecta el botón de restablecer y el enlace de salto, y arranca el enrutador.
 */
(function () {
  'use strict';

  window.CCM = window.CCM || {};

  const MENSAJE_CONFIRMAR_RESTABLECER =
    '¿Restablecer los datos de ejemplo? Se perderán los cambios hechos en el panel.';

  function registrarRutas() {
    const router = window.CCM.router;
    const vistas = window.CCM.vistas;
    router.registrar('/', vistas.buscador.renderizar, 'inicio');
    router.registrar('/comercio/:id', vistas.comercio.renderizar, 'inicio');
    router.registrar('/mapa', vistas.mapa.renderizar, 'mapa');
    router.registrar('/panel', vistas.panel.renderizar, 'panel');
  }

  function conectarRestablecer() {
    document.getElementById('boton-restablecer').addEventListener('click', function () {
      if (window.confirm(MENSAJE_CONFIRMAR_RESTABLECER)) {
        window.CCM.store.restablecer();
        window.CCM.router.recargar();
      }
    });
  }

  /** El enlace de salto no puede usar hash: chocaría con el enrutador, así que mueve el foco por código. */
  function conectarEnlaceSalto(contenido) {
    document.getElementById('enlace-salto').addEventListener('click', function (evento) {
      evento.preventDefault();
      contenido.focus();
    });
  }

  function iniciar() {
    const contenido = document.getElementById('contenido');
    registrarRutas();
    conectarRestablecer();
    conectarEnlaceSalto(contenido);
    window.CCM.router.iniciar(contenido, document.querySelectorAll('.navegacion-enlace'));
  }

  iniciar();
})();

# Portafolio de Benjamín Aedo

Sitio estático de presentación profesional y académica para **Benjamín Aedo**, estudiante de primer año, segundo semestre, de **Ingeniería Civil en Informática** en la **Universidad Católica de Temuco (UCT)**. Preparado para ICINF1107, Sección 3.

## Objetivo y audiencia

El sitio presenta el perfil, las competencias y los proyectos del semestre a docentes, reclutadores técnicos, compañeros y posibles colaboradores. La información se organiza para que cada visitante pueda conocer rápidamente la formación de Benjamín, explorar sus trabajos y encontrar el formulario de contacto.

## Contenido

- **Presentación:** fotografía, carrera, intereses y objetivo profesional.
- **Sobre mí:** intereses en desarrollo web y backend, Linux y arquitectura de software, además de los valores que Benjamín relaciona con su práctica del fútbol.
- **Competencias:** Python, FastAPI, HTML5/CSS3, Linux Mint, Git y modelado UML.
- **Proyectos:** API RESTful CRUD en FastAPI, modelado UML con draw.io y entorno de desarrollo en Linux Mint.
- **Contacto:** formulario con nombre, correo y mensaje.

## Estructura del proyecto

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── contact.js
├── img/
│   └── imagen.jpeg
└── README.md
```

La fotografía usa texto alternativo y se carga desde `img/imagen.jpeg`. Conserva ese nombre y ruta al reemplazarla.

## Diseño y adaptación

La página utiliza navegación superior, una presentación en dos columnas, tarjetas de proyectos y un formulario dentro de una tarjeta. Los fondos del encabezado, las secciones y el pie recorren el ancho de la pantalla; el contenido se mantiene alineado en un eje central de hasta 1200 px. La paleta combina azul petróleo, tonos marfil y arena, con acentos cálidos que acompañan la fotografía.

La hoja de estilos define tres rangos: móvil hasta 768 px, tablet entre 769 y 1024 px y escritorio desde 1025 px. En móviles el perfil y los proyectos se apilan; en tablet las tarjetas usan dos columnas; en escritorio los proyectos se distribuyen en tres. Las imágenes y controles se mantienen dentro de sus contenedores.

## Accesibilidad y compatibilidad

- HTML en español con regiones semánticas y encabezados jerárquicos.
- Enlace para saltar al contenido y foco de teclado visible.
- Texto alternativo descriptivo para la fotografía.
- Etiquetas asociadas a los campos del formulario, validación básica y áreas táctiles cómodas.
- Contrastes seleccionados para lectura clara y respeto de la preferencia de movimiento reducido.
- CSS local y fuentes del sistema; no se necesitan frameworks ni recursos remotos.

## Abrir localmente

1. Descarga o clona la carpeta del proyecto.
2. Comprueba que `img/imagen.jpeg` esté en la carpeta `img`.
3. Abre `index.html` en un navegador moderno.
4. Cambia el ancho de la ventana para revisar las vistas móvil, tablet y escritorio.

No requiere instalación ni compilación. El formulario valida los campos y muestra una confirmación accesible al enviarlo. Esa confirmación es de interfaz: para transmitir y recibir mensajes hay que conectar el formulario a un servicio o backend. No se añadieron direcciones de contacto porque no se proporcionaron enlaces reales.

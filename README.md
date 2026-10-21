# Mi portafolio

Este sitio es mi portafolio personal. Lo hice para presentarme como estudiante de Ingeniería Civil en Informática de la Universidad Católica de Temuco y mostrar algunos trabajos e intereses que he desarrollado durante el semestre.

## ¿Qué puedo encontrar en la página?

La página está dividida en varias secciones:

- **Inicio:** una breve presentación, mi carrera y una fotografía.
- **Sobre mí:** cuento que estoy en segundo semestre y menciono algunas competencias que estoy desarrollando, como programación, frontend y backend, pensamiento crítico y redes de área amplia.
- **Proyectos del semestre:** presento una API CRUD hecha con FastAPI, un trabajo de modelado UML y mi entorno de desarrollo en Linux Mint.
- **Contacto:** incluye un formulario para escribir nombre, correo y mensaje.

## Cómo está organizado el código

Separé el contenido, los estilos y la interacción en archivos distintos para poder encontrar y modificar cada parte con más facilidad:

```text
.
├── index.html          # Contenido y estructura de la página
├── css/
│   └── styles.css      # Colores, tamaños, distribución y adaptación a pantallas
├── js/
│   └── contact.js      # Comportamiento del formulario
├── img/                # Fotografías e imágenes de los proyectos
│   ├── imagen.jpeg
│   ├── fastapi.png
│   ├── linux.jpeg
│   └── modeladouml.png
└── README.md
```

### HTML

En `index.html` escribí el contenido y definí las secciones de la página. Uso elementos como `header`, `nav`, `main`, `section`, `article` y `footer` para ordenar las partes y describir qué función cumple cada una. Los enlaces del menú llevan a las secciones usando sus identificadores, por ejemplo `#proyectos`.

También agregué etiquetas para los campos del formulario, texto alternativo para mi fotografía y atributos para que el navegador pueda mostrar la página correctamente en distintos tamaños de pantalla.

### CSS

En `css/styles.css` definí la apariencia: la paleta de colores, los tamaños de texto, los espacios, las tarjetas de proyectos y la presentación de las imágenes. Al principio del archivo guardé colores y el ancho máximo del contenido como variables para poder reutilizarlos.

La distribución cambia según el ancho de la pantalla. En un celular el contenido se apila en una columna; en una tablet las tarjetas de proyectos se ordenan en dos columnas; y en una pantalla grande se muestran en tres. Las imágenes de los proyectos tienen un tamaño uniforme para que las tarjetas queden ordenadas. El diagrama UML se muestra completo para que no se corte.

### JavaScript

En `js/contact.js` seleccioné el formulario y el mensaje de confirmación. Cuando se envía el formulario, JavaScript evita que la página se recargue, muestra el mensaje, limpia los campos y lleva el foco hasta la confirmación. El navegador también comprueba que los campos obligatorios estén completos y que el correo tenga un formato válido.

Por ahora el formulario solo muestra una confirmación en la página: no envía los datos ni guarda los mensajes. Para recibirlos tendría que conectarlo a un servicio o crear un backend.

## Imágenes

Las imágenes están guardadas en `img/` y se cargan desde `index.html` usando rutas relativas, por ejemplo `img/fastapi.png`. Si reemplazo una imagen, tengo que conservar la ruta o actualizarla en el HTML. Las imágenes de proyectos se cargan cuando se necesitan para ayudar a que la página abra más rápido.

## Cómo abrir el sitio

No necesito instalar programas, dependencias ni compilar el proyecto. Abro el archivo `index.html` con un navegador para ver la página. Para revisar las distintas distribuciones, cambio el ancho de la ventana o la abro desde un celular.

## Tecnologías que usé

- **HTML** para organizar el contenido.
- **CSS** para los estilos y la adaptación a distintos tamaños de pantalla.
- **JavaScript** para la interacción del formulario.
- **Imágenes locales** para la fotografía y los proyectos.

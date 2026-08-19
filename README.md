# Profumo d'Essenza

Sitio catálogo para la venta de fragancias de diseñador y nicho de una colección privada. Construido como landing estática (HTML/CSS/JS) sin backend ni pasarela de pago — el cierre de venta se coordina por WhatsApp, con pago por transferencia bancaria.

**Instagram:** [@profumodessenza](https://www.instagram.com/profumodessenza/)

---

## Estructura del proyecto

```
website/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Todos los estilos
└── js/
    └── scripts.js      # Interactividad (partículas, filtros, scroll, menú móvil)
```

## Stack

- HTML5 + CSS puro (sin frameworks ni build step)
- JavaScript vanilla (sin dependencias)
- Tipografías: [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif, títulos), [Inter](https://fonts.google.com/specimen/Inter) (texto), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (detalles/labels) — vía Google Fonts
- Google Analytics 4 (gtag.js)

No requiere instalación ni proceso de build. Es HTML estático puro: se abre directo en el navegador o se sirve con cualquier hosting estático.

## Diseño

- **Paleta:** ciruela y lavanda — fondo oscuro (`#150C1A`) con acentos en lavanda (`#B08FD1`) sobre texto claro (`#EDE6F2`). Todos los colores están centralizados como variables CSS (`:root`) en `styles.css`, fáciles de cambiar.
- **Estilo:** oscuro y lujoso, pensado para una marca de nicho/coleccionista, no de mall.

## Secciones del sitio

1. **Header** — navegación fija con blur, logo y botón directo a WhatsApp.
2. **Hero** — propuesta de valor, estadísticas (años coleccionando, fragancias, autenticidad) e ilustración animada de un frasco con partículas flotantes (efecto "mist").
3. **Historia** — cita personal + badges de confianza (fotos reales, entrega presencial en Santiago, envíos a todo Chile, pago por transferencia).
4. **Colección** — catálogo de productos en tarjetas, cada una con marca, nombre, formato, estado, pirámide olfativa (salida/corazón/fondo) y precio. Incluye filtros por categoría (Todos / Diseñador / Nicho / Decants) y animación de aparición al hacer scroll.
5. **Cómo comprar** — 4 pasos: elegir fragancia → contactar por WhatsApp → coordinar pago por transferencia → entrega o envío.
6. **Confianza** — 3 pilares: autenticidad garantizada, fotos reales del estado, respuesta rápida.
7. **Footer** — marca, contacto (WhatsApp, Instagram), navegación y ubicación.
8. **Botón flotante de WhatsApp** — visible en todo momento.

## Contacto y ventas

- **Modelo actual:** catálogo + contacto directo. No hay checkout ni pasarela de pago integrada.
- **Pago:** transferencia bancaria, coordinada por WhatsApp.
- **Entrega:** presencial en Santiago, o envío a regiones (revisar restricciones de couriers para líquidos inflamables/alcohol antes de ofrecerlo formalmente).
- **WhatsApp:** todos los botones de contacto usan el número `56964134084` con mensajes prellenados según el producto.

> **Nota:** para integrar pago en línea (Webpay, MercadoPago, Flow, etc.) se requiere iniciar actividades en el SII. Mientras el negocio opere de forma informal, este modelo de catálogo + WhatsApp + transferencia es el recomendado.

## Analytics

El sitio incluye el snippet de Google Analytics 4 (`gtag.js`) en el `<head>` de `index.html`.

⚠️ **Pendiente:** el ID de medición está como placeholder (`G-XXXXXXXXXX`, aparece 2 veces en `index.html`). Hay que reemplazarlo por el ID real de la propiedad GA4 antes de que el tracking funcione.

## Cómo editar el catálogo

Cada producto es un bloque `<article class="card">` dentro de `#catalogGrid` en `index.html`. Para agregar/editar una fragancia, copia la estructura de una tarjeta existente y ajusta:

- `data-category` — controla en qué filtro aparece (`diseñador`, `nicho`, `decant`, o combinación separada por espacio)
- Marca, nombre, formato/estado (ml, % de contenido, sellado, etc.)
- Pirámide olfativa (notas de salida, corazón, fondo)
- Precio
- El link de WhatsApp del botón "Consultar" (mensaje prellenado por producto)

## Despliegue

- **Repositorio:** GitHub (`pdessenza/website`)
- **Hosting:** en migración desde GitHub Pages hacia **Vercel**, con DNS administrado también en Vercel.
- Al ser un sitio estático sin build, en Vercel el *Framework Preset* debe quedar en **Other**, sin build command, con *Output Directory* en la raíz del proyecto.

## Pendientes / roadmap

- [ ] Reemplazar el ID placeholder de GA4 por el real
- [ ] Conectar dominio propio en Vercel (registros DNS)
- [ ] Desactivar GitHub Pages una vez confirmado el dominio en Vercel
- [ ] Reemplazar catálogo de ejemplo por el inventario real (fotos propias en vez de íconos ilustrados)
- [ ] Confirmar política de envíos a regiones con courier (restricciones por alcohol/inflamables)
- [ ] Evaluar formalización en el SII si el negocio escala y se quiere integrar pago en línea
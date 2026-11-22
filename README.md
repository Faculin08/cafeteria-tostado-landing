# Tostado · Landing page para cafetería de especialidad

Proyecto demo de diseño web: landing page responsive para una cafetería ficticia en Palermo, Buenos Aires.

## Qué incluye
- Header fijo con menú hamburguesa en móvil
- Hero con propuesta de valor y llamados a la acción
- Secciones: valores, historia, menú filtrable por categoría, barra, opiniones, galería
- Formulario de reservas que arma el mensaje y lo envía por WhatsApp
- Mapa embebido, horarios y datos de contacto
- Animaciones suaves al hacer scroll (respeta `prefers-reduced-motion`)

## Tecnologías
HTML5 semántico · CSS3 (variables, Grid, Flexbox) · JavaScript vanilla. Sin frameworks ni build.
Imágenes generadas con IA y optimizadas (JPG ≤ 250 KB).

## Características técnicas
- Mobile-first y responsive (375 px → escritorio)
- Accesible: skip link, `alt` en imágenes, foco visible, roles ARIA en pestañas y menú
- SEO básico y Open Graph para compartir el link

## Personalizar para un cliente
1. Cambiar textos, nombre y precios en `index.html`.
2. Ajustar colores en las variables de `:root` en `css/styles.css`.
3. Reemplazar el número en `js/main.js` (`WHATSAPP`) y el del enlace del contacto.
4. Cambiar la dirección en el `src` del iframe del mapa.

## Ver en local
Abrir `index.html` o servir la carpeta con `npx http-server`.

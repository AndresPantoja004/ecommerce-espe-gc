# 📚 Componente Web: `<espe-nav-category>`

## `<espe-nav-category>`

Componente web desarrollado con [LitElement](https://lit.dev/) que representa un menú visual de categorías para aplicaciones web. Diseñado para ser interactivo, responsivo y altamente personalizable, este componente permite mostrar categorías con imágenes, enlaces y cantidades de productos de forma atractiva y accesible.

---

## Propósito

`<espe-nav-category>` ofrece una forma visualmente impactante de presentar categorías de productos o secciones dentro de una aplicación. Su diseño circular, con efectos de superposición y animaciones suaves, mejora la experiencia del usuario y facilita la navegación.

---

## Características principales

- ✅ Visualización de categorías como burbujas circulares con imagen de fondo.
- ✅ Superposición animada al hacer hover.
- ✅ Muestra la cantidad de productos por categoría.
- ✅ Estilos personalizables mediante propiedades y variables CSS.
- ✅ Diseño horizontal con scroll responsivo.
- ✅ Encapsulamiento completo con Shadow DOM.

---

## Instalación

Importa el componente en tu proyecto:

```ts
import './src/components/espe-categorys.ts';
```

---

# Uso básico

```html
<espe-nav-category
  overlayColor="rgba(20, 20, 20, 0.5)"
  textColor="#C1C1C1"
  labelBgColor="#000000aa"
></espe-nav-category>

<script>
  const catMenu = document.querySelector('espe-nav-category');
  catMenu.categories = [
    {
      label: "Tecnología",
      link: "/categorias/tecnologia",
      image: "https://example.com/tecnologia.jpg",
      cantidad: 18
    },
    {
      label: "Libros",
      link: "/categorias/libros",
      image: "https://example.com/libros.jpg",
      cantidad: 12
    },
    // ...
  ];
</script>
```

---

#  API del componente

## Propiedades

| Propiedad    | Tipo | Descripción | Por defecto |
|--------------|--------|-----------------------------------------------------------|----------------------|
| overlayColor | string | Color de superposición al hacer hover sobre una categoría. | 'rgba(0, 0, 0, 0.3)' | 
| textColor    | string | Color del texto dentro de las burbujas. | '#ffffff' | 
| labelBgColor | string | Color de fondo del nombre de la categoría. | 'rgba(0, 0, 0, 0.6)' | 
| categories   | Array | Lista de objetos con { label, image, link, cantidad }. | [] | 

---

# Personalización con CSS

Puedes modificar el estilo del componente usando variables CSS:

```css
espe-nav-category {
  --category-overlay-color: rgba(0, 0, 0, 0.3);
  --category-text-color: #ffffff;
  --category-label-bg: rgba(0, 0, 0, 0.6);
}
```

---

# Diseño responsivo
- El menú se muestra en una fila horizontal con scroll automático.
- Las burbujas se adaptan a distintos tamaños de pantalla.
- El diseño usa scroll-snap para mejorar la navegación táctil.

---

# Visualizacion del componente 
Figura 4. Vista del Menú de Categorías con Imágenes y Cantidad de Productos

![Captura uso de componente - categoria](docs/especategoria.png)
Nota: Elaboración propia (2025). Las categorías se presentan como burbujas circulares con imágenes de fondo, etiquetas y cantidades de productos. Al pasar el cursor, se activa una superposición visual que mejora la interacción.

---

# Licencia

Este componente ha sido desarrollado con fines académicos y puede ser adaptado o extendido libremente para proyectos personales o institucionales.














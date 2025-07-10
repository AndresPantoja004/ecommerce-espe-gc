## 🛒 espe-product-card
Componente Web reutilizable desarrollado con Lit para representar productos de un catálogo de e-commerce, diseñado con los estilos de la Universidad ESPE.

Este componente es adaptable al tema claro u oscuro del sistema, mantiene una apariencia consistente y puede integrarse fácilmente en grillas de productos.

## 🚀 Instalación
Asegúrate de incluir el archivo del componente en tu HTML o importar el módulo en tu proyecto:

```html
<script type="module" src="./EspeProductCard.js"></script>
```

## 📦 Uso básico

```html
<espe-product-card
  title="Audífonos Bluetooth"
  description="Sonido envolvente y cancelación de ruido"
  price="$49.99"
  status="Disponible"
  imageUrl="https://via.placeholder.com/300x150?text=Audifonos"
  buttonTheme="green"
></espe-product-card>
```

## 🎨 Soporte para tema claro/oscuro
El componente detecta automáticamente el tema del sistema operativo mediante prefers-color-scheme. También puedes forzar un tema manual con el atributo tema:

```html
<espe-product-card tema="oscuro" ... ></espe-product-card>
```

### 🧩 Propiedades disponibles

| Propiedad     | Tipo                            | Descripción                                                                 |
|---------------|----------------------------------|-----------------------------------------------------------------------------|
| `title`       | `String`                        | Nombre del producto.                                                       |
| `description` | `String`                        | Breve descripción (limitada a 3 líneas para mantener el diseño uniforme).  |
| `price`       | `String`                        | Precio del producto.                                                       |
| `status`      | `"Disponible"` \| `"Sin stock"` | Estado del producto, cambia color automáticamente.                         |
| `imageUrl`    | `String`                        | URL de la imagen del producto.                                             |
| `buttonTheme` | `"green"` \| `"yellow"`         | Cambia el color del botón inferior.                                        |
| `tema`        | `"claro"` \| `"oscuro"`         | (Opcional) Forzar el tema manualmente (sino, se adapta al sistema).        |


## 📐 Diseño adaptable
- Altura fija para mantener tarjetas niveladas

- Descripción limitada a 3 líneas

- Ícono SVG adaptable al color del tema (currentColor)

- Estilos limpios, responsivos y visualmente consistentes

## 📁 Ejemplo en cuadrícula

```html
<div class="grid">
  <espe-product-card ...></espe-product-card>
  <espe-product-card ...></espe-product-card>
  <espe-product-card ...></espe-product-card>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
</style>
```

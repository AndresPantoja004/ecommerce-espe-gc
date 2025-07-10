# ecommerce-espe-gc

Proyecto de desarrollo web para una plataforma e-commerce educativa, construido con Web Components personalizados utilizando LitElement.

---

## 📁 Estructura de Ramas

Este repositorio está organizado por fases de avance, cada una representada en su propia rama:

### 🔹 `avance1-diseno-sistema` | Jennifer Torres
> 🔧 *Enfoque*: Diseño visual del sistema  
Contiene los primeros prototipos construidos en **Figma**, definiendo la identidad gráfica y la disposición UI/UX de los componentes como tarjetas de productos, login y navegación.

---

### 🔸 `avance2-componentes-avanzado`
> 🧪 *Enfoque*: Implementación técnica  
Incluye la estructura base del proyecto y el desarrollo funcional de los componentes:

- `espe-header`: Navegación principal con logo y buscador
- `espe-footer`: Contacto, direcciones y logos de pago
- `espe-login-card`: Autenticación de usuarios
- `espe-product-card`: Vista detallada de productos
- `espe-search-input`: Buscador inteligente con sugerencias

También se implementa:

- Carga dinámica de productos desde `products.json`
- Filtro en tiempo real con el componente de búsqueda
- Manejo de redirección después del login

---

### 🔀 Fusión y Consolidación
Luego del desarrollo individual en `avance1` y `avance2`, se realizó un **merge** sobre la rama `avance2-componentes-avanzado` para unir el diseño con la lógica funcional, estableciendo así una base sólida para futuras mejoras.

---

## 🔧 Ramas de Características (feature/*)

Durante el desarrollo modular, se crearon ramas específicas para cada componente:

- `feature/header` | Alexander Qhizphe
- `feature/footer` | Alexander Qhizphe
- `feature/login`  | Andres Pantoja
- `feature/card`   | Andres Pantoja
- `feature/categories` | Alexander Qhizphe

Estas ramas permitieron testear y evolucionar cada parte del sistema por separado, promoviendo un flujo de trabajo limpio y escalable.

Compañero Mejia Anthony se encargo de explicar los readme de cada componente

---

## 📌 Rama `main`
La rama principal contiene el archivo `README.md`, documentación, y será usada como base para consolidar futuras versiones o despliegues del proyecto.

---


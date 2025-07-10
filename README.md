# 📚 Componente Web: `<espe-footer>`

Componente que permite personalizar el footer, tiene ingreso de un logo, colores, direcciones (varias no hay limites solo den estar separadas con ,) contactos e igual no tiene limintes solo deben estar separadas con ,

# `<espe-footer>`

Componente web reutilizable desarrollado con [LitElement](https://lit.dev/) que representa el pie de página institucional para aplicaciones web. Diseñado para ser flexible, accesible y visualmente coherente con la identidad de la Universidad de las Fuerzas Armadas – ESPE, este footer permite mostrar información de contacto, direcciones, logotipos de pago y más.

---

## Propósito

`<espe-footer>` proporciona una solución modular para el cierre visual y funcional de cualquier aplicación web. Su diseño está orientado a:

- Reforzar la identidad institucional.
- Mostrar información útil como contactos y ubicaciones.
- Integrar logotipos de métodos de pago u otros íconos relevantes.
- Adaptarse a distintos tamaños de pantalla con diseño responsivo.

---

## Características principales

- ✅ Logotipo institucional configurable.
- ✅ Listas dinámicas de direcciones y contactos.
- ✅ Soporte para mostrar íconos de métodos de pago.
- ✅ Estilos personalizables mediante variables CSS.
- ✅ Diseño responsivo y mobile-first.
- ✅ Encapsulamiento completo con Shadow DOM.

---

## Instalación

Importa el componente en tu proyecto:

```ts
import './src/components/espe-footer.ts';
```

---

# Uso básico
```html
<espe-footer
  logoSrc="./src/assets/E-ESPE.png"
  addresses='["Av. Quevedo Km. 24 - Parroquia Luz de America","Sede Matriz Sangolqui","Sede Latacunga","Santo Domingo - Ecuador"]'
  contacts='["Telefono: +593 2 123 4567","Email: contacto@espe.edu.ec"]'
  paymentLogos='["./src/assets/visa.png","./src/assets/mastercard.png","./src/assets/paypal.png","./src/assets/american.png"]'
></espe-footer>
```

⚠️ Nota: Las propiedades addresses, contacts y paymentLogos deben pasarse como strings JSON válidos si se usan directamente en HTML. Si se usan desde JavaScript, pueden pasarse como arrays normales.


# API del componente
Propiedades

| Propiedad    | Tipo     | Descripción                                           | Por defecto | 
|--------------|----------|-------------------------------------------------------|-------------|
| logoSrc      | string   | URL del logotipo institucional.                       | ''          | 
| addresses    | string[] | Lista de direcciones físicas de las tiendas o sedes.  | []          | 
| contacts     | string[] | Lista de medios de contacto (teléfono, correo, etc.). | []          | 
| paymentLogos | string[] | Lista de URLs de logotipos de métodos de pago.        | []          | 

---

# Personalización con CSS

Puedes modificar el estilo del footer usando variables CSS:

```css
espe-footer {
  --footer-bg: #003C71;
  --footer-text: #FFFFFF;
  --footer-title: #FFD700;
  --footer-link: #FFD700;
  --footer-link-hover: #ffffff;
  --footer-divider: rgba(255, 255, 255, 0.3);
  --footer-signature: #FFD700;
  --footer-logo-filter: brightness(1.2);
  --footer-payment-filter: grayscale(0);
  --footer-font: 'Arial', 'Roboto', sans-serif;
}
```
---

# Diseño responsivo
- El layout se adapta automáticamente a pantallas pequeñas (max-width: 768px).
- Las columnas se apilan verticalmente para mejorar la legibilidad en dispositivos móviles.
- Los íconos de pago y el texto se reorganizan para mantener la coherencia visual.

---

# Ejemplo visual
Figura 1. Vista del Pie de Página Institucional con Información de Contacto y Métodos de Pago

![Filtrado por fecha](img/FiltradoFecha.png) 
Nota: Elaboración propia (2025). El pie de página muestra el logotipo institucional, direcciones de sedes, medios de contacto y logotipos de métodos de pago como Visa, Mastercard, PayPal y American Express.

# Licencia
Este componente ha sido desarrollado con fines académicos y puede ser adaptado o extendido libremente para proyectos personales o institucionales.









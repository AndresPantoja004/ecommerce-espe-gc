import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('espe-nav-category')
export class CategoryMenu extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 2rem 0;
    }

    .menu-container {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      padding: 1rem;
      justify-content: center;
      scroll-snap-type: x mandatory;
    }

    .category-item {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      text-align: center;
      color: white;
      font-weight: bold;
      cursor: pointer;
      scroll-snap-align: start;
      transition: transform 0.3s ease;
    }

    .category-item:hover {
      filter: blur(1px) brightness(0.7);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .category-item:hover .overlay {
      opacity: 1;
    }

    .category-name {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-shadow: 1px 1px 2px black;
    }
  `;

  @property({ type: Array }) categories: {
    label: string;
    image: string;
    link: string;
    cantidad: number;
  }[] = [];

  render() {
    return html`
      <div class="menu-container">
        ${this.categories.map(
          (cat) => html`
            <a href="${cat.link}" class="category-item" style="background-image: url('${cat.image}')">
              <div class="overlay">
                <span>${cat.cantidad} productos</span>
              </div>
              <div class="category-name">${cat.label}</div>
            </a>
          `
        )}
      </div>
    `;
  }
}
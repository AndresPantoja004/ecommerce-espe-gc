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
    gap: 2rem;
    overflow-x: auto;
    padding: 1rem;
    justify-content: center;
    scroll-snap-type: x mandatory;
  }

  .category-item {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    scroll-snap-align: start;
    cursor: pointer;
    flex-shrink: 0;
  }

  .category-overlay {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  .category-item:hover .category-overlay {
    opacity: 1;
  }

  .category-content {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-weight: bold;
    text-align: center;
    pointer-events: none;
  }

  .category-name {
    font-size: 1rem;
    line-height: 1.2;
    transform: translateY(10px);
    transition: transform 0.3s ease;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px 20px;
    border-radius: 20px;
  }

  .category-amount {
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .category-item:hover .category-name {
    transform: translateY(-5px);
  }

  .category-item:hover .category-amount {
    opacity: 1;
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
                    <div class="category-overlay"></div>
                    <div class="category-content">
                    <div class="category-name">${cat.label}</div>
                    <div class="category-amount">${cat.cantidad} productos</div>
                    </div>
                </a>
                `
            )}
            </div>
        `;
        }
}
import { html, css, LitElement } from "lit";

export class MainApp extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "Lit App";
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define("main-app", MainApp);

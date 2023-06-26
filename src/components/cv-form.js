import { LitElement, css, html } from "lit";

export class CVForm extends LitElement {
  static properties = {
    resData: { type: Object },
  };

  static styles = css`
    :host {
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <h1>Enter information below:</h1> `;
  }
}
customElements.define("cv-form", CVForm);

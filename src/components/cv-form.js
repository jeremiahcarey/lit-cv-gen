import { LitElement, css, html } from "lit";
import { CollapsibleDiv } from "./collapsible-div";

export class CVForm extends LitElement {
  static properties = {
    resData: { type: Object },
  };

  static styles = css`
    :host {
    }

    .form-container {
      margin-top: 1rem;
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="form-container">
        <collapsible-div top-label="Title/Role">
          <div class="input-group">
            <label>Job Title</label>
            <input type="text" />
          </div>
        </collapsible-div>
      </div>
    `;
  }
}
customElements.define("cv-form", CVForm);

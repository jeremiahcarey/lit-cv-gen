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
      margin: 0;
      padding: 0;
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0;
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
            <input type="text" placeholder=${this.resData.role} />
          </div> </collapsible-div
        ><collapsible-div top-label="Name">
          <div class="input-group">
            <label>Name</label>
            <input type="text" placeholder=${this.resData.name} />
          </div>
        </collapsible-div>
        <collapsible-div top-label="Personal Summary">
          <div class="input-group">
            <label>Summary</label>
            <textarea>${this.resData.summary} </textarea>
          </div>
        </collapsible-div>
      </div>
    `;
  }
}
customElements.define("cv-form", CVForm);

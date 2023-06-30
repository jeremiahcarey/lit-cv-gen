import { LitElement, css, html } from "lit";
import { CollapsibleDiv } from "./collapsible-div";
import { InputGroup } from "./input-group";

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
          <input-group
            form-label="Job Title"
            input-type="text"
            placeholder-info="${this.resData.role}"
          ></input-group> </collapsible-div
        ><collapsible-div top-label="Name">
          <input-group
            form-label="Name"
            input-type="text"
            placeholder-info="${this.resData.name}"
          ></input-group>
        </collapsible-div>
        <collapsible-div top-label="Personal Summary">
          <input-group
            form-label="Summary"
            input-type="textarea"
            placeholder-info="${this.resData.summary}"
          ></input-group>
        </collapsible-div>
        <collapsible-div top-label="Experience">
          <div class="input-group">
            <label>Role</label>
            <input type="text" placeholder=${this.resData.experience.role} />
          </div>
          <div class="input-group">
            <label>Company</label>
            <input type="text" placeholder=${this.resData.experience.company} />
          </div>
          <div class="input-group">
            <label>Dates Worked</label>
            <input type="text" placeholder=${this.resData.experience.dates} />
          </div>
          <div class="input-group">
            <label>Summary</label>
            <textarea>${this.resData.summary} </textarea>
          </div>
          <div class="input-group">
            <label>Description of Work Done</label>
            <textarea>${this.resData.summary} </textarea>
          </div>
        </collapsible-div>
      </div>
    `;
  }
}
customElements.define("cv-form", CVForm);

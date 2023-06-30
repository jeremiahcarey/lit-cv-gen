import { LitElement, css, html } from "lit";

export class InputGroup extends LitElement {
  static properties = {
    labelInfo: { attribute: "form-label" },
    inputType: { attribute: "input-type" },
    placeholderText: { attribute: "placeholder-info" },
  };

  static styles = css`
    :host {
    }

    .group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    input {
      padding: 0.5rem;
      width: 15rem;
      min-width: 75%;
      border: 1px solid rgb(218, 209, 209);
      border-radius: 0.33em;
    }

    textarea {
      padding: 0.5rem;
      border: 1px solid rgb(218, 209, 209);
      min-width: 75%;
      height: 5rem;
      border-radius: 0.33em;
      resize: none;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <label class="group"
        >${this.labelInfo}:
        ${this.inputType == "text"
          ? html` <input type="text" placeholder="${this.placeholderText}" /> `
          : html` <textarea>${this.placeholderText}</textarea> `}
      </label>
    `;
  }
}
customElements.define("input-group", InputGroup);

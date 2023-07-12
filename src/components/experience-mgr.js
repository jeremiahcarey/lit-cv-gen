import { html, css, LitElement, nothing } from "lit";
import { formStyles } from "./form-styles";

export class ExperienceMGR extends LitElement {
  static properties = {
    resData: { type: Object },
    experience: { type: Array },
  };

  static styles = [
    formStyles,
    css`
      button {
        font-size: 0.8rem;
        padding: 0.3rem;
        border: 2px solid black;
        border-radius: 8px;
        background-color: white;
        cursor: pointer;
      }

      button:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
      }

      button:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
          rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.experience = [...this.resData.experience];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${this.resData.experience.map(
        (job, index) => html`
          <div class="experience-group">
            <div class="job-header">
              <h1>Job #${index + 1}</h1>
              <button type="button" class="delete-ex-btn">Delete Job</button>
            </div>
            <div class="input-group">
              <label
                >Dates:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${job.dates}"
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "dates";
                      const newValue = e.target.value;
                      this.sendUpdateArrayOfObjects(
                        indexValue,
                        subKey,
                        newValue
                      );
                    }}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Role:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${job.role}"
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "role";
                      const newValue = e.target.value;
                      this.sendUpdateArrayOfObjects(
                        indexValue,
                        subKey,
                        newValue
                      );
                    }}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Company:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${job.company}"
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "company";
                      const newValue = e.target.value;
                      this.sendUpdateArrayOfObjects(
                        indexValue,
                        subKey,
                        newValue
                      );
                    }}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Summary:
                <p class="input-el">
                  <textarea
                    .value=${job.description}
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "description";
                      const newValue = e.target.value;
                      this.sendUpdateArrayOfObjects(
                        indexValue,
                        subKey,
                        newValue
                      );
                    }}
                  ></textarea>
                </p>
              </label>
            </div>
            ${index + 1 == this.resData.experience.length
              ? html`<button type="button" class="add-ed-btn">
                  Add Education
                </button>`
              : nothing}
          </div>
        `
      )}
    `;
  }

  sendUpdateArrayOfObjects(indexValue, subKey, newValue) {
    let nextArr;
    nextArr = structuredClone(this.experience);
    nextArr[indexValue][subKey] = newValue;
    this.experience = [...nextArr];
    const event = new CustomEvent("data-updated", {
      detail: { key: "experience", value: this.experience },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define("experience-manager", ExperienceMGR);

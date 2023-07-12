import { html, css, LitElement, nothing } from "lit";
import { formStyles } from "./form-styles";

export class EducationMGR extends LitElement {
  static properties = {
    resData: { type: Object },
    education: { type: Array },
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
    this.education = [...this.resData.education];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${this.resData.education.map(
        (school, index) => html`
          <div class="education-group">
            <div class="ed-header">
              <h1>Education #${index + 1}</h1>
              <button type="button" class="delete-ed-btn">
                Delete Education
              </button>
            </div>
            <div class="input-group">
              <label
                >Date Finished:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${school.dateFinished}"
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "dateFinished";
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
                >Degree/Major:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${school.degree}"
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "degree";
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
                >School:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${school.school}"
                    @input=${(e) => {
                      const indexValue = index;
                      const subKey = "school";
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
            ${index + 1 == this.resData.education.length
              ? html`<button
                  type="button"
                  class="add-ed-btn"
                  @click=${(e) => console.log("clicked")}
                >
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
    nextArr = structuredClone(this.education);
    nextArr[indexValue][subKey] = newValue;
    this.education = [...nextArr];
    const event = new CustomEvent("data-updated", {
      detail: { key: "education", value: this.education },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define("education-manager", EducationMGR);

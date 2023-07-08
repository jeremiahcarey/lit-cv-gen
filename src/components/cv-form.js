import { LitElement, css, html, nothing } from "lit";
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

    .job-header,
    .ed-header {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .job-header h1,
    .ed-header h1 {
      font-size: 1.3rem;
    }

    collapsible-div button {
      font-size: 0.8rem;
      padding: 0.3rem;
      border: 2px solid black;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
    }

    collapsible-div button:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .input-group input {
      padding: 0.5rem;
      width: 15rem;
      min-width: 75%;
      border: 1px solid rgb(218, 209, 209);
      border-radius: 0.33em;
    }

    .input-group textarea {
      padding: 0.5rem;
      border: 1px solid rgb(218, 209, 209);
      width: 15rem;
      min-width: 75%;
      height: 5rem;
      border-radius: 0.33em;
      resize: none;
    }

    .input-el {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
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
            <label
              >Job Title:
              <p class="input-el">
                <input
                  type="text"
                  .value="${this.resData.role}"
                  @input=${(e) => {
                    const dataLocation = "role";
                    const newValue = e.target.value;
                    this.sendUpdateString(dataLocation, newValue);
                  }}
                />
              </p>
            </label>
          </div> </collapsible-div
        ><collapsible-div top-label="Name">
          <div class="input-group">
            <label
              >Name:
              <p class="input-el">
                <input
                  type="text"
                  .value="${this.resData.name}"
                  @input=${(e) => {
                    const dataLocation = "name";
                    const newValue = e.target.value;
                    this.sendUpdateString(dataLocation, newValue);
                  }}
                />
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Personal Summary">
          <div class="input-group">
            <label
              >Summary:
              <p class="input-el">
                <textarea
                  .value=${this.resData.summary}
                  @input=${(e) => {
                    const dataLocation = "summary";
                    const newValue = e.target.value;
                    this.sendUpdateString(dataLocation, newValue);
                  }}
                ></textarea>
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Experience">
          ${this.resData.experience.map(
            (job, index) => html`
              <div class="experience-group">
                <div class="job-header">
                  <h1>Job #${index + 1}</h1>
                  <button type="button" class="delete-ex-btn">
                    Delete Job
                  </button>
                </div>
                <div class="input-group">
                  <label
                    >Dates:
                    <p class="input-el">
                      <input
                        type="text"
                        .value="${job.dates}"
                        @input=${(e) => {
                          const mainKey = "experience";
                          const indexValue = index;
                          const subKey = "dates";
                          const newValue = e.target.value;
                          this.sendUpdateArrayOfObjects(mainKey, indexValue, subKey, newValue);
                        }}
                      />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Role:
                    <p class="input-el">
                      <input type="text" .value="${job.role}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Company:
                    <p class="input-el">
                      <input type="text" placeholder="${job.company}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Summary:
                    <p class="input-el">
                      <textarea .value=${job.description}></textarea>
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
        </collapsible-div>
        <collapsible-div top-label="Education">
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
                      <input type="text" placeholder="${school.dateFinished}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Degree/Major:
                    <p class="input-el">
                      <input type="text" placeholder="${school.degree}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >School:
                    <p class="input-el">
                      <input type="text" placeholder="${school.school}" />
                    </p>
                  </label>
                </div>
                ${index + 1 == this.resData.education.length
                  ? html`<button type="button" class="add-ed-btn">
                      Add Education
                    </button>`
                  : nothing}
              </div>
            `
          )}
        </collapsible-div>
        <collapsible-div top-label="Skills">
          <div class="input-group">
            <label
              >Skills (type skills separated by commas):
              <p class="input-el">
                <textarea .value=${this.resData.skills}></textarea>
              </p>
            </label>
          </div>
        </collapsible-div>
      </div>
    `;
  }

  sendUpdateString(dataLocation, newValue) {
    const event = new CustomEvent("data-updated-string", {
      detail: { key: dataLocation, value: newValue },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  sendUpdateArrayOfObjects(mainKey, indexValue, subKey, newValue)
}
customElements.define("cv-form", CVForm);

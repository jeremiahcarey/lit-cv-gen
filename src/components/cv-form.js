import { LitElement, css, html, nothing } from "lit";
import { CollapsibleDiv } from "./collapsible-div";
import { ExperienceMGR } from "./experience-mgr";
import { EducationMGR } from "./education-mgr";
import { ContactMGR } from "./contact-mgr";
import { formStyles } from "./form-styles";

export class CVForm extends LitElement {
  static properties = {
    resData: { type: Object },
    experience: { type: Array },
    education: { type: Array },
    skills: { type: Array },
    contactInfo: { type: Object },
  };

  static styles = [formStyles, css``];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.skills = [...this.resData.skills];
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
                    this.sendUpdateSimple(dataLocation, newValue);
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
                    this.sendUpdateSimple(dataLocation, newValue);
                  }}
                />
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Contact Info">
        <contact-manager .resData=${this.resData}></contact-manager>
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
                    this.sendUpdateSimple(dataLocation, newValue);
                  }}
                ></textarea>
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Experience">
          <experience-manager .resData=${this.resData}></experience-manager>
        </collapsible-div>
        <collapsible-div top-label="Education">
          <education-manager .resData=${this.resData}></education-manager>
        </collapsible-div>
        <collapsible-div top-label="Skills">
          <div class="input-group">
            <label
              >Skills (type skills separated by commas):
              <p class="input-el">
                <textarea
                  @input=${(e) => {
                    const dataLocation = "skills";
                    const newValue = e.target.value
                      .split(",")
                      .filter((skill) => skill.trim() != "")
                      .map((skill) => skill.trim());
                    this.sendUpdateSimple(dataLocation, newValue);
                  }}
                >
${this.resData.skills.join()}</textarea
                >
              </p>
            </label>
          </div>
        </collapsible-div>
      </div>
    `;
  }

  sendUpdateSimple(dataLocation, newValue) {
    const event = new CustomEvent("data-updated", {
      detail: { key: dataLocation, value: newValue },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
customElements.define("cv-form", CVForm);

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

    .job-header {
      font-size: 1.5rem;
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
          ${this.resData.experience.map(
            (job, index) => html`
            <div class="experience-group">
            <h1 class="job-header">Job #${index + 1}</h1>
              <input-group
                form-label="Dates"
                input-type="text"
                placeholder-info="${job.dates}"
              ></input-group>
              <input-group
                  form-label="Role"
                  input-type="text"
                  placeholder-info="${job.role}"
              ></input-group>
              <input-group
                    form-label="Company"
                    input-type="text"
                    placeholder-info="${job.company}"
              ></input-group>
              <input-group form-label="Summary" input-type=textarea"
                    placeholder-info="${job.description}">
              </input-group>
              </div>
            `
          )}
        </collapsible-div>
        <collapsible-div top-label="Education">
          ${this.resData.education.map(
            (school, index) => html`
              <div class="experience-group">
                <h1 class="job-header">Education #${index + 1}</h1>
                <input-group
                  form-label="Date Finished"
                  input-type="text"
                  placeholder-info="${school.dateFinished}"
                ></input-group>
                <input-group
                  form-label="Degree/Major"
                  input-type="text"
                  placeholder-info="${school.degree}"
                ></input-group>
                <input-group
                  form-label="School"
                  input-type="text"
                  placeholder-info="${school.school}"
                ></input-group>
              </div>
            `
          )}
        </collapsible-div>
        <collapsible-div top-label="Skills">
          <input-group
            form-label="Skills (type skills separated by commas)"
            input-type="textarea"
            placeholder-info="${this.resData.skills}"
          ></input-group>
        </collapsible-div>
      </div>
    `;
  }
}
customElements.define("cv-form", CVForm);

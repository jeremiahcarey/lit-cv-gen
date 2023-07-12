import { html, css, LitElement } from "lit";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export class BuildCV extends LitElement {
  static styles = css`
    :host {
      font-family: "Mulish", sans-serif;
      box-sizing: border-box;
      background-color: white;
      position: relative;
    }

    .download-btn {
      position: absolute;
      top: -4rem;
      right: 0;
      font-size: 0.8rem;
      padding: 0.3rem;
      border: 2px solid black;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
    }

    .download-btn:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
    }

    .download-btn:active {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }

    .cv-container {
      padding: 1.5rem;
      display: flex;
      justify-content: center;
      width: 700px;
      aspect-ratio: 17/22;
    }

    .left-column {
      width: 75%;
      border-right: 2px solid black;
      height: 100%;
    }

    .basic-info {
      border-bottom: 2px solid black;
      padding: 1.25rem;
    }

    .right-column {
      width: 25%;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 0.8rem;
    }

    .main-cat {
      font-weight: bold;
      font-size: 0.7rem;
      text-transform: uppercase;
      border: 2px solid black;
      padding: 0.25rem;
      width: fit-content;
      margin-top: 0;
    }

    .main-cat.right {
      width: 80%;
    }

    .hello {
      font-weight: 800;
      font-size: 3.25rem;
      margin: 0;
    }

    .summary {
      font-size: 0.85rem;
    }

    .summary,
    .experience-group {
      line-height: 1.6;
    }

    .experience {
      padding: 1.25rem;
    }

    .experience-group {
      position: relative;
    }

    .experience-jobs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .experience-title {
      font-size: 1.7rem;
      border: none;
      padding-left: 0;
    }

    .job-dates {
      font-weight: bold;
      font-size: 0.6rem;
      text-transform: uppercase;
      transform: translateX(-50%) rotate(-90deg);
      position: absolute;
      text-align: center;
      top: 45%;
      left: 0.9rem;
      letter-spacing: 0.1rem;
    }

    .job-role {
      font-weight: bold;
      text-transform: uppercase;
      margin-left: 3rem;
    }

    .job-company {
      font-style: italic;
      margin-left: 3rem;
      color: #5d5a5adf;
      font-size: 0.8rem;
    }

    .job-description {
      margin-left: 3rem;
      font-size: 0.8rem;
    }

    .education-group {
      line-height: 1.6;
      padding: 1em 0 0 0;
    }

    .education-finished {
      font-weight: bold;
    }

    .skills-list {
      list-style: none;
      margin: 0;
      padding: 1rem 0 0 0;
    }

    .skill {
      line-height: 1.6rem;
    }
  `;

  static properties = {
    resData: { type: Object },
  };

  constructor() {
    super();
  }

  firstUpdated() {
    this.captureCV = this.renderRoot.querySelector("#capture");
    this.forCanvas = this.renderRoot.querySelector("#for-canvas");
  }

  render() {
    return html`
      <button type="button" class="download-btn" @click=${this.captureCV}>
        Download PDF
      </button>
      <div class="cv-container" id="capture">
        <div class="left-column">
          <div class="basic-info">
            <h1 class="main-cat">${this.resData.role}</h1>
            <p class="hello">Hello, I'm</p>
            <p class="hello hello-name">${this.resData.name}</p>
            <p class="summary">${this.resData.summary}</p>
          </div>
          <div class="experience">
            <h1 class="main-cat experience-title">Experience</h1>
            <div class="experience-jobs">
              ${this.resData.experience.map(
                (job) =>
                  html`<div class="experience-group">
                    <div class="job-dates">${job.dates}</div>
                    <div class="job-role">${job.role}</div>
                    <div class="job-company">${job.company}</div>
                    <div class="job-description">${job.description}</div>
                  </div>`
              )}
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="contact">
            <div class="main-cat right">Contact</div>
            <div class="contact-details">
              ${Object.values(this.resData.contact).map(
                (detail) => html`<p>${detail}</p>`
              )}
            </div>
          </div>
          <div class="education">
            <div class="main-cat right">Education</div>
            <div class="education-details">
              ${this.resData.education.map(
                (education) =>
                  html`<div class="education-group">
                    <div class="education-finished">
                      ${education.dateFinished}
                    </div>
                    <div class="education-degree">${education.degree}</div>
                    <div class="education-school">${education.school}</div>
                  </div>`
              )}
            </div>
          </div>
          <div class="skills">
            <div class="main-cat right">Skills</div>
            <ul class="skills-list">
              ${this.resData.skills.map(
                (skill) => html`<li class="skill">${skill}</li>`
              )}
            </ul>
          </div>
        </div>
      </div>
      <div id="for-canvas"></div>
    `;
  }

  captureCV(e) {
    const opts = {
      width: this.captureCV.offsetWidth + 20,
      height: this.captureCV.offsetHeight + 10,
    };
    console.log(opts);
    html2canvas(this.captureCV, opts).then((canvas) => {
      this.forCanvas.appendChild(canvas);
      const pdf = new jsPDF({
        unit: "px",
        format: [opts.width, opts.height],
      });
      pdf.html(this.forCanvas, {
        callback: function (pdf) {
          pdf.save("resume.pdf");
        },
      });
    });
  }
}

customElements.define("build-cv", BuildCV);

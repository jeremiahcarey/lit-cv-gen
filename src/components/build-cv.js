import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

export class BuildCV extends LitElement {
  static styles = css`
    :host {
      font-family: "Mulish", sans-serif;
      font-size: 1em
      box-sizing: border-box;
    }

    .cv-container {
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      max-width: 900px;
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
    }

    .main-cat {
      font-weight: bold;
      font-size: 1rem;
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
      font-size: 3.75rem;
      margin: 0;
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
      gap: 2rem;
    }

    .experience-title {
      font-size: 2rem;
      border: none;
      padding-left: 0;
    }

    .job-dates {
      font-weight: bold;
      font-size: 0.7rem;
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
    }

    .job-description {
      margin-left: 3rem;
      font-size: 0.87rem;
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
    role: { type: String },
    name: { type: String },
    summary: { type: String },
    experience: { type: Array },
    contact: { type: Object },
    education: { type: Array },
    skills: { type: Array },
  };

  constructor() {
    super();
    this.role = "Software Engineer";
    this.name = "Ichabod Crane";
    this.summary =
      "Frontend engineer experienced in developing modular full-stack JavaScript applications using WebComponents, React, Node, Express, RESTful APIs, and SQL databases.";
    this.experience = [
      {
        dates: "2022-Present",
        role: "Software Engineer",
        company: "Technology Company LLC",
        description:
          "Lorem ipsum dolor sit amet. At sunt tempora ea labore recusandae ab rerum mollitia non voluptatibus eligendi id quos temporibus et obcaecati dolorem. Sit odio aspernatur At amet incidunt At ullam optio nam dicta quia.",
      },
      {
        dates: "2021",
        role: "Junior Web Developer",
        company: "Bob's Builders Online",
        description:
          "A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum.",
      },
      {
        dates: "2020-2021",
        role: "Intern, Web Development",
        company: "Bob's Builders Online",
        description:
          "A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum.",
      },
    ];
    this.contact = {
      email: "ichabod@crane.dev",
      phone: "123-456-7890",
      site: "www.crane.dev",
      city: "Orlando, FL",
    };
    this.education = [
      {
        dateFinished: "2017",
        degree: "Ph.D. Philosophy",
        school: "UCLA",
      },
      {
        dateFinished: "2007",
        degree: "B.A. Philosophy",
        school: "University of Guam",
      },
    ];
    this.skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Components",
      "Lit",
      "React",
      "NodeJS",
      "Python",
    ];
  }

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800&display=swap"
        rel="stylesheet"
      />
      <div class="cv-container">
        <div class="left-column">
          <div class="basic-info">
            <h1 class="main-cat">${this.role}</h1>
            <p class="hello">Hello, I'm</p>
            <p class="hello hello-name">${this.name}</p>
            <p class="summary">${this.summary}</p>
          </div>
          <div class="experience">
            <h1 class="main-cat experience-title">Experience</h1>
            <div class="experience-jobs">
              ${this.experience.map(
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
              ${Object.values(this.contact).map(
                (detail) => html`<p>${detail}</p>`
              )}
            </div>
          </div>
          <div class="education">
            <div class="main-cat right">Education</div>
            <div class="education-details">
              ${this.education.map(
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
              ${this.skills.map(
                (skill) => html`<li class="skill">${skill}</li>`
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("build-cv", BuildCV);
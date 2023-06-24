import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

export class BuildCV extends LitElement {
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

    :host {
      font-family: "Mulish", sans-serif;
      box-sizing: border-box;
    }

    .cv-container {
      padding: 1em;
      display: flex;
      justify-content: space-between;
      max-width: 900px;
      aspect-ratio: 17/22;
    }

    .left-column {
      width: 75%;
      border-right: 2px solid black;
    }

    .basic-info {
      border-bottom: 2px solid black;
      padding: 1em;
    }

    .right-column {
      width: 25%;
      padding: 1em;
    }

    .main-cat {
      font-weight: bold;
      font-size: 1em;
      text-transform: uppercase;
      border: 2px solid black;
      padding: 0.25em;
      width: fit-content;
    }

    .hello {
      font-weight: bold;
      font-size: 3.5em;
      margin: 0;
    }

    .experience {
      padding: 1em;
    }

    .experience-title {
      font-size: 2em;
      border: none;
      padding-left: 0;
    }
  `;

  static properties = {
    role: { type: String },
    name: { type: String },
    summary: { type: String },
    experience: { type: Array },
    projects: { type: Array },
    contact: { type: Object },
    education: { type: Array },
    skills: { type: Array },
  };

  constructor() {
    super();
    this.role = "Software Engineer";
    this.name = "Abob Henry";
    this.summary =
      "Frontend engineer experienced in developing modular full-stack JavaScript applications using WebComponents, React, Node, Express, RESTful APIs, and SQL databases.";
    this.experience = [
      {
        dates: "2022-Present",
        role: "Software Engineer",
        description:
          "Lorem ipsum dolor sit amet. At sunt tempora ea labore recusandae ab rerum mollitia non voluptatibus eligendi id quos temporibus et obcaecati dolorem. Sit odio aspernatur At amet incidunt At ullam optio nam dicta quia.",
      },
      {
        dates: "2021-2022",
        role: "Intern, Web Development",
        description:
          "A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum.",
      },
    ];
    this.projects = [
      {
        title: "Movie Review App",
        description:
          "Aut obcaecati dolor ut dolore error qui quod excepturi ut veritatis Quis sit dolores nisi et optio dolorum. Eos tempora officia in eius numquam et dolores aspernatur aut nobis voluptatem ut fuga similique aut libero possimus ut obcaecati atque.",
      },
      {
        title: "To Do List App",
        description:
          "Qui officiis eligendi ut architecto officia et molestiae velit nam consequatur consequuntur aut consectetur eveniet aut aliquid esse eum amet nesciunt? At praesentium maxime sed nemo consequuntur non libero dolores eos galisum voluptas nam accusantium debitis. Et animi autem aut ipsum fugit qui sint nostrum At illo dolorem in iste provident aut iusto dolores et nostrum ducimus. Qui distinctio natus rem iste soluta At animi illum.",
      },
    ];
    this.contact = {
      email: "abobhenry@webdev.com",
      phone: "123-456-7890",
      site: "www.abobhenry.dev",
      city: "Orlando, FL",
    };
    this.education = [
      {
        dateFinished: "2017",
        degree: "Ph.D. Philosophy",
        school: "U.C. Berkeley",
      },
      {
        dateFinished: "2007",
        degree: "B.A. Philosophy",
        school: "The Florida State University",
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
      <div class="cv-container">
        <div class="left-column">
          <div class="basic-info">
            <h1 class="main-cat">${this.role}</h1>
            <p class="hello">Hello, I'm</p>
            <p class="hello">${this.name}</p>
            <p class="summary">${this.summary}</p>
          </div>
          <div class="experience">
            <h1 class="main-cat experience-title">Experience</h1>
            ${this.experience.map(
              (job) =>
                html`<div class="job-dates">${job.dates}</div>
                  <div class="job-role">${job.role}</div>
                  <div class="job-description">${job.description}</div> `
            )}
          </div>
        </div>
        <div class="right-column">
          <div class="contact">
            browse the bundles, go to https://cdn.jsdelivr.net/gh/lit/dist/ and
            use the dropdown menu to go to the page for a particular version. On
            that page, there will be a directory for each type of bundle
            available for that version. There are two types of bundles:
          </div>
          <div class="education">dafsd</div>
          <div class="skills">afdss</div>
        </div>
      </div>
    `;
  }
}

customElements.define("build-cv", BuildCV);

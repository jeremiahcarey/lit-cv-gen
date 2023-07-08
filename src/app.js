import { html, css, LitElement } from "lit";
import { CVForm } from "./components/cv-form";
import { BuildCV } from "./components/build-cv";

export class MainApp extends LitElement {
  static styles = css`
    :host {
      font-family: "Mulish", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f6;
    }
    .body-container {
      overflow: auto;
    }
    .page-title {
      text-align: center;
      font-size: 3.75rem;
      margin: 0;
      padding: 0;
      text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
    }
    .main-container {
      display: flex;
      gap: 1rem;
      justify-content: space-around;
    }

    .cv-input {
      width: 40%;
    }

    .input-form {
      margin-top: 2.5rem;
      border: 2px solid black;
    }

    .cv-result {
      max-width: max-content;
    }

    .display-cv {
      margin: 1rem 1rem 1rem 0;
      width: max-content;
      height: max-content;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .display-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 1rem;
    }

    .display-header button {
      width: 125px;
      height: 35px;
      border: 3px solid black;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
    }

    .display-header button:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
    }
  `;

  static properties = {
    resData: { type: Object },
  };

  constructor() {
    super();
    this.resData = {
      role: "Software Engineer",
      name: "Ichabod Crane",
      summary:
        "Frontend engineer experienced in developing modular full-stack JavaScript applications using WebComponents, React, Node, Express, RESTful APIs, and SQL databases.",
      experience: [
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
      ],
      contact: {
        email: "ichabod@crane.dev",
        phone: "123-456-7890",
        site: "www.crane.dev",
        city: "Orlando, FL",
      },
      education: [
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
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Web Components",
        "Lit",
        "React",
        "NodeJS",
        "Python",
      ],
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("data-updated-string", this.handleUpdateString);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("data-updated-string", this.handleUpdateString);
  }

  handleUpdateString(event) {
    this.resData = {
      ...this.resData,
      [event.detail.key]: event.detail.value,
    };
  }

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800&display=swap"
        rel="stylesheet"
      />
      <div class="body-container">
        <h1 class="page-title">Build a CV with Lit</h1>
        <div class="main-container">
          <div class="cv-input">
            <h1>Enter Information Below:</h1>
            <div class="input-header"></div>
            <div class="input-form">
              <cv-form .resData=${this.resData}></cv-form>
            </div>
          </div>
          <div class="cv-result">
            <div class="display-header">
              <h1>Result:</h1>
              <button type="button">Download PDF</button>
            </div>
            <div class="display-cv">
              <build-cv .resData=${this.resData}></build-cv>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("main-app", MainApp);

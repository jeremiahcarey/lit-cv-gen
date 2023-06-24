import { html, css, LitElement } from "lit";

export class BuildCV extends LitElement {
  static styles = `
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');


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
          <div class="basic-info"></div>
          <div class="experience"></div>
        </div>
        <div class="right-column">
          <div class="contact"></div>
          <div class="education"></div>
          <div class="skills"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("build-cv", BuildCV);

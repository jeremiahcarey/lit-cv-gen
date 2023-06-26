import { html, css, LitElement } from "lit";
import { CVForm } from "./components/cv-form";
import { BuildCV } from "./components/build-cv";

export class MainApp extends LitElement {
  static styles = css`
    :host {
      font-family: "Mulish", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .body-container {
      height: 100%;
      overflow: auto;
    }
    .page-title {
      text-align: center;
      font-size: 4rem;
    }
    .main-container {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }

    .cv-input {
      min-width: 250px;
    }

    .cv-result {
      max-width: max-content;
    }
    .display-cv {
      margin: 1em;
      width: max-content;
      height: max-content;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "Lit App";
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
        <h1 class="page-title">Build a Lit CV</h1>
        <div class="main-container">
          <div class="cv-input">
            <cv-form></cv-form>
          </div>
          <div class="cv-result">
            <h1>Result</h1>
            <div class="display-cv">
              <build-cv></build-cv>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("main-app", MainApp);

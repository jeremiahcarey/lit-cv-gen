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
      height: 100%;
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
      margin-left: 1rem;
      padding: 0;
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
      background-color: white;
      cursor: pointer;
    }

    .display-header button:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
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
        <h1 class="page-title">Build a CV with Lit</h1>
        <div class="main-container">
          <div class="cv-input">
            <h1>Enter Information Below:</h1>
            <div class="input-header"></div>
            <div class="input-form">
              <cv-form></cv-form>
            </div>
          </div>
          <div class="cv-result">
            <div class="display-header">
              <h1>Result:</h1>
              <button type="button">Download PDF</button>
            </div>
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

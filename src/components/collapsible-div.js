import { html, css, LitElement } from "lit";

export class CollapsibleDiv extends LitElement {
  static styles = css`
    .collapsible-label {
      background-color: black;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 1.2rem;
    }
    .collapsible-label:hover {
      background-color: #363636;
    }
    .collapsible-label:after {
      content: "+";
      font-size: 20px;
      color: white;
      float: right;
      margin-left: 5px;
    }
    .active:after {
      content: "-";
    }
    .content {
      padding: 0;
      opacity: 0;
      max-height: 0;
      overflow: auto;
      transition: ease 0.25s;
    }
    .expanded {
      opacity: 1;
      max-height: 300px;
      padding: 1rem;
    }
  `;

  static properties = {
    topLabel: { attribute: "top-label" },
    expanded: { type: Boolean },
  };

  constructor() {
    super();
    this.topLabel = "Collapsible Label";
    this.expanded = false;
  }

  render() {
    return html`
      <button
        type="button"
        class="collapsible-label ${this.expanded ? "active" : ""}"
        @click=${this.setExpanded}
      >
        ${this.topLabel}
      </button>
      <div class="content ${this.expanded ? "expanded" : ""}">
        <slot></slot>
      </div>
    `;
  }

  setExpanded() {
    this.expanded = !this.expanded;
  }
}

customElements.define("collapsible-div", CollapsibleDiv);

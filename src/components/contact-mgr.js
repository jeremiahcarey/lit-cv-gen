import { html, css, LitElement, nothing } from "lit";
import { formStyles } from "./form-styles";

export class ContactMGR extends LitElement {
  static properties = {
    resData: { type: Object },
    conactInfo: { type: Object },
  };

  static styles = [formStyles, css``];

  connectedCallback() {
    super.connectedCallback();
    this.contactInfo = { ...this.resData.contact };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="input-group">
        <label>
          Email:
          <p class="input-el">
            <input
              type="text"
              .value="${this.resData.contact.email}"
              @input=${(e) => {
                const dataLocation = "email";
                const newValue = e.target.value;
                this.sendUpdateContact(dataLocation, newValue);
              }}
            />
          </p>
        </label>
      </div>
      <div class="input-group">
        <label
          >Phone:
          <p class="input-el">
            <input
              type="text"
              .value="${this.resData.contact.phone}"
              @input=${(e) => {
                const dataLocation = "phone";
                const newValue = e.target.value;
                this.sendUpdateContact(dataLocation, newValue);
              }}
            />
          </p>
        </label>
      </div>
      <div class="input-group">
        <label
          >Website:
          <p class="input-el">
            <input
              type="text"
              .value="${this.resData.contact.site}"
              @input=${(e) => {
                const dataLocation = "site";
                const newValue = e.target.value;
                this.sendUpdateContact(dataLocation, newValue);
              }}
            />
          </p>
        </label>
      </div>
      <div class="input-group">
        <label
          >City:
          <p class="input-el">
            <input
              type="text"
              .value="${this.resData.contact.city}"
              @input=${(e) => {
                const dataLocation = "city";
                const newValue = e.target.value;
                this.sendUpdateContact(dataLocation, newValue);
              }}
            />
          </p>
        </label>
      </div>
    `;
  }

  sendUpdateContact(dataLocation, newValue) {
    let nextObj;
    nextObj = structuredClone(this.contactInfo);
    nextObj[dataLocation] = newValue;
    this.contactInfo = { ...nextObj };
    const event = new CustomEvent("data-updated", {
      detail: { key: "contact", value: this.contactInfo },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define("contact-manager", ContactMGR);

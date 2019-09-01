import { LitElement, html } from '../web_modules/lit-element.js'

export class BootstrapJumbotron extends LitElement {
    
  static get styles() { return [window.bootstrapCssResult] }

  render() {
    return html`
      <div class="jumbotron">
        <h1 class="text-primary">🖖 live long and prosper 🌍</h1>
        <p class="lead text-success">
        made with 🧡 and 🍵
        </p>
      </div>
    `
  }
}

customElements.define('bootstrap-jumbotron', BootstrapJumbotron)
import { LitElement, html } from '../web_modules/lit-element.js'

import {} from './BootstrapJumbotron.js'
import {} from './BootstrapNavbar.js'

export class MainApplication extends LitElement {

  static get styles() { return [window.bootstrapCssResult] }
  
  render() {
    return html`
      <bootstrap-navbar></bootstrap-navbar>
      <main role="main" class="container">
        <bootstrap-jumbotron></bootstrap-jumbotron>
      </main>
    `
  }
}

customElements.define('main-application', MainApplication)
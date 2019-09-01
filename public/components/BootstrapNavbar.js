import { LitElement, html } from '../web_modules/lit-element.js'

export class BootstrapNavbar extends LitElement {
    
  static get styles() { return [window.bootstrapCssResult] }

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand text-info" href="#">Lit-Element and Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-warning" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    `
  }
}

customElements.define('bootstrap-navbar', BootstrapNavbar)
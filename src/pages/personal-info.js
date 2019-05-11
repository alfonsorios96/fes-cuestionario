import {LitElement, html} from 'lit-element';
import {styles} from "./info-styles";

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class PersonalInfo extends LitElement {
  static get properties() {
    return {
      personal: {type: Object}
    };
  }

  constructor() {
    super();
    this.personal = {};
  }

  static get styles() {
    return [
      styles
    ];
  }

  render() {
    return html`
       <h3>DATOS DE LA PERSONA QUE REALIZA LA ENTREVISTA.</h3>
      
      <div class="form-control">
      <paper-input class="md-5" label="Nombre" id="name"></paper-input>
      <paper-input class="md-5" label="Puesto" id="role"></paper-input>
      <paper-input class="md-5" label="Área" id="area"></paper-input>
      <paper-input class="md-5" label="Teléfono" id="phone"></paper-input>
      <paper-input class="md-5" label="Email" id="email"></paper-input>
      
      <paper-button @click="${this._next}" class="lg-2">Siguiente</paper-button>
      <paper-button @click="${this._before}" class="lg-2">Atrás</paper-button>
</div>
      
      <p>Sello</p>
      <p>Firma</p>
      
      <blockquote>
      Nota: En caso de que por políticas de la institución no pudieran colocar el sello de la misma, favor de adjuntar una tarjeta de presentación. Esto con el fin de que el organismo acreditador (CACEI) requiera verificar la veracidad de la información.
</blockquote>
    `;
  }

  _next() {
    this.personal = {
      name: this.shadowRoot.querySelector('#name').value,
      role: this.shadowRoot.querySelector('#role').value,
      area: this.shadowRoot.querySelector('#area').value,
      phone: this.shadowRoot.querySelector('#phone').value,
      email: this.shadowRoot.querySelector('#email').value
    };
    const key = localStorage.getItem('uid');
    firebase.database().ref(`/users/${key}/personal`).set(this.personal);
    // Notify the change of section
    this.dispatchEvent(new CustomEvent('change-section', {
      detail: 'ask'
    }));
  }

  _before() {
    this.dispatchEvent(new CustomEvent('change-section', {
      detail: 'company'
    }));
  }
}

window.customElements.define('personal-info', PersonalInfo);

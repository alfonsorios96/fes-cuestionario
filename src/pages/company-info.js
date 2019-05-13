import {LitElement, html} from 'lit-element';
import {styles} from "./info-styles";

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class CompanyInfo extends LitElement {
  static get properties() {
    return {
      company: {type: Object}
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      styles
    ];
  }

  render() {
    return html`
      <blockquote>
        Esta investigación tiene como fin conocer su opinión sobre el desempeño profesional de los Ingenieros Químicos que laboran con ustedes en su institución. Información que nos permitirá seguir formando a estos profesionistas con alto rendimiento y competente de acuerdo a las necesidades actuales. Agradeciendo la veracidad de los datos proporcionados y su valioso interés en el mismo.
        </blockquote>
        <h3>
            DATOS DE LA EMPRESA
        </h3>
        <div class="form-control">
         <paper-input class="md-4" label="Nombre de la empresa" id="company"></paper-input>
        <paper-input class="md-4" label="Calle y número" id="street"></paper-input>
        <paper-input class="md-4" label="Colonia" id="colony"></paper-input>
        <paper-input class="md-4" label="Delegación/Municipio" id="district"></paper-input>
        <paper-input class="md-4" label="Ciudad" id="city"></paper-input>
        <paper-input class="md-4" label="Entidad" id="state"></paper-input>
        <paper-input class="md-4" label="C.P." id="zip"></paper-input>
        <paper-input class="md-4" label="Teléfono" id="phone"></paper-input>
        <paper-input class="md-4" label="Email" id="email"></paper-input>
         
         <paper-dropdown-menu class="md-4" label="Régimen jurídico de la empresa o institución" id="regimen" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Público</paper-item>
            <paper-item>Privado</paper-item>
            <paper-item>Otro</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu class="md-4" label="Tamaño de la empresa" id="size" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Micro (Menos de 15 empleados)</paper-item>
            <paper-item>Pequeña (Entre 16 y 100 empleados)</paper-item>
            <paper-item>Mediana (Entre 101 y 250 empleados)</paper-item>
            <paper-item>Grande Más de 250 empleados)</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu class="md-4" label="Actividad económica de la empresa" id="activity" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Agrícola-ganadero, silvícola etc.</paper-item>
            <paper-item>Comercio</paper-item>
            <paper-item>Educación</paper-item>
            <paper-item>Industria de la construcción</paper-item>
            <paper-item>Industria de transformación o manufactura (farmacéutica, alimentaria, pintura, plástico, nuevos materiales etc)</paper-item>
            <paper-item>Industria extractiva (minería, electricidad y petróleo)</paper-item>
            <paper-item>Servicios bancarios, financieros y seguros</paper-item>
            <paper-item>Servicios de gobierno</paper-item>
            <paper-item>Servicios de salud</paper-item>
            <paper-item>Servicios profesionales y técnicos</paper-item>
            <paper-item>Transporte/comunicación</paper-item>
            <paper-item>Turismo</paper-item>
            <paper-item>Ventas</paper-item>
            <paper-item>Otro</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-button @click="${this._next}" class="lg-1">Siguiente</paper-button>
</div> 
    `;
  }

  _next() {
    this.company = {
      company: this.shadowRoot.querySelector('#company').value,
      street: this.shadowRoot.querySelector('#street').value,
      colony: this.shadowRoot.querySelector('#colony').value,
      district: this.shadowRoot.querySelector('#district').value,
      city: this.shadowRoot.querySelector('#city').value,
      state: this.shadowRoot.querySelector('#state').value,
      zip: this.shadowRoot.querySelector('#zip').value,
      phone: this.shadowRoot.querySelector('#phone').value,
      email: this.shadowRoot.querySelector('#email').value,
      regimen: this.shadowRoot.querySelector('#regimen').value,
      size: this.shadowRoot.querySelector('#size').value,
      activity: this.shadowRoot.querySelector('#activity').value
    };

    // Save data in firebase cloud
    let key = localStorage.getItem('uid');
    firebase.database().ref(`/users/${key}/company`).set(this.company);
    // Notify the change of section
    this.dispatchEvent(new CustomEvent('change-section', {
      detail: 'personal'
    }));
  }
}

window.customElements.define('company-info', CompanyInfo);

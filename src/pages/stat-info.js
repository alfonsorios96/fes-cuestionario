import {LitElement, html, css} from 'lit-element';

import '@google-web-components/google-chart/google-chart.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class StatInfo extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      data: {type: Array},
      source: {type: Array},
      options: {type: Array},
      translate: {type: Map},
      sections: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.title = '';
    this.data = [];
    this.source = [];
    this.options = [];
    this.sections = false;
    this.translate = new Map();

    this.translate.set('grade', 'Título de licenciatura');
    this.translate.set('experience', 'Experiencia laboral');
    this.translate.set('languages', 'Otros idiomas');
    this.translate.set('referers', 'Contactos o conocidos (Recomendación)');
    this.translate.set('age', 'Edad');
    this.translate.set('interview', 'Entrevista');
    this.translate.set('postgrade', 'Estudios de posgrado');
    this.translate.set('knowledge', 'Pruebas de conocimiento');
    this.translate.set('institute', 'Institución de procedencia');
    this.translate.set('available', 'Disponibilidad de cambio de residencia');
    this.translate.set('testPsico', 'Tests de psicométrico');

    this.translate.set('candidates', 'Rango de candidatos');
    this.translate.set('sm', '5 ´S & 5 ´M.');
    this.translate.set('sixSigma', 'Six Sigma');
    this.translate.set('supply-chain', 'Supply Chain');
    this.translate.set('manufacturing', 'Lean Manufacturing');
    this.translate.set('quality-systems', 'Sistemas de Calidad');
    this.translate.set('rules', 'Conocimiento de normas para el sector de su empresa');
    this.translate.set('process', 'Conocimiento de maquinaria de los procesos');
    this.translate.set('supervision', 'Supervención de personal y evaluaciones de desempeño');
    this.translate.set('storage', 'Control de almacén e inventarios');
    this.translate.set('security', 'Seguridad, higiene laboral y protección civil');
    this.translate.set('projects', 'Desarrollo de proyectos');
    this.translate.set('energy', 'Energía renovable');
    this.translate.set('reolo', 'Reología');
    this.translate.set('goverment', 'Trámites ante instituciones de gobierno');
    this.translate.set('ambiental', 'Protección Ambiental');
  }

  static get styles() {
    return css`
      .table {
           display: flex;
           align-items: center;
          justify-content: center;
        }
        
        .form-control {
          width: 600px;
        }
        
        paper-button {
          width: 100%;
        }
        
        paper-input {
          width: 100%;
        }
        .info {
          display: flex;
          justify-content: space-evenly;
        }
    `;
  }

  render() {
    return html`
        <p>${this.title}</p>
          ${
      this.data.map(section => html`
          <div class="info">
            <google-chart type="pie" .data="${section.rows}" options='{"title": "${section.title}"}'></google-chart>
            <div class="table">
              <table border="1">
                  <thead>
                      <th>Desviación estándar</th>
                      <th>Moda</th>
                      <th>Media</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${this._getLabel(standardDeviation(this._getValues(section.rows)), section.rows)}</td>
                      <td>${this._getLabel(mode(this._getValues(section.rows)), section.rows)}</td>
                      <td>${this._getLabel(average(this._getValues(section.rows)), section.rows)}</td>
                    </tr>
                  </tbody>
                </table>  
            </div>
          </div>
        `)

      }
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'source':
          if (this.sections) {
            const question = this.source[0];
            for (const section in question) {
              if (this.translate.get(section)) {
                const item = {
                  title: this.translate.get(section),
                  rows: [
                    ["Aspecto valorado", this.translate.get(section)]
                  ]
                };
                for (const option of this.options) {
                  item.rows.push([option, this._extractNumber(section, option)]);
                }
                this.data = [
                  ...this.data, item
                ];
              }
            }
          } else {
            this.data = [];
            const item = {
              title: "Cualidades",
              rows: [
                ["Aspecto valorado", "Cualidades"]
              ]
            };
            for (const option of this.options) {
              item.rows.push([option, this._extractNumberAll(option)]);
            }
            this.data = [
              ...this.data, item
            ];
          }
          break;
      }
    });
  }

  _extractNumber(section, type) {
    return this.source.reduce((accumulator, ask) => {
      return ask[section].toUpperCase() === type.toUpperCase() ? accumulator + 1 : accumulator;
    }, 0);
  }

  _extractNumberAll(option) {
    return this.source.reduce((accumulator, ask) => {
      return ask.includes(option) ? accumulator + 1 : accumulator;
    }, 0);
  }

  _getLabel(number, data) {
    let label = '';
    number = closest(this._getValues(data), number);
    for (const [index, value] of data) {
      if (value === number) {
        label = index;
      }
    }
    return label;
  }

  _getValues(data) {
    return data
      .map(item => typeof item[1] === 'number' ? item[1] : null)
      .filter(item => item !== null);
  }
}

window.customElements.define('stat-info', StatInfo);

import {LitElement, html, css} from 'lit-element';

import '@google-web-components/google-chart/google-chart.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class StatInfo extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      data: {type: Object}
    };
  }

  constructor() {
    super();
    this.title = '';
    this.data = [
      ["Aspecto valorado", "Título de Licenciatura"],
      ["Muy Importante", 40],
      ["Importante", 30],
      ["Poco Importante", 4],
      ["Deficiente", 12],
      ["Nada Importante", 22]
    ];
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
          <div class="info">
            <google-chart type="pie" .data="${this.data}" options='{"title": "Título de Licenciatura"}'></google-chart>
            <div class="table">
          <table border="1">
              <thead>
                  <th>Desviación estándar</th>
                  <th>Moda</th>
                  <th>Media</th>
              </thead>
              <tbody>
                <tr>
                  <td>${this._getLabel(standardDeviation(this._getValues()))}</td>
                  <td>${this._getLabel(mode(this._getValues()))}</td>
                  <td>${this._getLabel(average(this._getValues()))}</td>
                </tr>
              </tbody>
            </table>  
            </div>
          </div>
    `;
  }

  _getLabel(number) {
    let label = '';
    number = closest(this._getValues(), number);
    for (const [index, value] of this.data) {
      if (value === number) {
        label = index;
      }
    }
    return label;
  }

  _getValues() {
    return this.data
      .map(item => typeof item[1] === 'number' ? item[1] : null)
      .filter(item => item !== null);
  }
}

window.customElements.define('stat-info', StatInfo);

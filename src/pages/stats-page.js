import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import '@google-web-components/google-chart/google-chart.js';

class StatsPage extends PageDM {
  static get styles() {
    return css`
        .principal-container > *{
          max-width: 600px;
          margin-left:auto;
          margin-right: auto;
        }
      `;
  }

  static get properties() {
    return {
      data: {type: Array}
    };
  }

  constructor() {
    super();
    this.data = [
      ["Aspecto valorado", "Título de Licenciatura"],
      ["Muy Importante", 40],
      ["Importante", 30],
      ["Poco Importante", 4],
      ["Deficiente", 12],
      ["Nada Importante", 22]
    ];
  }

  render() {
    return html`
        <section class="principal-container">
        <h3>SELECCIÓN Y RECLUTAMIENTO DE EGRESADOS</h3>
        <p>1-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?</p>
          <google-chart type="pie" .data="${this.data}" options='{"title": "Título de Licenciatura"}'></google-chart>
          
          <table>
            <thead>
                <th>Desviación estándar</th>
                <th>Moda</th>
                <th>Media</th>
            </thead>
            <tbody>
              <tr>
                <td>${standardDeviation([40, 30, 4, 12, 22])} Deficiente</td>
                <td>${this._getLabel(mode([40, 30, 4, 12, 2]))}</td>
                <td>${average([40, 30, 4, 12, 22])} Nada importante</td>
              </tr>
            </tbody>
          </table>
        </section>
      `;
  }

  _getLabel(number) {
    let label = '';
    for (const [index, value] of this.data) {
      if (value === number) {
        label = index;
      }
    }
    return label;
  }
}

window.customElements.define('stats-page', StatsPage);

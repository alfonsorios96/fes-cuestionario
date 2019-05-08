import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import '@google-web-components/google-chart/google-chart.js';

class StatsPage extends PageDM {
  static get styles() {
    return css`
        .principal-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .info {
          display: flex;
          justify-content: space-evenly;
        }
        
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
      `;
  }

  static get properties() {
    return {
      data: {type: Array},
      admin: {type: Object}
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
    window.addEventListener('storage', ({key, newValue}) => {
      if (key === 'sregistered') {
        const session = JSON.parse(localStorage.getItem('sregistered'));
        this.admin = newValue ? session : null;
      }
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          uid: user.uid
        };
        localStorage.setItem('sregistered', JSON.stringify(user));
        this.admin = user;
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    if (localStorage.getItem('sregistered')) {
      this.admin = JSON.parse(localStorage.getItem('sregistered'));
    } else {
      this.admin = null;
    }
  }

  render() {
    return html`
<custom-style><style is="custom-style">
  .error {
    --paper-toast-background-color: red;
    --paper-toast-color: white;
  }
  .succcess {
    --paper-toast-background-color: green;
    --paper-toast-color: white;
  }
</style></custom-style>
        ${

      this.admin ? html`
        <section class="principal-container">
        <paper-button @click="${this.logout}">Cerrar sesión</paper-button>
        <h3>SELECCIÓN Y RECLUTAMIENTO DE EGRESADOS</h3>
        <p>1-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?</p>
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
        </section>
        ` : html`
          <section class="principal-container">
            <h3>Identifícate</h3>
            <div class="form-control">
              <paper-input id="user" label="Usuario"></paper-input>
              <paper-input id="pass" type="password" label="Contraseña"></paper-input>
              <paper-button @click="${this.login}">Iniciar sesión</paper-button>
            </div>    
        </section>
        `
      }
        <paper-toast id="error" class="fit-bottom error" text=""></paper-toast>
        <paper-toast id="success" class="fit-bottom success" text=""></paper-toast>
      `;
  }

  logout() {
    this.admin = null;
    // Sign out user
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('sregistered');
      })
      .catch(error => {
        // Handle errors
      });
  }

  login() {
    const user = this.shadowRoot.querySelector('#user').value;
    const pass = this.shadowRoot.querySelector('#pass').value;

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase
          .auth()
          .signInWithEmailAndPassword(user, pass)
          .catch(() => {
            const toast = this.shadowRoot.querySelector('#error');
            toast.text = 'El correo electrónico o la contraseña son inválidos';
            toast.open();
          });
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });


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

window.customElements.define('stats-page', StatsPage);

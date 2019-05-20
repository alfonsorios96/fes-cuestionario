import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';
import './stat-info.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';

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
      `;
  }

  static get properties() {
    return {
      data: {type: Object},
      admin: {type: Object},
      translate: {type: Map},
      options: {type: Object}
    };
  }

  constructor() {
    super();
    this.data = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: []
    };

    this.options = {
      1: ["Ninguno", "De 1 a 6", "De 6 a 12", "De 12 a 18", "Más de 18"],
      2: ["Muy Importante", "Importante", "Poco Importante", "Deficiente", "Nada Importante"],
      3: ["Análisis de situaciones", "Toma de decisiones", "Comunicación de ideas", "Actitud, interés,  entusiasmo y buen carácter", "Conocimientos sobre el uso de la tecnología", "Habilidades para la organización, gestión y control de grupos de trabajo ", "Detecta, diagnostica, analiza y responde a las problemáticas en el lugar de trabajo", "Honesto e imparcial", "Leal y confiable", "Respetuoso y diplomático", "Responsable con las actividades designadas en su departamento", "Tolerable a la frustración y las presiones laborales cotidianas"],
      5: ["Muy Importante", "Importante", "Poco Importante", "Deficiente", "Nada Importante"]
    };

    this.translate = new Map();
    this.translate.set('question-1', '1- ¿Cuántos candidatos con Licenciatura en Ingeniería Química han logrado ocupar un puesto en su organización tomando en cuenta departamentos, direcciones etc ?');
    this.translate.set('question-2', '2-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?');
    this.translate.set('question-3', '3- Marque cuáles serían las habilidades y valores que se toma en cuenta para el desempeño de los profesionistas de Ingeniería Química');
    this.translate.set('question-4', '4-	¿Cuáles son las áreas en su organización a las cuales se asignan a los candidatos con Licenciatura en Ingeniería Química?');
    this.translate.set('question-5', '5- De acuerdo a la siguiente lista, ¿Qué tan importante son los siguientes conocimientos para considerar el posicionamiento en su empresa?');
    this.translate.set('question-6', '6-	De acuerdo a las salidas terminales propuestas en la carrera de Ingeniería Química de la Facultad de Estudios  ¿Cuál es su opinión acerca de ellas?');

    window.addEventListener('storage', ({key, newValue}) => {
      if (key === 'sregistered') {
        const session = JSON.parse(localStorage.getItem('sregistered'));
        this.admin = newValue ? session : null;
      }
    });
    firebase.database().ref('/users').on('value', snapshot => {
      const payload = snapshot.val();
      for (const key in payload) {
        const ask = payload[key].ask;
        this.data = {
          1: [...this.data[1], ask[1]],
          2: [...this.data[2], ask[2]],
          3: [...this.data[3], ask[3]],
          4: [...this.data[4], ask[4]],
          5: [...this.data[5], ask[5]],
          6: [...this.data[6], ask[6]]
        };
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
        <stat-info title="${this.translate.get('question-1')}" .source="${this.data[1]}" .options="${this.options[1]}" sections></stat-info>
        <stat-info title="${this.translate.get('question-2')}" .source="${this.data[2]}" .options="${this.options[2]}" sections></stat-info>
        <stat-info title="${this.translate.get('question-3')}" .source="${this.data[3]}" .options="${this.options[3]}"></stat-info>
        <stat-info title="${this.translate.get('question-5')}" .source="${this.data[5]}" .options="${this.options[5]}" sections></stat-info>
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
}

window.customElements.define('stats-page', StatsPage);

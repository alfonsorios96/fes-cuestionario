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
      data: {type: Array},
      admin: {type: Object},
      translate: {type: Map}
    };
  }

  constructor() {
    super();
    this.translate = new Map();
    this.translate.set('question-1', '1-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?');
    this.translate.set('question-2', '2-	Marque cuáles serían las habilidades y valores que se toma en cuenta para el desempeño de los profesionistas de Ingeniería Química');
    this.translate.set('question-3', '3- ¿Cuántos candidatos con Licenciatura en Ingeniería Química han logrado ocupar un puesto en su organización tomando en cuenta departamentos, direcciones etc ?');
    this.translate.set('question-4', '4-	¿Cuáles son las áreas en su organización a las cuales se asignan a los candidatos con Licenciatura en Ingeniería Química?');
    this.translate.set('question-5', '5- De acuerdo a la siguiente lista, ¿Qué tan importante son los siguientes conocimientos para considerar el posicionamiento en su empresa?');
    this.translate.set('question-6', '6-	De acuerdo a las salidas terminales propuestas en la carrera de Ingeniería Química de la Facultad de Estudios  ¿Cuál es su opinión acerca de ellas?');

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
    this.translate.set('test-psico', 'Tests de psicométrico');

    this.translate.set('candidates', 'Rango de candidatos');
    this.translate.set('sm', '5 ´S & 5 ´M.');
    this.translate.set('six-sigma', 'Six Sigma');
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


    window.addEventListener('storage', ({key, newValue}) => {
      if (key === 'sregistered') {
        const session = JSON.parse(localStorage.getItem('sregistered'));
        this.admin = newValue ? session : null;
      }
    });
    firebase.database().ref('/users').on('value', snapshot => {
      const payload = snapshot.val();
      const ask = [];
      for (const key in payload) {
        ask.push(payload[key]);
      }
      this.data = ask;
      console.log(ask.map(item => item.ask));
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
        <stat-info title="1-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?"></stat-info>
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

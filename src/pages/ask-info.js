import {LitElement, html} from 'lit-element';
import {styles} from "./info-styles";

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-button/paper-button.js';

class AskInfo extends LitElement {
  static get properties() {
    return {
      subStep: {type: String}
    };
  }

  constructor() {
    super();
    this.subStep = localStorage.getItem('sub-step') ? localStorage.getItem('sub-step') : '1';
  }

  static get styles() {
    return [
      styles
    ];
  }

  render() {
    return html`
      <h3>SELECCIÓN Y RECLUTAMIENTO DE EGRESADOS</h3>
      
      ${
      this.subStep === '1' ? html`
          <p>1-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?</p>
<div class="form-control">
<paper-dropdown-menu class="md-4" label="Título de licenciatura" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
<paper-dropdown-menu class="md-4" label="Experiencia laboral" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Otros idiomas" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Contactos o conocidos (Recomendación)" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Edad" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Entrevista" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Estudios de posgrado" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Pruebas de conocimiento" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Institución de procedencia" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Disponibilidad de cambio de residencia" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-dropdown-menu class="md-4" label="Tests de psicométrico" no-animations>
    <paper-listbox slot="dropdown-content" selected="0">
      <paper-item>MUY IMPORTANTE</paper-item>
      <paper-item>IMPORTANTE</paper-item>
      <paper-item>POCO IMPORTANTE</paper-item>
      <paper-item>DEFICIENTE</paper-item>
      <paper-item>NADA IMPORTANTE</paper-item>
    </paper-listbox>
</paper-dropdown-menu>

<paper-input class="md-4" label="Otras (mencionarlas)"></paper-input>

<paper-button class="lg-2" @click="${this._backSection}">Regresar</paper-button>
<paper-button class="lg-2" @click="${this._nextQuestion}" data-next="2">Continuar</paper-button>
</div>
        ` : ''
      }
      
      ${
      this.subStep === '2' ? html`
        <p>2-	Marque cuáles serían las habilidades y valores que se toma en cuenta para el desempeño de los profesionistas de Ingeniería Química</p>
      <div class="form-control">
      <div class="md-4">
      <paper-checkbox>Análisis de situaciones</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Toma de decisiones</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Comunicación de ideas</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Actitud, interés,  entusiasmo y buen carácter</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Conocimientos sobre el uso de la tecnología</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Habilidades para la organización, gestión y control de grupos de trabajo </paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Detecta, diagnostica, analiza y responde a las problemáticas en el lugar de trabajo</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Honesto e imparcial</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Leal y confiable</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Respetuoso y diplomático</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Responsable con las actividades designadas en su departamento</paper-checkbox>
</div>
        <div class="md-4">
        <paper-checkbox>Tolerable a la frustración y las presiones laborales cotidianas</paper-checkbox>
</div>
        <paper-input class="lg-1" label="Otras (mencionarlas)"></paper-input>
        
        <paper-button class="lg-3" @click="${this._backSection}">Regresar</paper-button>
        <paper-button class="lg-3" @click="${this._beforeQuestion}" data-prev="1">Pregunta anterior</paper-button>
        <paper-button class="lg-3" @click="${this._nextQuestion}" data-next="3">Continuar</paper-button>
</div>
      ` : ''
      }
      
      ${
      this.subStep === '3' ? html`
         <p>3- ¿Cuántos candidatos con Licenciatura en Ingeniería Química han logrado ocupar un puesto en su organización tomando en cuenta departamentos, direcciones etc ?</p>       
        <div class="form-control">
        <paper-dropdown-menu class="lg-1" label="Seleccione" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Ninguno</paper-item>
            <paper-item>De 1 a 6</paper-item>
            <paper-item>De 6 a 12</paper-item>
            <paper-item>De 12 a 18</paper-item>
            <paper-item>Más de 18</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
        <paper-button class="lg-3" @click="${this._backSection}">Regresar</paper-button>
        <paper-button class="lg-3" @click="${this._beforeQuestion}" data-prev="2">Pregunta anterior</paper-button>
        <paper-button class="lg-3" @click="${this._nextQuestion}" data-next="4">Continuar</paper-button>
</div>
      ` : ''
      }
      
      ${
      this.subStep === '4' ? html`
          <p>4-	¿Cuáles son las áreas en su organización a las cuales se asignan a los candidatos con Licenciatura en Ingeniería Química?</p> 
      <div class="form-control">
      <paper-input class="lg-1" label="Áreas"></paper-input>
      <paper-button class="lg-3" @click="${this._backSection}">Regresar</paper-button>
        <paper-button class="lg-3" @click="${this._beforeQuestion}" data-prev="3">Pregunta anterior</paper-button>
        <paper-button class="lg-3" @click="${this._nextQuestion}" data-next="5">Continuar</paper-button>
</div>
      ` : ''
      }
      
      ${
      this.subStep === '5' ? html`
         <p>5-	 De acuerdo a la siguiente lista, ¿Qué tan importante son los siguientes conocimientos para considerar el posicionamiento en su empresa?</p>
        
        <div class="form-control">
        <paper-dropdown-menu class="lg-3" label="5 ´S & 5 ´M." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Six Sigma." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Supply Chain." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Lean Manufacturing." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Sistemas de Calidad." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Conocimiento de normas para el sector de su empresa " no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Conocimiento de maquinaria de los procesos." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Supervención de personal y evaluaciones de desempeño." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Control de almacén e inventarios" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu> 
       <paper-dropdown-menu class="lg-3" label="Seguridad, higiene laboral y protección civil" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Desarrollo de proyectos" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Energía renovable." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu> 
       <paper-dropdown-menu class="lg-3" label="Reología" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu> 
       <paper-dropdown-menu class="lg-3" label="Trámites ante instituciones de gobierno." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu class="lg-3" label="Protección Ambiental " no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-button class="lg-3" @click="${this._backSection}">Regresar</paper-button>
        <paper-button class="lg-3" @click="${this._beforeQuestion}" data-prev="4">Pregunta anterior</paper-button>
        <paper-button class="lg-3" @click="${this._nextQuestion}" data-next="6">Continuar</paper-button>
</div>
      ` : ''
      }

         ${
      this.subStep === '6' ? html`
        <p>6-	De acuerdo a las salidas terminales propuestas en la carrera de Ingeniería Química de la Facultad de Estudios  ¿Cuál es su opinión acerca de ellas?</p>
      
      <div class="form-control">
      <paper-input class="md-4" label="Fenómenos de Transporte"></paper-input>
      <paper-input class="md-4" label="Energías Renovables"></paper-input>
      <paper-input class="md-4" label="Ingeniería Ambiental "></paper-input>
      <paper-input class="md-4" label="Emprendimiento y Desarrollo de Proyectos"></paper-input>   
      
      <paper-button class="lg-3" @click="${this._backSection}">Regresar</paper-button>
        <paper-button class="lg-3" @click="${this._beforeQuestion}" data-prev="5">Pregunta anterior</paper-button>
        <paper-button class="lg-3" @click="${this._nextQuestion}" data-next="7">Finalizar</paper-button>
</div>
      <p>Sello de la empresa</p>
      <p>Nombre y Firma</p>
      ` : ''
      }
         
         
       ${
        this.subStep === '7' ? html`
          <p>Gracias por participar en esta encuesta.</p>
        ` : ''
      
      }
    `;
  }

  _backSection() {
    localStorage.setItem('sub-step', '1');
    this.subStep = '1';
    this.dispatchEvent(new CustomEvent('change-section', {
      detail: 'personal'
    }));
  }

  _nextQuestion(event) {
    const nextStep = event.currentTarget.dataset.next;
    localStorage.setItem('sub-step', nextStep);
    this.subStep = nextStep;
  }

  _beforeQuestion(event) {
    const prevStep = event.currentTarget.dataset.prev;
    localStorage.setItem('sub-step', prevStep);
    this.subStep = prevStep;
  }
}

window.customElements.define('ask-info', AskInfo);

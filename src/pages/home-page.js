import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class HomePage extends PageDM {
  static get styles() {
    return css`
        .principal-container > *{
        }
      `;
  }

  render() {
    return html`
      <section class="principal-container">
        <blockquote>
        Esta investigación tiene como fin conocer su opinión sobre el desempeño profesional de los Ingenieros Químicos que laboran con ustedes en su institución. Información que nos permitirá seguir formando a estos profesionistas con alto rendimiento y competente de acuerdo a las necesidades actuales. Agradeciendo la veracidad de los datos proporcionados y su valioso interés en el mismo.
        </blockquote>
        <h3>
            DATOS DE LA EMPRESA
        </h3>
        <paper-input label="Nombre de la empresa"></paper-input>
        <paper-input label="Calle y número"></paper-input>
        <paper-input label="Colonia"></paper-input>
        <paper-input label="Delegación/Municipio"></paper-input>
        <paper-input label="Ciudad"></paper-input>
        <paper-input label="Entidad"></paper-input>
        <paper-input label="C.P."></paper-input>
        <paper-input label="Teléfono"></paper-input>
        <paper-input label="Email"></paper-input>
        
        <paper-dropdown-menu label="Régimen jurídico de la empresa o institución" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Público</paper-item>
            <paper-item>Privado</paper-item>
            <paper-item>Otro</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Tamaño de la empresa" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Micro (Menos de 15 empleados)</paper-item>
            <paper-item>Pequeña (Entre 16 y 100 empleados)</paper-item>
            <paper-item>Mediana (Entre 101 y 250 empleados)</paper-item>
            <paper-item>Grande Más de 250 empleados)</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Actividad económica de la empresa" no-animations>
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
      
      <h3>DATOS DE LA PERSONA QUE REALIZA LA ENTREVISTA.</h3>
      
      <paper-input label="Nombre"></paper-input>
      <paper-input label="Puesto"></paper-input>
      <paper-input label="Área"></paper-input>
      <paper-input label="Teléfono"></paper-input>
      <paper-input label="Email"></paper-input>
      
      <p>Sello</p><p>Firma</p>
      
      <blockquote>
      Nota: En caso de que por políticas de la institución no pudieran colocar el sello de la misma, favor de adjuntar una tarjeta de presentación. Esto con el fin de que el organismo acreditador (CACEI) requiera verificar la veracidad de la información.
</blockquote>

<h3>SELECCIÓN Y RECLUTAMIENTO DE EGRESADOS</h3>
<p>1-	¿Cuáles son los principales aspectos valorados en el proceso de selección y reclutamiento de profesionistas universitarios de su empresa o institución?</p>

<paper-dropdown-menu label="Título de licenciatura" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Experiencia laboral" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Otros idiomas" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Contactos o conocidos (Recomendación)" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Edad" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Entrevista" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Estudios de posgrado" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Pruebas de conocimiento" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Institución de procedencia" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Disponibilidad de cambio de residencia" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-dropdown-menu label="Tests de psicométrico" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-input label="Otras (mencionarlas)"></paper-input>
      
        <paper-checkbox>a)	Análisis de situaciones</paper-checkbox>
        <paper-checkbox>b)	Toma de decisiones</paper-checkbox>
        <paper-checkbox>c)	Comunicación de ideas  </paper-checkbox>
        <paper-checkbox>d)	Actitud, interés,  entusiasmo y buen carácter</paper-checkbox>
        <paper-checkbox>e)	Conocimientos sobre el uso de la tecnología</paper-checkbox>
        <paper-checkbox>f)	Habilidades para la organización, gestión y control de grupos de trabajo </paper-checkbox>
        <paper-checkbox>g)	Detecta, diagnostica, analiza y responde a las problemáticas en el lugar de trabajo</paper-checkbox>
        <paper-checkbox>h)	Honesto e imparcial</paper-checkbox>
        <paper-checkbox>i)	Leal y confiable</paper-checkbox>
        <paper-checkbox>j)	Respetuoso y diplomático</paper-checkbox>
        <paper-checkbox>k)	Responsable con las actividades designadas en su departamento</paper-checkbox>
        <paper-checkbox>l)	Tolerable a la frustración y las presiones laborales cotidianas</paper-checkbox>
        
        <paper-input label="Otras (mencionarlas)"></paper-input>
        
        <paper-dropdown-menu label="3- ¿Cuántos candidatos con Licenciatura en Ingeniería Química han logrado ocupar un puesto en su organización tomando en cuenta departamentos, direcciones etc ? " no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>Ninguno</paper-item>
            <paper-item>De 1 a 6</paper-item>
            <paper-item>De 6 a 12</paper-item>
            <paper-item>De 12 a 18</paper-item>
            <paper-item>Más de 18</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>
      
      <paper-input label="4-	¿Cuáles son las áreas en su organización a las cuales se asignan a los candidatos con Licenciatura en Ingeniería Química?"></paper-input>
     
        <p>5-	 De acuerdo a la siguiente lista, ¿Qué tan importante son los siguientes conocimientos para considerar el posicionamiento en su empresa?</p>
        
        <paper-dropdown-menu label="5 ´S & 5 ´M." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Six Sigma." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Supply Chain." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Lean Manufacturing." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Sistemas de Calidad." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Conocimiento de normas para el sector de su empresa " no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Conocimiento de maquinaria de los procesos." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Supervención de personal y evaluaciones de desempeño." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Control de almacén e inventarios" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu> 
       <paper-dropdown-menu label="Seguridad, higiene laboral y protección civil" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Desarrollo de proyectos" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Energía renovable." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu> 
       <paper-dropdown-menu label="Reología" no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu> 
       <paper-dropdown-menu label="Trámites ante instituciones de gobierno." no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>  
      <paper-dropdown-menu label="Protección Ambiental " no-animations>
          <paper-listbox slot="dropdown-content" selected="0">
            <paper-item>MUY IMPORTANTE</paper-item>
            <paper-item>IMPORTANTE</paper-item>
            <paper-item>POCO IMPORTANTE</paper-item>
            <paper-item>DEFICIENTE</paper-item>
            <paper-item>NADA IMPORTANTE</paper-item>
          </paper-listbox>
      </paper-dropdown-menu>    
      
      <p>6-	De acuerdo a las salidas terminales propuestas en la carrera de Ingeniería Química de la Facultad de Estudios  ¿Cuál es su opinión acerca de ellas?</p>
      
      <paper-input label="Fenómenos de Transporte"></paper-input>
      <paper-input label="Energías Renovables"></paper-input>
      <paper-input label="Ingeniería Ambiental "></paper-input>
      <paper-input label="Emprendimiento y Desarrollo de Proyectos"></paper-input>   
      
      <p>



_______________________                       _____________________________________
        Sello de la empresa                                                     Nombre y Firma
</p>
        
      </section>
    `;
  }
}

window.customElements.define('home-page', HomePage);

import {html} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';
import {styles} from './info-styles';

import './company-info.js';
import './personal-info.js';
import './ask-info.js';

class HomePage extends PageDM {
  static get styles() {
    return [
      styles
    ];
  }

  static get properties() {
    return {
      data: {type: Object},
      step: {type: String}
    };
  }

  constructor() {
    super();
    // Get data from localStorage -> User, step and sub-step
    const uid = localStorage.getItem('uid');
    const step = localStorage.getItem('step') ? localStorage.getItem('step') : 'company';

    this.step = step;

    this.data = {
      company: {},
      personal: {},
      ask: {}
    };
  }

  render() {
    return html`
      <section class="principal-container">
        ${
      this.step === 'company' ? html`<company-info .company="${this.data.company}" @change-section="${this._changeSection}"></company-info>` : ''
      }
        ${
      this.step === 'personal' ? html`<personal-info .personal="${this.data.personal}" @change-section="${this._changeSection}"></personal-info>` : ''
      }
        ${
      this.step === 'ask' ? html`<ask-info @change-section="${this._changeSection}"></ask-info>` : ''
      }
      </section>
    `;
  }

  _changeSection(event) {
    localStorage.setItem('step', event.detail);
    this.step = event.detail;
  }
}

window.customElements.define('home-page', HomePage);

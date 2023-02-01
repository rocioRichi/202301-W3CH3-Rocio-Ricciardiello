/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Pet } from '../../models/pet';
import { Component } from '../component/component';
import './header.scss';

export class petCard extends Component {
  constructor(public selector: string, public pet: Pet) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
<li class="card" title="${this.pet.id}">
          <span>${this.pet.isAdopted ? 'Adopted' : 'Not Adopted'}</span>
           <span>Name :${this.pet.namePet} </span>
           <span>Owner: ${this.pet.owner} </span>
           <span>Breed: ${this.pet.breed} </span>
        </li>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}

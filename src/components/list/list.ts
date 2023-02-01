/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './list.scss';

export class List extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
   <section class="pets"><ul class ="petul">

       </ul></section>`;
  }
}

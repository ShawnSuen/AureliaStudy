import { inject } from "aurelia-framework";

@inject(Element)
export class SelectColumnCustomAttribute {
  constructor(element) {
    this.element = element;
    console.log(this.element.id);
  }
}

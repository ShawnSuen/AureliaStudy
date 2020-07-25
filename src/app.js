import { PLATFORM, inject } from "aurelia-framework";
@inject(Element)
export class App {
  // message = "Hello World!";
  // checkedValue = "test";
  // mycheckbox = document.getElementById("input");
  constructor(element) {
    this.element = element;
    this.element.style.position = "float";
    this.styleObject = "";
  }

  configureRouter(config, router) {
    config.title = "test";
    config.map([
      {
        route: ["", "user"],
        name: "user",
        moduleId: PLATFORM.moduleName("./components/user/user"),
        title: "user",
      },
    ]);
    this.router = router;
  }
}

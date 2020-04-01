import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";
import _store from "../store.js";

//Private
function _draw() {
  let template = "";
  let image = store.State.values;

  // @ts-ignore
  template += image.Template;
  document.getElementById("img-display").innerHTML = template;
}

//Public
export default class ValuesController {
  constructor() {
    store.subscribe("values", _draw);
  }
}

import store from "../store.js";
import Value from "../Models/Value.js";

// @ts-ignore
let _api = axios.create({
  baseURL:
    "https://api.nasa.gov/planetary/apod?api_key=y7VPSLCWIRkWHoKN4KxJAkNfmJgfeAZmkbeuZ3v3",
  timeout: 15000
});

class ValuesService {
  getImg() {
    _api
      .get()
      .then(res => {
        console.log(res.data);
        let image = new Value(res.data);
        store.commit("values", image);
      })
      .catch(err => console.error(err));
  }

  constructor() {
    console.log("Value Service is linked");
    this.getImg();
  }
}

const service = new ValuesService();
export default service;

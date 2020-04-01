export default class Value {
  constructor(data) {
    this.title = data.title;
    this.date = data.date;
    this.url = data.url;
    this.explanation = data.explanation;
  }

  get Template() {
    return /*html*/ `
        <h2>${this.title}</h2>
        <h6>${this.date}</h6>
        <img src="${this.url}" alt="APOD">
        <p>${this.explanation}</p>
        `;
  }
}

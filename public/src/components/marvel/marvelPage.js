class MarvelPage extends HTMLElement {
	//El nombre es el nombre del componente, en este caso es un mensaje automático

	constructor() {
		super(); //Tiene todos los atributos (etiquetas de HTML)
		this.attachShadow({ mode: 'open' }); //Abierta porque con ella quiero trabajar
	}

	static get observedAttributes() {
		return ['title', 'image', 'year'];
	}

	connectedCallback() {
		// Montar el componente a ver sí sirve
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		//Recibir las propiedades y trabajar con ellas. Se earga de dalre el nuevo valor a las propiedades que queremos observar
		this[propName] = newValue;
		this.render();
	}

	render() {
		//Vamos a incrustarle a esa sombra el contenido HTML que le voy  mostrar
		this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/marvel/marvelpage.css">"
      <img src=${this.image} alt=""/>
      <h3>${this.title}</h3>
		  <p>${this.year} </p>;
		`;
	}
}

customElements.define('marvel-page', MarvelPage); //Le estamos dando un nombre y así es como debe aparecer en el html
export default MarvelPage;

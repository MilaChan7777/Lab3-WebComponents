import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./src/index.css">
    <section class="main-container">
    <header>
    <div class="header-container">
      <div class="logo-usuario-container">
        <div class="logo-container">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Logo de Marvel">
          </a>
        </div>
        <div class="usuario-container">
          <a href="#">LOG IN</a> / <a href="#"> |   JOIN</a>
        </div>
      </div>
      <div class="navegacion-principal">
        <ul>
          <li><a href="#">Personajes</a></li>
          <li><a href="#">Comics</a></li>
          <li><a href="#">Series</a></li>
          <li><a href="#">Películas</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Juegos</a></li>
          <li><a href="#">Más</a></li>
        </ul>
      </div>
    </div>
  </header>
  <section class="body-container">
    <div class="marvel-stream">
    <p> STREAM THE MARVELS EXCLUSIVELY ON </p>
    <img src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png" alt="disney-logo"/>
    </div>
    <div class="marvel-carrusel">
    <img src="https://media.es.wired.com/photos/65ca8f4c0cdc6b0c83186097/4:3/w_2132,h_1599,c_limit/Deadpool-Wolverine-Trailer-Culture.jpg" alt=""/>
    <div class ="marvel-carrusel-texto">
    <h6> IN THEATERS JULY 26 </h6>
    <h2> DEADPOOL & WOLVERINE TEASER </h2>
    <p> Watch the Deadpool teaser now! </p>
    </div>
    <button> WATCH NOW </button>
    </div>
    <div class="navegacion-secundaria">
    <ul>
    <li><a href="#">Deadpool & Wolverine Teaser</a></li>
    <li><a href="#">This Week's New Comics</a></li>
    <li><a href="#">Year Of The Dragon</a></li>
    <li><a href="#">Echo Now Streaming</a></li>
    <li><a href="#">Marvel's Spider-Man 2 Explained</a></li>
    </div>
    <div class="marvel-unlimmited">
    <img src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/musellpage-og-image.jpg" alt="" width="100%"/>
    </div>

    <section class="marvel-page">
    <marvel-page image="https://cdn.marvel.com/u/prod/marvel/i/mg/8/b0/654bb08b064ab/portrait_uncanny.jpg" title="Carnage (2023) #1" year="2023"></marvel-page>
    <marvel-page image="https://cdn.marvel.com/u/prod/marvel/i/mg/6/20/654bb033d855b/portrait_uncanny.jpg" title="Superior Spider-Man (2023) #1" year="2023"></marvel-page>
    <marvel-page image="https://cdn.marvel.com/u/prod/marvel/i/mg/6/20/654bb06f5c406/portrait_uncanny.jpg" title="DEADPOOL: SEVEN SLAUGHTERS 1 (2023)" year="2023"></marvel-page>
    <marvel-page image="https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/654bb06c2396e/portrait_uncanny.jpg" title="Immortal Thor (2023) #4" year="2023"></marvel-page>
    <marvel-page image="https://cdn.marvel.com/u/prod/marvel/i/mg/3/f0/654bb089894e0/portrait_uncanny.jpg" title="Dark X-Men (2023) #4" year="2023"></marvel-page>
    <marvel-page image="https://cdn.marvel.com/u/prod/marvel/i/mg/9/70/654bb0864c9ad/portrait_uncanny.jpg" title="Children of the Vault (2023) #4" year="2023"></marvel-page>
    </section>
  </section>
</section>
`;
	}
}

customElements.define('app-container', AppContainer);

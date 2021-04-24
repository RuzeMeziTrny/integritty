'use strict';

/* ----------- component for header element ----------- */
const Header = () => {
  const headerElm = document.createElement('header');
  headerElm.className = 'header';
  headerElm.innerHTML = `
    <div class="logo">
      <p class="logo__text">Informace</p>
      <p class="logo__text logo__text--red">o očkování</p>
    </div>
    <nav class="nav">
      <button id="nav-menu" class="nav-menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5 7H3.5C3.22386 7 3 6.77614 3 6.5V5.5C3 5.22386 3.22386 5 3.5 5H20.5C20.7761 5 21 5.22386 21 5.5V6.5C21 6.77614 20.7761 7 20.5 7ZM21 12.5V11.5C21 11.2239 20.7761 11 20.5 11H3.5C3.22386 11 3 11.2239 3 11.5V12.5C3 12.7761 3.22386 13 3.5 13H20.5C20.7761 13 21 12.7761 21 12.5ZM21 17.5V18.5C21 18.7761 20.7761 19 20.5 19H3.5C3.22386 19 3 18.7761 3 18.5V17.5C3 17.2239 3.22386 17 3.5 17H20.5C20.7761 17 21 17.2239 21 17.5Z"
            fill="#3D3D3D"
          />
        </svg>
        <span>Menu</span>
      </button>
      <ul id="nav-bar" class="nav-bar hidden">
        <li class="nav-bar__item">Často kladené otázky</li>
        <li class="nav-bar__item">Plán očkování</li>
      </ul>
    </nav>
  `;

  const showHideNav = () => {
    const navBar = headerElm.querySelector('#nav-bar');
    navBar.classList.toggle('hidden');
  };

  const navMenu = headerElm.querySelector('#nav-menu');
  navMenu.addEventListener('click', showHideNav);

  return headerElm;
};

/* ----------- components for hero section ----------- */
const HeroImg = () => {
  const heroImgElm = document.createElement('div');
  heroImgElm.className = 'hero-img';
  heroImgElm.innerHTML = `
    <h1 class="hero-img__heading">
      Udělejme
      <span class="hero-img__circle">tečku</span>
      za pandemií.
    </h1>
  `;

  return heroImgElm;
};

const Counter = (props) => {
  const counterElm = document.createElement('div');
  counterElm.className = 'counter';
  counterElm.innerHTML = `
    <p class="counter__text">V ČR již očkováno lidí</p>
    <p class="counter__number">${props.number}</p>
    <div>
      <p class="counter__date">${props.date}</p>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.99998 0.333344C3.31808 0.333344 0.333313 3.31811 0.333313 7.00001C0.333313 10.6819 3.31808 13.6667 6.99998 13.6667C10.6819 13.6667 13.6666 10.6819 13.6666 7.00001C13.6666 5.2319 12.9643 3.53621 11.714 2.28596C10.4638 1.03572 8.76809 0.333344 6.99998 0.333344ZM7.66665 9.33334C7.66665 9.51744 7.51741 9.66668 7.33331 9.66668H6.66665C6.48255 9.66668 6.33331 9.51744 6.33331 9.33334V7.33334C6.33331 7.14925 6.48255 7.00001 6.66665 7.00001H7.33331C7.51741 7.00001 7.66665 7.14925 7.66665 7.33334V9.33334ZM7.33331 5.66668C7.51741 5.66668 7.66665 5.51744 7.66665 5.33334V4.66668C7.66665 4.48258 7.51741 4.33334 7.33331 4.33334H6.66665C6.48255 4.33334 6.33331 4.48258 6.33331 4.66668V5.33334C6.33331 5.51744 6.48255 5.66668 6.66665 5.66668H7.33331Z"
          fill="#F7CB46"
        />
      </svg>
    </div>
  `;

  return counterElm;
};

const Hero = (props) => {
  const heroElm = document.createElement('section');
  heroElm.className = 'hero';
  heroElm.append(HeroImg(), Counter(props));

  return heroElm;
};

const counterData = {
  number: 1031033,
  date: '16. 3. 2021' /* upravit formát (datový typ) */,
};

/* ----------- components for info section ----------- */
const InfoCard = (props) => {
  const infoCardElm = document.createElement('div');
  infoCardElm.className = 'card';
  infoCardElm.innerHTML = `
    <img class="card__logo" src="/assets/${props.logo}" alt="logo" />
    <a class="card__name" href="${props.link}" target="_blank">${props.name}</a>
    <p class="card__text">${props.text}</p>
    <a class="card__link" href="${props.link}" target="_blank">
      <span>Přejít na web</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M10.8 6V10.8H1.2V1.2H6V0H0V12H12V6H10.8Z"
            fill="#7C4341"
          />
          <path
            d="M7.20003 0L8.92803 1.728L5.52643 5.1296L6.87043 6.4736L10.272 3.072L12 4.8V0H7.20003Z"
            fill="#7C4341"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  `;

  return infoCardElm;
};

const InfoList = (props) => {
  const infoListElm = document.createElement('div');
  infoListElm.className = 'card-container';

  for (let i = 0; i < props.items.length; i++) {
    infoListElm.append(InfoCard(props.items[i]));
  }

  return infoListElm;
};

const Info = (props) => {
  const infoElm = document.createElement('section');
  infoElm.className = 'info';
  infoElm.innerHTML = `<h2 class="info__heading">Další zdroje ověřených informací o koronaviru a očkování</h2>`;
  infoElm.append(InfoList(props));

  return infoElm;
};

const infoData = [
  {
    logo: 'cp.png',
    name: 'Covid portál',
    text: 'Vládní opatření lidskou řečí.',
    link: 'https://covid.gov.cz/',
  },
  {
    logo: 'mzcr.png',
    name: 'Ministerstvo zdravotnictví',
    text: 'Aktuálně ke koronaviru.',
    link: 'https://koronavirus.mzcr.cz/',
  },
  {
    logo: 'mzcr.png',
    name: 'Centrální registrační systém',
    text: 'Rezervujte si termín očkování.',
    link: 'https://registrace.mzcr.cz/',
  },
];

const mainElm = document.createElement('main');
mainElm.append(Hero(counterData), Info({ items: infoData }));

/* ----------- component for footer element ----------- */
const Footer = () => {
  const footerElm = document.createElement('footer');
  footerElm.className = 'footer';
  footerElm.innerHTML = `
    <p class="footer__copyright">2021 &copy; Ministerstvo zdravotnictví ČR. Všechna práva vyhrazena.</p>
    <a class="footer__link" href="#" target="_blank">Prohlášení o přístupnosti webových stránek</a>
    <a class="footer__link" href="#" target="_blank">Ochrana osobních údajů</a>
  `;

  return footerElm;
};

/* ----------- to append all the DOM elements to the app ----------- */
const appElm = document.querySelector('#app');
appElm.append(Header(), mainElm, Footer());

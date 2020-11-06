import { SocialData } from './common/types';
import { socialLinks } from './config/config';

import '../styles/styles.scss';

// Dynamically Generate Header
const generateHeader = () => {
  const headerText: HTMLElement = document.getElementById('header-text');

  // Header Name
  const h1: HTMLHeadingElement = document.createElement('h1');
  const h1Text: Text = document.createTextNode('Matt Peters');

  h1.appendChild(h1Text);
  h1.className = 'page-header__name';

  headerText.appendChild(h1);

  // Header Title
  const h3Text: Text = document.createTextNode(
    'Software Engineer | New York City'
  );
  const h3: HTMLHeadingElement = document.createElement('h3');
  h3.appendChild(h3Text);
  h3.className = 'page-header__title';

  headerText.appendChild(h3);
};

// Dynamically Generate Links
const generateLinks = (arr: SocialData[]) => {
  const pageLinks: HTMLElement = document.getElementById('render-div');

  const ul: HTMLUListElement = document.createElement('ul');
  ul.id = 'page-link-list';
  ul.className = 'page-links__render--ul';

  for (let i: number = 0; i < arr.length; i += 1) {
    const li: HTMLLIElement = document.createElement('li');
    li.id = `page-link-${arr[i].name}`;
    li.className = 'page-links__render--links';

    const a: HTMLAnchorElement = document.createElement('a');
    a.href = arr[i].url;
    a.target = '_blank';
    a.innerHTML = arr[i].name;

    li.appendChild(a);

    ul.appendChild(li);
  }

  pageLinks.appendChild(ul);
};

// Orders the link array to my specification
const orderArray = (arr: SocialData[]): SocialData[] => {
  const returnedArray = new Array(arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    returnedArray[arr[i].order] = arr[i];
  }

  return returnedArray;
};

// Dynamically Generate footer

const generateFooter = () => {
  const footerText: HTMLElement = document.getElementById('footer-text');

  // Footer Text
  const h4: HTMLHeadingElement = document.createElement('h4');
  const h4Text: Text = document.createTextNode('Made with ❤️ in NYC');

  h4.appendChild(h4Text);

  footerText.appendChild(h4);
};

// fire!
generateHeader();
generateLinks(orderArray(socialLinks));
generateFooter();

export default { orderArray, generateLinks };

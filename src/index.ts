import { SocialData } from './common/types';
import { socialLinks } from './config/config';

import '../styles/styles.scss';

const orderArray = (arr: SocialData[]): SocialData[] => {
  const returnedArray = new Array(arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    returnedArray[arr[i].order] = arr[i];
  }

  return returnedArray;
};

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

// fire!
generateLinks(orderArray(socialLinks));

export default { orderArray, generateLinks };

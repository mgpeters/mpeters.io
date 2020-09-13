import { SocialData } from './../common/types';
import { socialLinks } from '../config/config';

import '../styles/styles.scss';

const orderArray = (arr: SocialData[]): SocialData[] => {
  const returnedArray = new Array(arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    returnedArray[arr[i].order] = arr[i];
  }

  return returnedArray;
};

const orderedArray = orderArray(socialLinks);

const pageLinks = document.getElementsByClassName('page-links__render');

// for (let i = 0; i < social.length; i += 1) {}

console.log(orderedArray);

import { getGreeting } from './greeting.js';

const message = document.querySelector('#message');
if (message) {
  message.textContent = getGreeting();
}

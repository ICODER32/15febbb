import { boxClick } from './box';
import { headerClick } from './header';
// Require registerSW method
import { registerSW } from './register-sw';
import '../css/style.css';
import One from '../images/one.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

document.getElementById('box').src = One;

// Call registerSW method
registerSW();

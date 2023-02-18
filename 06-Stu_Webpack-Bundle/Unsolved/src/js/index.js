import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
// TODO: Import yellow robot image as 'Yellow'
import '../css/style.css';
import Yellow from '../images/yellow-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

// TODO: Set src of #box element to Yellow
const box = document.getElementById('box');
box.src = Yellow;
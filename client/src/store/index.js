import { proxy } from 'valtio';

const state = proxy({
    intro: true, //In the home page or not?
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false, 
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;

//React context that can be utilized anywhere in app
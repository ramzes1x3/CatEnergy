import * as flsFunction from "./modules/finder_webp.js";
import * as logoChan from './modules/logo_changer.js';
import * as burgerT from './modules/mainNav.js';
import * as fucnList from './modules/functions.js';
import * as ydMap from './modules/yandex_map.js';

flsFunction.isWebp();
logoChan.logoChanger();
burgerT.burgerToggle();
fucnList.checkPage();
ymaps.ready(ydMap.init);

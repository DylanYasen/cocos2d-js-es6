import { p, winSize, MenuItemFont, director, Layer, Sprite, MenuItemSprite, Menu } from 'cc';
// import { Layer, Sprite, MenuItemSprite, Menu } from '../cc-es6';
import res from '../resources';

class MenuLayer extends Layer {
  constructor() {
    super();
  }

  init() {
    super.init();

    const centerPos = p(winSize.width / 2, winSize.height / 2);
    const spriteBG = new Sprite(res.bg);
    spriteBG.setPosition(centerPos);
    this.addChild(spriteBG);

    MenuItemFont.setFontSize(60);
    const menuItemPlay = new MenuItemSprite(
   new Sprite(res.start_n_png),
   new Sprite(res.start_s_png),
   this.onPlay, this);
    const menu = new Menu(menuItemPlay);
    menu.setPosition(centerPos);
    this.addChild(menu);
  }

  onPlay() {
    cc.log('==onplay clicked');
		// director.runScene(new PlayScene());
  }
}

export default MenuLayer;

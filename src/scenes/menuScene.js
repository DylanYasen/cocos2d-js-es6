import { Scene } from 'cc';
import MenuLayer from '../layers/menuLayer';

export default class MenuScene extends Scene {
  constructor() {
    super();
  }
  onEnter() {
    super.onEnter();

    const layer = new MenuLayer();
    layer.init();
    this.addChild(layer);
  }
}

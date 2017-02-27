import MenuScene from './scenes/menuScene';
import resources from './resources';

cc.game.onStart = () =>{
    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(resources, () => {
        cc.director.runScene(new MenuScene());
    }, this);
};
cc.game.run();

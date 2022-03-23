class Power {
  constructor() {
    this._shutdown = document.querySelector("#shutdown-button");
    this._restart = document.querySelector("#restart-button");
    this._suspend = document.querySelector("#suspend-button");
    this._init();
  }


  async _do_shutdown() {

    lightdm.shutdown();
  }
  async _do_restart() {

    lightdm.restart();
  }
  async _do_suspend() {

    lightdm.suspend();
  }

  _setShutdown() {
    if (!lightdm.can_shutdown) return;
    this._shutdown.addEventListener("click", () => {
      this._do_shutdown();
    });
    
  }
  _setRestart() {
    if (!lightdm.can_restart) return;
    this._restart.addEventListener("click", () => {
      this._do_restart();
    });
    
  _setSuspend() {
    if (!lightdm.can_suspend) return;
    this._suspend.addEventListener("click", () => {
      this._do_suspend();
    });
    
  }

  }

  _setButtons() {
    this._setShutdown();
    this._setRestart();
    this._setSuspend();

  }

  _init() {
    this._setButtons();
  }
}

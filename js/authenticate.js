class Authenticate {
  constructor() {
    this._form = document.querySelector("#login-form");
    this._username = "";
    this._password = "";
    this._init();
  }

  _setForm() {
    this._form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      var inputs = this._form.querySelectorAll("input");
      var data = getArrayForm(inputs);
      if (!data) return false;
      this._username = data.username;
      this._password = data.password;
      this._respond();
    });
  }

  async _respond() {
    lightdm.cancel_authentication();
    lightdm.authenticate(String(this._username));
    await wait(100);
    lightdm.respond(this._password);
  }

  async _authentication_done() {
    console.log("Session started with", "openbox");
    lightdm.start_session("openbox");
  }

  async _authentication_failed() {
    lightdm.cancel_authentication();
  }

  _setAuthentication_done() {
    window.authentication_done = () => {
      if (lightdm.is_authenticated) {
        this._authentication_done();
      } else {
        this._authentication_failed();
      }
    };
  }

  _init() {
    this._setForm();
    this._setAuthentication_done();
  }
}
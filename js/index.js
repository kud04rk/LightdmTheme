function getArrayForm(inputs) {
    if (!inputs) return false;
    var data = {};
    inputs.forEach((x) => {
      data[x.name] = x.value;
    });
    return data;
  }
  
  async function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  
  async function initGreeter() {
    if (greeter_config.greeter.debug_mode) {
      //debug = new Debug()
    }
  
    lightdm.authentication_complete?.connect(() => authentication_done());
   
    authenticate = new Authenticate();
  
    power = new Power();

  }
  
  if (window._ready_event === undefined) {
    _ready_event = new Event("GreeterReady");
    window.dispatchEvent(_ready_event);
  }
  
  window.addEventListener("GreeterReady", initGreeter);
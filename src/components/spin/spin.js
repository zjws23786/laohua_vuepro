import Vue from 'vue'
import Spin from './span'

Spin.newInstance = () => {

  const Instance = new Vue({

    render(h) {
      let vnode = '';
      vnode = h(Spin, {});
      return vnode;
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  // f();
  const spin = Instance.$children[0];

  return {
    show() {
      document.body.style.overflow = 'hidden';
      spin.visible = true;
    },
    remove(cb) {
      spin.visible = false;
      setTimeout(function () {
        if (document.getElementsByClassName('spin')[0] !== undefined) {
          document.body.removeChild(document.getElementsByClassName('spin')[0]);
        }
        cb();
      }, 500);
    },
    component: spin
  };
};

let spinInstance;

function getSpinInstance (render = undefined) {
  spinInstance = spinInstance || Spin.newInstance({
    render: render
  });

  return spinInstance;
}

function loading (options) {
  const render = ('render' in options) ? options.render : undefined;
  let instance  = getSpinInstance(render);

  instance.show(options);
}

Spin.show = function (props = {}) {
  return loading(props);
};
Spin.hide = function () {
  document.body.style.overflow = '';
  if (!spinInstance) return false;
  const instance = getSpinInstance();

  instance.remove(() => {
    spinInstance = null;
  });
};

export default Spin;


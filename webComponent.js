class AppDrawer extends HTMLElement {

  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
    this.toggleDrawer();
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  constructor() {
    super();

    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.querySelector('#x-foo-from-template');
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);

    this.addEventListener('click', e => {
      console.log(e,'执行点击事件');
      if (this.disabled) {
        return;
      }
      this.toggleDrawer();
    });
  }

  toggleDrawer() {

  }
}

customElements.define('app-drawer', AppDrawer);

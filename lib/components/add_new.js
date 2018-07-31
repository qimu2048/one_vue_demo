Vue.component('add-new', {
  props: ['btnTitle'],
  template: `
    <div>
      <span class="icon icon-add"></span>
      {{btnTitle}}
    </div>
  `
});

new Vue({
  el: '#com-add-new-01'
});

new Vue({
  el: '#com-add-new-02'
});

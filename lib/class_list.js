let classList = new Vue({
  el: '#all-list',
  data: {
    folders: [{
      feild: '毕业设计',
      tasks: [{
        name: 'task 1'
      }, {
        name: 'task 2'
      }]
    }, {
      feild: '社团活动'
    }],
    tasks: [{
      name: 'task 1',
      todos: [{
        title: 'to-do 1',
        time: '2018-07-11',
        content: '橙子的生日',
        done: true
      }]
    }, {
      name: 'task 2',
      todos: [{
        title: 'to-do 2',
        time: '2018-07-12',
        content: '苹果的生日',
        done: false
      }, {
        title: 'to-do 3',
        time: '2018-07-13',
        content: '凤梨的生日',
        done: false
      }]
    }],
    selected_folder: 'all'
  },
  computed: {
    allListLength: function() {
      let tasks = this.tasks;
      let all = [];
      tasks.forEach(t => {
        if(t.todos) {
          all = all.concat(t.todos);
        }
      });
      return all.length;
    },
    isSelected: (key) => {
      return key && key == this.selected_folder;
    }
  },
  methods: {
    setSelected: function(e) {
      console.log('clicked !', e.target, this.selected_folder)
      let text = e.target.innerText;
      this.selected_folder = text;
    }
  }
});

import { Template } from 'meteor/templating';

Template.main.helpers({
  title(){
    return 'QuckTodos';
  },
  todos(){
    const todos = Todos.find();
    return todos;
  }
});

Template.main.events({
  'submit .add-todo'(event){
    event.preventDefault();

    const text = event.target.text.value;
    const time = event.target.time.value;

    Todos.insert({
      text,
      time
    });

    event.target.text.value = '';
    event.target.time.value = '';
  }
});

import { Template } from 'meteor/templating';

const todos = [
  {text:'Pickup kids from school'},
  {text:'Go food shopping'},
  {text:'Meeting with boss'}
];

Template.main.helpers({
  title(){
    return 'QuckTodos';
  },
  todos(){
    return todos;
  }
});

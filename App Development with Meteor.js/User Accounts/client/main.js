import { Template } from 'meteor/templating';
import {Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

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
      time,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });

    event.target.text.value = '';
    event.target.time.value = '';
  }
});

Template.todo.events({
  'click .toggle-checked'(event){
    Todos.update(this._id, {
      $set:{checked: !this.checked}
    });
  },
  'click .delete'(event){
    Todos.remove(this._id);
  }
});

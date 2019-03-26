import React, {Component} from 'react';
import '../css/AppBody.css';
import TaskList from "./TaskList";
import AddTaskBar from "../../presentational/js/AddTaskBar";
import CompleteTaskBar from "../../presentational/js/CompleteTaskBar";

class AppBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      itemCounter: 0,
      addTaskInputValue: "",
      hideCompletedTask: false,
      checkedItemNumber: 0
    };
    
    this.handleAddTaskChange = this.handleAddTaskChange.bind(this);
    this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleCompleteButton = this.handleCompleteButton.bind(this);
    this.handleTaskItemClick = this.handleTaskItemClick.bind(this);
    
  }
  
  handleCheckBoxChange(id) {
    
    this.setState(state => ({

      tasks: state.tasks.map(el => {
        if (el.id === id) {
          el.taskItemChecked = !el.taskItemChecked;
          return el;
        }
        return el;
      }),
      checkedItemNumber: state.tasks.reduce((prev, curr) => {
        if (curr.taskItemChecked) return ++prev;
        return prev;
      }, 0)
    }));
  }

  handleDeleteButtonClick(id) {

    this.deleteFromLocaleStorage(id);

    this.setState(state => ({
      tasks: state.tasks.filter(el => {
        if (el.id === id) {

          //if value deleted check if it is checked or not
          //in order to decide decrease counter doneTasks

          if(el.taskItemChecked) {
            state.checkedItemNumber--;
          }
          return false;
        } else {
          return true;
        }
      }),
      itemCounter: --state.itemCounter
    }));
  }

  handleAddTaskChange(value) {
    this.setState({addTaskInputValue: value});
  }
  
  handleAddTaskSubmit() {
    if (this.state.addTaskInputValue.length) {

      this.setState((state) => (
        {
          tasks: state.tasks.concat([{
            text: state.addTaskInputValue,
            id: new Date().toLocaleTimeString(),
            taskItemChecked: false,
            isBodyHidden: true,
            arrowOpenTaskBody: false,
          }]),
          itemCounter: ++state.itemCounter,
          addTaskInputValue: ""
        }
      ));
    }
  }

  handleTaskItemClick(id) {
     this.setState(state => ({
       tasks: state.tasks.map(el => {
         if (el.id === id) {
           el.isBodyHidden = !el.isBodyHidden;
           el.arrowOpenTaskBody = !el.arrowOpenTaskBody;
           return el;
         } 
         el.isBodyHidden = true;
         el.arrowOpenTaskBody = false;
         return el;
       })
     }));
  }

  handleCompleteButton() {
    this.setState(state => ({
      hideCompletedTask: !state.hideCompletedTask
    }));
    
  }

  deleteFromLocaleStorage(id) {
    let key = id.toString();

    localStorage.removeItem(key);
  }

  extractTaskFromLocaleStorage() {
    let keys = Object.keys(localStorage);
    
    let items = [];

    //loop through locale storage 
    for(let key of keys) {
      let value = localStorage.getItem(key);

      value = JSON.parse(value);

      items.push(value);
    }

    return items;
  }

  componentDidMount() {
    let elems = this.extractTaskFromLocaleStorage();
    this.setState({
      tasks: elems,
      itemCounter: elems.length
    })

  }

  componentDidUpdate() {
    if(this.state.itemCounter > localStorage.length) {
      let elem = this.state.tasks[this.state.itemCounter - 1];

      let key = elem.id.toString();
      elem = JSON.stringify(elem);

      localStorage.setItem(key, elem);
    }
    
  }


  render() {
    return (
      <div className="app-body">
        <TaskList 
          taskItems={this.state.tasks}
          handleDeleteButtonClick={this.handleDeleteButtonClick}
          hideItem={this.state.hideCompletedTask}
          handleCheckBoxChange={this.handleCheckBoxChange}
          handleTaskItemClick={this.handleTaskItemClick} />
        <AddTaskBar 
          handleTaskChange={this.handleAddTaskChange}
          handleTaskSubmit={this.handleAddTaskSubmit}
          typedText={this.state.addTaskInputValue}/>
        <CompleteTaskBar 
          handleCompleteButton={this.handleCompleteButton}
          doneTasksCounter={this.state.checkedItemNumber}/>
      </div>
    );
  }
}

export default AppBody;

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
      addTaskInputValue: "",
      hideCompletedTask: false,
      checkedItemNumber: 0
    };
    
    this.handleAddTaskChange = this.handleAddTaskChange.bind(this);
    this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleCompleteButtonClick = this.handleCompleteButtonClick.bind(this);
    this.handleTaskItemClick = this.handleTaskItemClick.bind(this);
    this.handleTextNoteChange = this.handleTextNoteChange.bind(this);
    
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

  handleTextNoteChange(target, id) {
    
    this.setState(state => ({

      tasks: state.tasks.map(el => {
        if (el.id === id) {
          
          el.textNoteValue = target.value;
          return el;
        }
        return el;
      })
    }))
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
      })
    }));
  }

  handleAddTaskChange(e) {
    this.setState({addTaskInputValue: e.target.value});
  }
  
  handleAddTaskSubmit(e) {
    e.preventDefault();

    if (this.state.addTaskInputValue.length) {

      this.setState((state) => (
        {
          tasks: state.tasks.concat([{
            text: state.addTaskInputValue,
            id: new Date().toLocaleTimeString(),
            taskItemChecked: false,
            isBodyHidden: true,
            arrowOpenTaskBody: false,
            textNoteValue: ""
          }]),
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

  handleCompleteButtonClick() {
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
      tasks: elems
    })

  }

  componentDidUpdate() {
    
    for(let item of this.state.tasks) {
      console.log("here");
      let key = item.id.toString();

      item = JSON.stringify(item);

      localStorage.setItem(key, item);
    }
  }


  render() {
    return (
      <div className="app-body">
        <TaskList 
          taskItems={this.state.tasks}
          onDeleteButtonClick={this.handleDeleteButtonClick}
          hideItem={this.state.hideCompletedTask}
          onCheckBoxChange={this.handleCheckBoxChange}
          onTaskItemClick={this.handleTaskItemClick} 
          onTextNoteChange={this.handleTextNoteChange}/>
        <AddTaskBar 
          onTaskChange={this.handleAddTaskChange}
          onTaskSubmit={this.handleAddTaskSubmit}
          typedText={this.state.addTaskInputValue}/>
        <CompleteTaskBar 
          onClick={this.handleCompleteButtonClick}
          doneTasksCounter={this.state.checkedItemNumber}/>
      </div>
    );
  }
}

export default AppBody;

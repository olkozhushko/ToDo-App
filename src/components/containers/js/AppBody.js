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
    };
    
    this.handleAddTaskChange = this.handleAddTaskChange.bind(this);
    this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }
  
  handleCheckBoxChange(id) {
    
    this.setState(state => ({

      tasks: state.tasks.map(el => {
        if (el.id === id) {
          el.taskItemChecked = !el.taskItemChecked;
          return el;
        }
        console.log(el.id);
        console.log(id);
        return el;
      })
    }));
  }

  handleDeleteButtonClick(id) {
    this.setState(state => ({
      tasks: state.tasks.filter(el => (
        el.id !== id
      ))
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
            taskItemChecked: false
          }]),
          itemCounter: state.itemCounter++,
          addTaskInputValue: ""
        }
      ));
    }
  }
  
  handleCompleteButton() {
    this.setState(state => ({
      hideCompletedTask: !state.hideCompletedTask
    }));
  }

  componentDidMount() {
    console.log(this.state.tasks.length);
  }

  render() {
    return (
      <div className="app-body">
        <AddTaskBar 
          handleTaskChange={this.handleAddTaskChange}
          handleTaskSubmit={this.handleAddTaskSubmit}
          typedText={this.state.addTaskInputValue}/>
        <TaskList 
          taskItems={this.state.tasks}
          handleDeleteButtonClick={this.handleDeleteButtonClick}
          hideItem={this.state.hideCompletedTask}
          handleCheckBoxChange={this.handleCheckBoxChange}
          />
        <CompleteTaskBar 
          handleCompleteButton={this.handleCompleteButton}/>
      </div>
    );
  }
}

export default AppBody;

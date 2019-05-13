import React, { Component } from "react";
import "./AppBody.css";
import TaskList from "../TaskList/TaskList";
import AddTaskBar from "../AddTaskBar/AddTaskBar";
import CompleteTaskBar from "../CompleteTaskBar/CompleteTaskBar";
import ClearStoryBtn from "../ClearStoryBtn/ClearStoryBtn";

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
      })
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
    }));
  }

  handleSelectTabChange(target, id) {
    this.setState(state => ({
      tasks: state.tasks.map(el => {
        if (el.id === id) {
          el.selectValue = target.value;
          return el;
        }
        return el;
      })
    }));
  }

  handleDueDateChange(target, id) {
    this.setState(state => ({
      tasks: state.tasks.map(el => {
        if (el.id === id) {
          el.dueDateValue = target.value;
          return el;
        }
        return el;
      })
    }));
  }

  handleDeleteButtonClick(id) {
    this.deleteFromLocaleStorage(id);

    this.setState(state => ({
      tasks: state.tasks.filter(el => {
        if (el.id === id) {
          //if value deleted check if it is checked or not
          //in order to decide decrease counter doneTasks

          if (el.taskItemChecked) {
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
    this.setState({ addTaskInputValue: e.target.value });
  }

  handleAddTaskSubmit(e) {
    e.preventDefault();

    if (this.state.addTaskInputValue.length) {
      this.setState(state => ({
        tasks: state.tasks.concat([
          {
            text: state.addTaskInputValue,
            id: new Date().toLocaleTimeString(),
            taskItemChecked: false,
            isBodyHidden: true,
            arrowOpenTaskBody: false,
            textNoteValue: "",
            selectValue: "",
            dueDateValue: this.defineInitialDate()
          }
        ]),
        addTaskInputValue: ""
      }));
    }
  }

  handleTaskItemClick(target, id) {
    if (target.tagName === "INPUT") return;

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

  handleClearStoryBtnClick() {
    this.setState({
      tasks: []
    });
    localStorage.clear();
  }

  deleteFromLocaleStorage(id) {
    let key = id.toString();

    localStorage.removeItem(key);
  }

  extractTaskFromLocaleStorage() {
    let keys = Object.keys(localStorage);

    let items = [];

    //loop through locale storage
    for (let key of keys) {
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
    });
  }

  componentDidUpdate() {
    for (let item of this.state.tasks) {
      let key = item.id.toString();

      item = JSON.stringify(item);

      localStorage.setItem(key, item);
    }
  }

  //define initial date to display it on todo item

  defineInitialDate() {
    let date = new Date();

    let todayYear = date.getFullYear();
    let todayMonth =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    let todayDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    let initialDate = `${todayYear}-${todayMonth}-${todayDay}`;

    return initialDate;
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
          onTextNoteChange={this.handleTextNoteChange}
          onSelectTabChange={(target, id) =>
            this.handleSelectTabChange(target, id)
          }
          onDueDateChange={(target, id) => this.handleDueDateChange(target, id)}
        />
        <AddTaskBar
          onTaskChange={this.handleAddTaskChange}
          onTaskSubmit={this.handleAddTaskSubmit}
          typedText={this.state.addTaskInputValue}
        />
        <CompleteTaskBar
          onClick={this.handleCompleteButtonClick}
          tasks={this.state.tasks}
          hideCompletedTask={this.state.hideCompletedTask}
        />
        <ClearStoryBtn onClick={() => this.handleClearStoryBtnClick()} />
      </div>
    );
  }
}

export default AppBody;

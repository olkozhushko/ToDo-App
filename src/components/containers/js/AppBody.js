import React, {Component} from 'react';
import './AppBody.css';

class AppBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      itemCounter: 0,
      addTaskInputValue: ""
    };
    
    this.handleAddTaskChange = this.handleAddTaskChange.bind(this);
    this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this);
  }

  handleAddTaskChange(value) {
    this.setState({addTaskInputValue: value});
  }
  
  handleAddTaskSubmit() {
    if (this.state.addTaskInputValue.length) {
      this.setState((state) => (
        {
          tasks: state.tasks.push({
            text: state.addTaskInputValue,
            id: new Data()
          }),
          itemCounter: state.itemCounter++,
          addTaskInputValue: ""
      }
      ));
    }
  }

  render() {
    return (
      <div className="app-body">
        <AddTaskBar 
          handleTaskChange={this.handleAddTaskChange}
          typedText={this.state.addTaskInputValue}/>
        <TaskList taskItems={this.state.tasks}/>
        <CompleteTaskBar/>
      </div>
    );
  }
}

export default AppBody;

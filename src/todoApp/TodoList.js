import React, { Component } from 'react';
import TodoListTabs from './TodoListTabs';
import TodoListItem from './TodoListItem';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    }
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter(item) {
    this.setState({ filter: item })
  }

  render() {
    const list = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={item.id}
          text={item.text}
          done={item.done}
          index={index}
          removeItem={this.props.deleteClick}
          doneItem={this.props.doneClick}
        />
      );
    })
    return (
      <div>
        {list}
        <TodoListTabs
          items={this.props.items}
          toggleFilter={this.toggleFilter}
          ontoggle={this.toggleFilter}
          filter={this.state.filter}
          clearCompletedItems={this.props.clearCompletedItems}
        />
      </div>

    )
  }
}


export default TodoList;
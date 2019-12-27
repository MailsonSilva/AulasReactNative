import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, SetEditingTodo, updatetodo } from '../actions';

const TodoList = ({ todos, dispathtoggleTodo, dispatchSetEditingTodo }) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id}
                todo={todo}
                onPressTodo={() => dispathtoggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
        />))}
    </View>
);

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
};

export default connect(
    mapStateToProps,
    {
        dispathtoggleTodo: toggleTodo,
        dispatchSetEditingTodo: SetEditingTodo
    }
)(TodoList);
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, dispathtoggleTodo }) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id}
                todo={todo}
                onPressTodo={() => dispathtoggleTodo(todo.id)}
                onLongPressTodo={() => console.log(todo)}
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
    {dispathtoggleTodo: toggleTodo }
)(TodoList);
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo, setTodoText, updatetodo } from '../actions';

class TodoForm extends React.Component{

   onChangeText(text){
       this.props.dispatchsetTodoText(text);
   }

   onPress(){
        const { todo } = this.props;
        if (todo.id) {
            this.props.dispatchUpdateTodo(todo);
        }else{
            const { text } = todo;
            this.props.dispatchAddTodo(text); 
        }
   }

    render() {
        const { text, id } = this.props.todo;
        return(
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=> this.onPress()}
                        title={id ? "Save" : "Add" }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row"
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 9,
        paddingRight: 5
    }
});

//const mapDispatchToProps = dispatch => {
//    return{
//        dispatchAddTodo: text => dispatch(addTodo(text))
//    }
//} ou
const mapStateToProps = state => {
      return {
          todo: state.editingTodo
      }
};

export default connect(
    mapStateToProps,
    {
        dispatchAddTodo: addTodo,
        dispatchsetTodoText: setTodoText,
        dispatchUpdateTodo: updatetodo
    }
)(TodoForm);
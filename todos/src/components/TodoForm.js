import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo, setTodoText } from '../actions';

class TodoForm extends React.Component{

   onChangeText(text){
       this.props.dispatchsetTodoText(text);
   }

   onPress(){
        const { text } = this.props.todo;
       this.props.dispatchAddTodo(text); 
   }

    render() {
        const { text } = this.props.todo;
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
                        title="Add"
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
    dispatchsetTodoText: setTodoText
    }
)(TodoForm);
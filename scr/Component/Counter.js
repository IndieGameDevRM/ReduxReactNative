import React, { Component} from 'react'
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import { connect } from 'react-redux';


class Counter extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {{flexDirection:'row',width:'200',justifyContent:'center'}}>
                    <TouchableOpacity onPress = {()=> this.props.increaseCounter()}>
                        <Text>Increase</Text>
                    </TouchableOpacity>
                    <Text>{this.props.counter}</Text>
                    <TouchableOpacity onPress = {()=> this.props.decreaseCounter()}>
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter = () => dispatch({ type:"INCREASE_COUNTER"}),
        decreaseCounter = () => dispatch({ type:"DECREASE_COUNTER"}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent:'center',
     paddingTop: 40
    }
  });
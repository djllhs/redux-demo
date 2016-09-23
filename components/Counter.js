/**
 * Created by 代佳玲 on 2016/9/23.
 */
import React, { Component, PropTypes } from "react"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if(this.props.value % 2 !== 0){
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }

    render() {
        const {value ,onIncrement, onDecrement } = this.props;
        return (
            <p>
                点击：{value} times {" "}
                <button onClick={onIncrement}>+</button>{" "}
                <button onClick={onDecrement}>-</button>{" "}
                <button onClick={this.incrementIfOdd}>奇数则加</button>{" "}
                <button onClick={this.incrementAsync}>异步增加</button>
            </p>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Counter
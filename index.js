/**
 * Created by 代佳玲 on 2016/9/23.
 */

import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import Counter from "./components/Counter"
import counter from "./reducers"

const store = createStore(counter); // Store => 保存数据的地方,createStore函数生成Store
const root = document.getElementById("root");
const render = () => {
    ReactDOM.render(
        <Counter
            value ={store.getState()}
            onIncrement = {() => store.dispatch({ type: "INCREMENT" })}
            onDecrement = {() => store.dispatch({ type: "DECREMENT" })}
        />,
        root
    )
};
render();
store.subscribe(render)

import React from 'react'
import ReactDOM from 'react-dom'

// 注意样式属性要用驼峰命名法表示，
// 如:backgroundColor而不是background-color,fongSize而不是font-size,
var style = {
    backgroundColor: 'yellow',
    color: 'black',
    fontFamily: 'Monaco'
}

/* Not using JSX */
// const title = React.createElement(
//     'h1',
//     {id:'title', className:'header', style: style},
//     'Hello World'
// )

// ReactDOM.render(
//     title,
//     document.getElementById('root')
// )


/* Use JSX, JSX特殊在允许JS与HTML混写 */

// ReactDOM.render是React的最基本方法,用于将模板转为HTML语言，并插入指定的DOM节点
// ReactDOM.render(template,targetDOM)
// 第一个是创建的模板，多个dom元素外层需使用一个标签进行包裹，如<div>
// 第二个参数是插入该模板的目标位置

// 若要为创建的某个元素增加class属性，不能直接定义class而要用className，因为class是javascript中的保留字。

// 同样可以定义行内样式,将所有的样式包裹在一个对象中,以类似变量的形式给style属性赋值
ReactDOM.render(    
    <div style={style}>
        <h1 id="heading-element">Hello World!</h1>
        <p>We are glad you are here</p>
    </div>,
    document.getElementById('root')
)

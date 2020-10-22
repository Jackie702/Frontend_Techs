/*
 * @Author: your name
 * @Date: 2018-10-20 23:04:39
 * @LastEditTime: 2020-09-21 11:00:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch03/03_03/start/react-is-fun/src/index.js
 */
//用{}引用大package下面的函数， 可以在code中省略大package的引用
import React, { Component } from 'react'
import { render } from 'react-dom'

let frontend = {
	html: 1,
	css: 2,
	javascript: 2,
	react: 2
}


// Component 变量命名一定要首字母大写！！！！！
class FrontendCounter extends Component {
	render(){
		const {html, css, javascript, react} = this.props	//一次性定义各个property
		return(
			<div>
				<h1>
					<font color="purple" fontfamily="Monaco"> 
						This is my study plan for frontend.
					</font>
				</h1>
				<ol>
					<li>HTML: {html}</li>
					<li>CSS: {css}</li>
					<li>JavaScript: {javascript}</li>
					<li>React: {react}</li>
				</ol>
			</div>
		)
	}
}

render(
	<FrontendCounter
		html={frontend.html}
		css={frontend.css}
		javascript={frontend.javascript}
		react={frontend.react}/>,
	document.getElementById('root')
)


// let skiData = {
// 	total: 50,
// 	powder: 20,
// 	backcountry: 10,
// 	goal: 100
// }

// class SkiDayCounter extends Component {
// 	render() {
// 		const {total, powder, backcountry, goal} = this.props
// 		return (
// 			<section>
// 				<div>
// 					<p>Total Days: {total}</p>
// 				</div>
// 				<div>
// 					<p>Powder Days: {powder}</p>
// 				</div>
// 				<div>
// 					<p>Backcountry Days: {backcountry}</p>
// 				</div>
// 				<div>
// 					<p>Goal: {goal}</p>
// 				</div>
// 			</section>
// 		)
// 	}
// }

// render(
// 	<SkiDayCounter 
// 		total={skiData.total}
// 		powder={skiData.powder}
// 		backcountry={skiData.backcountry}
// 		goal={skiData.goal}/>, 
// 	document.getElementById('root')
// )

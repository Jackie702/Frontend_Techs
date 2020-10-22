/*
 * @Author: your name
 * @Date: 2018-10-20 23:40:16
 * @LastEditTime: 2020-09-21 11:15:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch03/03_04/start/react-is-fun/src/index.js
 */
import React, { Component } from 'react'
import { render } from 'react-dom'

let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

// Add custom methods to the Component
// Methods should be outside of the render()
class SkiDayCounter extends Component {
	getPercent = decimal => {
		return decimal * 100 + "%";
	};

	calcGoalProgress = (total, goal) => {
		return this.getPercent(total/goal);
	};
	
	render() {
		const {total, powder, backcountry, goal} = this.props
		return (
			<section>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Powder Days: {powder}</p>
				</div>
				<div>
					<p>Backcountry Days: {backcountry}</p>
				</div>
				<div>
					<p>Goal: {this.calcGoalProgress(total, goal)}</p>
				</div>
			</section>
		)
	}
}

render(
	<SkiDayCounter 
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal}/>, 
	document.getElementById('root')
)

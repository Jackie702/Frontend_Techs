/*
 * @Author: your name
 * @Date: 2018-10-20 23:59:59
 * @LastEditTime: 2020-09-21 12:00:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch03/03_05/start/react-is-fun/src/index.js
 */
import React, { Component } from 'react'
import { render } from 'react-dom'

// creat function component
let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

const getPercent = decimal => {
	return decimal * 100 + "%";
}

const calcGoalProgress = (total, goal) => {
	return getPercent(total/goal);
}

// directly use return(...) here, instead of render(... return(...) ...) in Component class
const SkiDayCounter = ({total, powder, backcountry, goal}) => {
	return(
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
				<p>Goal Progress: {calcGoalProgress(total, goal)}</p>
			</div>
		</section>
	);
}

render(
	<SkiDayCounter 
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal}/>, 
	document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

// Add component properties
// use props to pass variables --> this.props.xxx
// 用class和function都可以创建组件
class Message extends React.Component {
	render() {
		return (
			<div style={{backgroundColor:this.props.bgColor,
						color:this.props.fontColor}}>
				<h1>
					{this.props.msg}
				</h1>
				<span>
					We are making ${this.props.salary} per year. 
				</span>
			</div>
		)
	}
}

// 上面Component中this.props.xxx变量的值在ReactDOM.render()作为arguments传入
ReactDOM.render(
	<Message bgColor="purple" 
			 fontColor="yellow" 
			 msg="What your salary now?"		//字符串变量只用“”
			 salary={200000}		//数字变量需要{}
	/>, 
	document.getElementById('root')
)

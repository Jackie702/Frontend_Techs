/*
 * @Author: your name
 * @Date: 2020-09-21 13:46:52
 * @LastEditTime: 2020-09-21 14:24:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch04/04_01/start/react-is-fun/src/index.js
 */
import React from 'react'
import { render } from 'react-dom'

const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>Title: {title}</h2>
			<p>By: {author}</p>
			<p>Pages: {pages} pages</p>
		</section>
	);
}


//Library是Book的Parent component
const Library = () => {
	return (
	//return 只能返回一个组件，要使用<div>囊括多个组件
	//如果不用<div>而return多个<Book />, 最后只会渲染最后一个<Book />
	//使用{}传递数值型的参数
		<div>
			<Book title="The sun also rises" author="Hemingway" pages={260}/> <br/> 
			<Book title="White teeth" author="Zadie Smith" pages={480}/> <br/>
			<Book title="Cat's cradle" author="Kurt Vonnegut" pages={304}/>		
		</div>
	)
}

render(
	<Library/>, 
	document.getElementById('root')
)

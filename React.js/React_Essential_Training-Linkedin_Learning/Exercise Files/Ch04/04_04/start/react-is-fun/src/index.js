/*
 * @Author: your name
 * @Date: 2018-10-22 21:28:18
 * @LastEditTime: 2020-09-22 09:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch04/04_04/start/react-is-fun/src/index.js
 */
import React from 'react'
import { render } from 'react-dom'

let bookList = [
	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
		</section>
	)
}

/* Using setState */
class Library extends React.Component {
	state = {open: true};

	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	render() {
		const { books } = this.props	//只可在render()内定义
		return (
			<div> 
				<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
				<botton onClick={this.toggleOpenClosed}>Change</botton>
				{books.map(
					(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages}/>
				)}
			</div>
		)
	}
}



render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)

/*
 * @Author: your name
 * @Date: 2018-10-22 21:11:07
 * @LastEditTime: 2020-09-21 15:16:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch04/04_03/start/react-is-fun/src/index.js
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
	);
}

/* Add state varible to component */
class Library extends React.Component {
	constructor(props){
		super(props);
		this.door = {	//use to tag if the library is open
			open: true
		};
	};

	render(){
		const {books} = this.props	//because we only have 1 argument
		return(
			<div>
				<h1>The library is {this.door.open ? "open" : "closed"}</h1>
				{books.map(
					(book, i) => <Book 
									key={i}
									title={book.title}
									author={book.author}
									pages={book.pages}
								/>
				) }
			</div>
		)
	}
}

render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)

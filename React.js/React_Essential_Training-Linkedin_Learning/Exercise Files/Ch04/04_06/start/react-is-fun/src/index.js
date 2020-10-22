/*
 * @Author: your name
 * @Date: 2018-10-22 21:46:58
 * @LastEditTime: 2020-09-22 10:17:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Linkedin_learning-React_essential_training/Exercise Files/Ch04/04_06/start/react-is-fun/src/index.js
 */
import React from 'react'
import { render } from 'react-dom'

let bookList = [
	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookmark}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
			<p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
		</section>
	)
}

// no return() here, use JSX directly
const AreHiring = () => 
	<div>
		We are hiring, please go to www.library.com
	</div>

const NotHiring = () => 
	<div>
		We are not hiring, please check back later.
	</div>

class Library extends React.Component {
	state = { 
		open: true,
		freeBookmark: false,
		hiring: true
	}

	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}
	render() {
		const { books } = this.props
		return (
			//Use components as statement of the conditional rendering, use this.state.hiring as example 
			<div>	
				{this.state.hiring ? <AreHiring /> : <NotHiring />}	
				<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
				<button onClick={this.toggleOpenClosed}>Change</button>
				{books.map(
					(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages}
							freeBookmark={this.state.freeBookmark}/>
				)}
			</div>
		)
	}
}



render(
	<Library books={bookList}/>, 
	document.getElementById('root')
)

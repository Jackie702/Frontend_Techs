import React from 'react'
import { render } from 'react-dom'

/* Display child components */
const bookList = [
	{"title": "The sun also rises", "author": "Hemingway", 	 	"pages":260},
	{"title": "White teeth", 		"author": "Zadie Smith", 	"pages":480},
	{"title": "Cat's cradel", 		"author": "Kurt Vonnegut",  "pages":260}
];

const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
		</section>
	)
}

const Library = ({books}) => {
	return (
		<div>
			{
				books.map(		//use .map() to input an array of elements
					(book, i) => <Book 	key={i}		//each object in an array must have an unique key
										title={book.title}
								  		author={book.author}
								  		pages={book.pages}/>
				)
			}
		</div>
	)
}

render(
	<Library books={bookList}/>,  //input the bookList as argument
	document.getElementById('root')
)

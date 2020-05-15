import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {
	state = {
		results: []
	}

	// Mook book to new shelf
	changeShelf = (e, book) => {
		this.props.changeShelf(e, book)
	}

	// Search call from BooksAPI.js
	handleSearch = (inputEvent) => {
		if (inputEvent.length > 0) {
			BooksAPI.search(inputEvent).then(books => {
				const booksWithShelves = books.map((book) => {
					const myBook = this.props.allTheBooks.filter(myBook => myBook.id === book.id);
					return myBook.length > 0 ? myBook[0] : book;
				})
				this.setState(() => ({
					results: booksWithShelves
				}));
			})
		} else {
			this.setState(() => ({
				results: []
			}));
		}
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value = {this.state.inputEvent}
							onChange={(event) => this.handleSearch(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					{this.state.results.length > 0 ? (
						<ol className="books-grid">
							{this.state.results.map((book) => (
								<li key={book.id}>
									<Book book={book} changeShelf={this.changeShelf} />
								</li>
							))}
						</ol>
					) : (
						<ol className="books-grid"></ol>
					)}
				</div>
			</div>
		)
	}
}

export default Search

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {
	state = {
		query: []
	}

	// Mook book to new shelf
	changeShelf = (e, book) => {
		this.props.changeShelf(e.target.value, book)
	}

	// Search call from BooksAPI.js
	handleSearch = (inputEvent) => {
		if (inputEvent.length > 0) {
			BooksAPI.search(inputEvent).then(res => {
				this.setState(() => ({
					query: res
				}));
				console.log("handleSearch:", res);
			})
		} else {
			this.setState(() => ({
				query: []
			}));
		}
	}

	render() {
		console.log("this.props:", this.props);
		console.log("this.state:", this.state);

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
					{this.state.query.length > 0 ? (
						<ol className="books-grid">
							{this.state.query.map((book) => (
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

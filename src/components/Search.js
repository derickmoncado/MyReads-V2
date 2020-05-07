import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
	state = {
		inputSearchValue: ''
	}

	handleSearch = (inputEvent) => {
		console.log(inputEvent);
		BooksAPI.search(inputEvent).then(res => {
			this.setState(() => ({
				inputSearchValue: res
			}));
			console.log(res);
		})
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
							value = {this.state.inputSearchValue}
							onChange={(inputEvent) => this.handleSearch(inputEvent.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
					</ol>
				</div>
			</div>
		)
	}
}

export default Search

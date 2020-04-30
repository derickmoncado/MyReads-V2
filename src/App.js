import React from         'react'
import * as BooksAPI from './BooksAPI'
import                    './App.css'
import Header from        './components/Header'
import Search from        './components/Search'
import SearchButton from  './components/SearchButton'
import Shelves from       './components/Shelves'

class BooksApp extends React.Component {
	state = {
		showSearchPage: false,
		allTheBooks: []
	}

	// Get book data via API
	componentDidMount() {
		BooksAPI.getAll().then(res => {
			this.setState(() => ({
				allTheBooks: res
			}))
		})
	}

	// Move book to new shelf
	moveBook = (book) => {
		this.setState((currentState) => ({
			allTheBooks: currentState.allTheBooks.filter((b) => {
				return b.shelf !== book.shelf
			})
		}))
	}

	render() {
		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<Search />
				) : (
					<div className="list-books">
						<Header />
						<Shelves
							allTheBooks={this.state.allTheBooks}
							changeShelf={this.moveBook}
						/>
						<SearchButton />
					</div>
				)}
			</div>
		)
	}
}

export default BooksApp

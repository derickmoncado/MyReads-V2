import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import Shelves from './components/Shelves'

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

	render() {
		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<Search />
				) : (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						
						<Shelves allTheBooks={this.state.allTheBooks} />

						<div className="open-search">
							<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default BooksApp

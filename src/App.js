//import classes from '*.module.css'
import React, { Component } from 'react'
import './App.css'
import Book from './Book/Book'

// class Product {
//   image
//   name
//   price
// }
// class Shop {
//   products
// }

// class Book {
//   name
// }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [
        { name: 'Незнайка на луне', price: 199 },
        { name: 'Atlas Shrugged', price: 299 },
        { name: '1984', price: 399 },
      ],
      pageTitle: 'React components',
      showBooks: false,
    }
  }

  // changeTitleHandler = (pageTitle) => {
  //   this.setState({
  //     pageTitle,
  //   })
  // }

  // handleInput = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value,
  //   })
  // }

  toogleBooksHandler = () => {
    this.setState({
      showBooks: !this.state.showBooks,
    })
  }
  onChangeName(name, index) {
    const book = this.state.books[index]
    book.name = name
    const books = [...this.state.books]
    books[index] = book
    this.setState({ books })
  }
  deleteHandler(index) {
    const books = this.state.books.concat()
    books.splice(index, 1)

    this.setState({ books })
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    }
    let books = null
    if (this.state.showBooks) {
      books = this.state.books.map((book, index) => {
        return (
          <Book
            key={index}
            name={book.name}
            price={book.price}
            onChangeName={(event) =>
              this.onChangeName(event.target.value, index)
            }
            onDelete={this.deleteHandler.bind(this, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle} className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toogleBooksHandler}>Toogle Books</button>

        {/* <input type="text" onChange={this.handleInput} /> */}

        {books}
      </div>
    )
  }
}

export default App

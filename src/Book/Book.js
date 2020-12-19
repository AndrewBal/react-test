import './Book.css'
import Radium from 'radium'

const Book = (props) => {
  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }

  const style = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    border: '1px solid #ccc',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0 0 0 .25)',
      cursor: 'pointer',
    },
  }

  return (
    <div className="Book" style={style}>
      <h3>Book name: {props.name}</h3>
      <p>
        Price: <strong>{props.price}</strong> грн
      </p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
      {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>
  )
}

export default Radium(Book)

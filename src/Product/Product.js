export default (props) => (
  <div>
    <h3>Product name: {props.name}</h3>
    <p>
      Price: <strong>{props.price}</strong> грн
    </p>
    {props.children}
  </div>
)

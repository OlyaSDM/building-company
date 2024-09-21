

const Card = ({ title, text, name }) => {
  return (
    <div className="card-container">
      <div className='review-card'>
          <h4>{ title }</h4>
          <p>{ text }</p>
          <h5>{ name }</h5>
        </div>
    </div>
  )
}

export default Card;

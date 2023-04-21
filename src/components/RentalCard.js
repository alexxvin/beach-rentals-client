import { Link, useParams } from "react-router-dom";

function RentalCard(props) {
  // const uploadPicture = () =>

  return (
    <div key={props._id} className="RentalCard card">
      <h2>{props.title}</h2>
      <h3>Description:</h3>
      <p>{props.description}</p>
      <h3>Price:</h3>
      <h3>{props.price}</h3>
      {props.rentalPic && (
        <img id="rentalPic" src={props.rentalPic} alt="rental pic" />
      )}
      {!props.rentalPic && <button>Add rental picture</button>}
      <Link to={`/rentals/${props._id}`}>
        <button>More info</button>
      </Link>
    </div>
  );
}

export default RentalCard;

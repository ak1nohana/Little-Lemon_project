import HeroImage from "../../../assets/picture.jpg";
export default function Heading() {
  return (
    <header>
      <div className="pl-container">
        <h1>About us</h1>
        <img
        className="pl-img"
        src={HeroImage}
        alt="Little Lemon food"
        />
      </div>
    </header>
  );
}
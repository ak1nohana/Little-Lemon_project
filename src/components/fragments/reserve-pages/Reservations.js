import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");


    return (
        <>
            <div className="container">
            <section className="hero-res">
                <article>
                <h1>Table Reservation</h1>
                <h2>At Little Lemon</h2>
                <p>Here on our web-site you can easily reserve a table online! All you need to do is to fill out a simple three-step form!</p>
            </article>
            <article>
                <img 
                src={require("../../../assets/reservation.jpg")} 
                alt="Little Lemon food"
                className="hero-img" />
            </article>
            </section>
            </div>
            <form action="/success">
                <div className="res-form">
                <div className="step">
                    <h3>Step 1. Contact information</h3>
                    <p>Fill out this form so we could contact you if needed. All the required information is marked with a <sup>*</sup> symbol.</p>
                    <div className="step1">
                        <div className="field">
                            <label htmlFor="fName">First Name<sup>*</sup></label> <br></br>
                            <input
                            type="text"
                            id="fName"
                            placeholder="First Name"
                            required
                            minLength={2}
                            maxLength={50}
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                            ></input>
                        </div>
                        <div className="field">
                            <label htmlFor="LName">Last Name<sup>*</sup></label> <br></br>
                            <input
                            type="text"
                            id="lName"
                            placeholder="Last Name"
                            required
                            minLength={2}
                            maxLength={50}
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                            ></input>
                        </div>
                        <div className="field">
                            <label htmlFor="email">E-mail<sup>*</sup></label> <br></br>
                            <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            required
                            minLength={2}
                            maxLength={50}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="field">
                            <label htmlFor="phonenum">Phone Number</label> <br></br>
                            <input
                            type="tel"
                            id="phonenum"
                            placeholder="(xxx)-xxx-xxxx"
                            value={tel}
                            minLength={10}
                            maxLength={25}
                            onChange={(e) => setTel(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="step">
                    <h3>Step 2. Reservation specifications</h3>
                    <p>Specify the details of your reservation in this part of the form.</p>
                    <div className="step2">
                        <div className="field">
                            <label htmlFor="occasion">Occasion<sup>*</sup></label> <br></br>
                            <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                            >
                            <option>Other</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="people">Number of People<sup>*</sup></label> <br></br>
                            <input
                            type="number"
                            id="people"
                            placeholder="Number of People"
                            value={people}
                            required
                            min={1}
                            max={20}
                            onChange={(e) => setPeople(e.target.value)}
                            ></input>
                        </div>
                        <div className="field">
                            <label htmlFor="date">Select Date<sup>*</sup></label> <br></br>
                            <input
                            type="date"
                            id="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            ></input>
                        </div>

                        <div className="field">
                            <label htmlFor="time">Select Time<sup>*</sup></label> <br></br>
                            <select 
                            type="time"
                            id="time"
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}>
                                <option>17:00</option>
                                <option>17:30</option>
                                <option>18:00</option>
                                <option>18:30</option>
                                <option>19:00</option>
                                <option>19:30</option>
                                <option>20:00</option>
                                <option>20:30</option>
                                <option>21:00</option>
                                <option>21:30</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="step">
                    <h3>Step 3. Credit card information</h3>
                    <p>The reservation itself is free, but we will charge you a "no show" fee if you do not arrive or cancel in advance.</p>
                    <div className="step3">
                        <div className="field">
                            <label htmlFor="cardnum">Card Number<sup>*</sup></label><br></br>
                            <input
                            type="number"
                            id="cardnum"
                            placeholder="Card number"
                            required
                            value={cardNum}
                            minLength={16}
                            maxLength={16}
                            onChange={(e) => setCardNum(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="cardname">Name<sup>*</sup></label><br></br>
                            <input
                            type="text"
                            id="cardName"
                            placeholder="Name Surname"
                            required
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="expDate">Expiry date<sup>*</sup></label><br></br>
                            <input
                            type="text"
                            id="expDate"
                            placeholder="mm/yy"
                            required
                            value={expDate}
                            onChange={(e) => setExpDate(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="cvv">CVV<sup>*</sup></label><br></br>
                            <input
                            type="password"
                            id="cvv"
                            required
                            placeholder="123"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* <Link to="/success"> */}
                        <input type="submit" id="reserve" value="Reserve a table"/>
                    {/* </Link> */}
                </div>
                </div>
            </form>
        </>
    )
}
import style from './booking.module.css';
import { useState } from "react";

const BookingPage = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [currentStep, setCurrentStep] = useState(1)
  const [inputDateType, setInputDateType] = useState('text');
  const [inputStartTimeType, setInputStartTimeType] = useState('text');
  const [inputDurationTimeType, setInputDurationTimeType] = useState('text');

  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    numberOfGuests: '',
    location: '',
    durationTime: '',
    occasion: '',
    specialRequest: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cardNumber: '',
    expiryMonth: '',
    cvv: '',
    expiryYear: ''
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <main>
      <div className={style.title}>
        <h1>Reservation</h1>
      </div>
      {!isConfirmed ? (
        <div className={style.border}>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.colums}>
              <div className={style.column}>
                <input
                  type={inputDateType}
                  className={style.small_input}
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={currentDate}
                  onFocus={() => setInputDateType('date')}
                  onBlur={() => setInputDateType('text')}
                  placeholder="Pick a date"
                  required
                />
                <input
                  type={inputStartTimeType}
                  className={style.small_input}
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  onFocus={() => setInputStartTimeType('time')}
                  onBlur={() => setInputStartTimeType('text')}
                  placeholder="Pick start time"
                  required
                />
                <input
                  type="number"
                  className={style.small_input}
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  placeholder="Number of guests"
                  min="1"
                  max="32"
                  required
                />
              </div>
              <div className={style.column}>
                <div className={style.radiobox}>
                  <label className={style.radio}>
                    <input
                      type="radio"
                      name="location"
                      value="Indoor"
                      onChange={handleChange}
                      checked={formData.location === "Indoor"}
                    />
                    <span>Indoor</span>
                  </label>
                  <label className={style.radio}>
                    <input
                      type="radio"
                      name="location"
                      value="Outdoor"
                      onChange={handleChange}
                      checked={formData.location === "Outdoor"}
                    />
                    <span>Outdoor</span>
                  </label>
                </div>
                <input
                  type={inputDurationTimeType}
                  className={style.small_input}
                  name="durationTime"
                  value={formData.durationTime}
                  onChange={handleChange}
                  onFocus={() => setInputDurationTimeType('time')}
                  onBlur={() => setInputDurationTimeType('text')}
                  placeholder="Pick duration time"
                  required
                />
                <select
                  className={style.small_input}
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="birthday">Birthday</option>
                  <option value="occasion">Occasion</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <textarea
              className={style.big_input}
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Add special request"
              rows={4}
              cols={50}
            />

            <div className={style.colums}>
              <div className={style.column}>
                <input
                  type="text"
                  className={style.small_input}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
                <input
                  type="email"
                  className={style.small_input}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className={style.column}>
                <input
                  type="text"
                  className={style.small_input}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
                <input
                  type="tel"
                  className={style.small_input}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            <div className={style.colums}>
              <div className={style.column}>
                <input
                  type="text"
                  className={style.small_input}
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="Card Number"
                  required
                />
                <input
                  type="text"
                  className={style.small_input}
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  placeholder="Month"
                  min={1}
                  max={12}
                  required
                />
              </div>
              <div className={style.column}>
                <input
                  type="text"
                  className={style.small_input}
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  min={0}
                  max={999}
                  required
                />
                <input
                  type="text"
                  className={style.small_input}
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  placeholder="Year"
                  min={2024}
                  max={2050}
                  required
                />
              </div>
            </div>

            <div className={style.navigationButtons}>
              <button
                type="button"
                className={style.confirm}
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={style.successful}>
          <h1>The reservation is successful!</h1>
        </div>
      )}
    </main>
  );
};

export default BookingPage;

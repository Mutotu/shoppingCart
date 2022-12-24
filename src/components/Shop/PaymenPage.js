import { useState } from "react";

const DEFAULT_USER = { name: "", address: "", creditCard: "" };
const PaymentPage = () => {
  const [user, setUser] = useState(DEFAULT_USER);

  const userInforHandler = (e) => {
    setUser((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUser(DEFAULT_USER);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={userInforHandler}
        />
      </div>
      <div>
        <label htmlFor='address'>Address: </label>
        <input
          type='text'
          name='address'
          value={user.address}
          onChange={userInforHandler}
        />
      </div>
      <div>
        <label htmlFor='creditCard'>Credit Card: </label>
        <input
          type='text'
          name='creditCard'
          value={user.creditCard}
          onChange={userInforHandler}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default PaymentPage;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user.slice";

const DEFAULT_USER = { name: "", address: "", creditCard: "", id: "" };
const PaymentPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(DEFAULT_USER);
  const users = useSelector((state) => state.user);

  const userInforHandler = (e) => {
    setUser((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
      id: Math.random() * 11,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(userActions.addUserInfo(user));
    console.log(users);
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

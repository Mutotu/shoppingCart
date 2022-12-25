import { userActions } from "./user.slice";

export const sendUserData = (userData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-54c75-default-rtdb.firebaseio.com/users.json",
        {
          method: "PUT",
          body: JSON.stringify({
            users: userData,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const fetchUserData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-54c75-default-rtdb.firebaseio.com/users.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };
    try {
      const userData = await fetchData();
      dispatch(
        userActions.replaceUsers({
          users: userData || [],
        })
      );
    } catch (error) {
      console.log("Fetch Data error", error);
    }
  };
};

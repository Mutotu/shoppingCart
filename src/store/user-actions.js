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

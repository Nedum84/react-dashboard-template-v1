import axios from "axios";
import React from "react";

const UserContext = React.createContext();

const initialState = {
  name: "Dave",
  height: "Short",
};

export function UserProvider(props) {
  const [user, setUser] = React.useState(initialState);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Loading Dave::::</div>;
  }
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
      {...props}
    />
    // <UserContext.Provider
    //   value={{
    //     user,
    //     setUser,
    //   }}
    // >
    //   {children}
    // </UserContext.Provider>
  );
}

export default function useAuth() {
  const userContext = React.useContext(UserContext);

  if (userContext == null) {
    throw Error("can't use this context outside User Provider!!!:)");
  }
  return userContext;
}

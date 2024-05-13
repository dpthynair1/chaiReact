import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="flex justify-center items-center p-4">
        <div className="text-center m-4 bg-yellow-700 text-white text-3xl p-4 flex flex-col items-center w-6/12 ">
          <h1>React with chai</h1>
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;

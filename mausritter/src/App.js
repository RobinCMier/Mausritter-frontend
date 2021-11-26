//tool imports
import { Routes, Route } from "react-router";
import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//component imports
import background from "./assets/images/background.jpg";
import Homepage from "./pages/Homepage";
import Charactersheet from "./pages/Charactersheet";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateCharacter from "./pages/Createcharacter";
//actions and selectors
import { selectToken } from "./store/user/selectors";
import { logOut } from "./store/user/actions";

//function
function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  /*
  there needs to be a useEffect that upon rerendering checks for the token that should 
  be in local storage, then use that token to fetch data of user from store. 
  Problem: upon refreshing, the store wipes. 
  */

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        {token ? (
          <button
            style={{ backgroundColor: "#b1f59d", fontSize: 20 }}
            onClick={() => dispatch(logOut())}
          >
            Log out
          </button>
        ) : (
          <></>
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sheet/:name" element={<Charactersheet />} />
          <Route path="/sheet/create" element={<CreateCharacter />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

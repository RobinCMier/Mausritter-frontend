//tool imports
import { Routes, Route } from "react-router";
import React, { useEffect } from "react";
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
import { bootstrapLogin } from "./store/user/actions";

//function
function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [dispatch]);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
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
        ) : null}
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

//tool imports
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

//component and action imports
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

/*TO DO
V- create store for user
V- scavenge heartapp for parts
V- make a THUNK to post request a login to the right endpoint
V- make form with email and password
V- dispatch info to store user slice
- if login success, redirect to homepage
*/
//default function
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token]); //add navigation here?
  // useEffect(() => {
  //   if (token !== null) {
  //     history.push("/");
  //   }
  // }, [token, history]);

  function submitForm(event) {
    console.log("hi from submitForm");
    event.preventDefault();
    dispatch(login(email, password));
    console.log("token is ", token);
  }

  return (
    <div>
      <div>
        <form onSubmit={submitForm}>
          <p>
            <label>
              Email:
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </label>
          </p>
          <p>
            <label>
              Password:
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              ></input>
            </label>
          </p>
          <p>
            <button type="submit">Log in</button>
          </p>
        </form>
        <Link to="/signup">
          {" "}
          <button>Click here to sign up</button>{" "}
        </Link>
        <Link to="/">
          {" "}
          <button>TEMP SHORTCUT TO HOMEPAGE</button>{" "}
        </Link>
      </div>
    </div>
  );
}

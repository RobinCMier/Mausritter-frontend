//tool imports
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

//component and action imports
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

//default function
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/home");
    }
  }, [token]);
  //either automatically put token in local storage / take it from storage
  //or refer back to login

  function submitForm(event) {
    console.log("hi from submitForm");
    event.preventDefault();
    dispatch(signUp(name, email, password));
    console.log("token is ", token);
  }

  return (
    <main className="wrapper">
      <div>
        <form onSubmit={submitForm}>
          <p>
            <label>
              Name:
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </label>
          </p>
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
            <button className="regButton" type="submit">
              Sign up!
            </button>
          </p>
        </form>
        <Link to="/">
          {" "}
          <button className="regButton">Go back to login page</button>{" "}
        </Link>
      </div>
    </main>
  );
}

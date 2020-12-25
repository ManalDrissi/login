import { useState } from "react";
import data from "./Data";

const cssBtn = {
  backgroundColor: "grey",
  color: "white",
  borderRadius: "5px 0px",
};
let index = -1;
const Home = () => {
  const [err, setErr] = useState(true);
  const [userErr, setUserErr] = useState(true);
  const [passwordErr, setPasswordErr] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({
    uuid: "",
    first: "",
    last: "",
    img: "",
  });
  const [logged, setLogged] = useState(false);

  const logHandler = () => {
    let val = false;
    data.results.map((e) => {
      if (e.login.username === user && e.login.password === password)
        return (val = true);
    });
    return val;
  };
  const authoHandler = () => {
    let val = false;
    data.results.map((e) => {
      if (e.login.username === user) return (val = true);
    });
    return val;
  };
  const authoPassHandler = () => {
    let val = false;
    data.results.map((e) => {
      if (e.login.password === password) return (val = true);
    });
    return val;
  };
  const indexHandler = () => {
    data.results.map((e) => {
      if (e.login.username === user) {
        return (index = data.results.indexOf(e));
      }
    });
    if (index>-1)
      setProfile({
        uuid: data.results[index].login.uuid,
        first: data.results[index].name.first,
        last: data.results[index].name.last,
        img: data.results[index].picture.medium,
      });
  };
  const loginHandler = () => {
    setUser("");
    setPassword("");
    setLogged(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    indexHandler();
    indexHandler();
    setLogged(logHandler());
    setUserErr(authoHandler());
    setPasswordErr(authoPassHandler());

    if (password || user) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      {console.log(profile)}

      <form onSubmit={submitHandler} hidden={logged}>
        <fieldset>
          <legend>
            <b>
              <i> Login</i>
            </b>
          </legend>
          <label htmlFor="username">
            <i>User name</i>
          </label>
          <br />
          <input
            type="text"
            name="username"
            maxLength="20"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <br />
          <label htmlFor="password">
            <i>Password</i>
          </label>
          <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <input
            // disabled={!user || !password}
            style={cssBtn}
            type="submit"
            value="log in"
          />
        </fieldset>
      </form>

      <p hidden={err} style={{ color: "red" }}>
        Please enter username and password
      </p>
      <p hidden={!err ? true : userErr} style={{ color: "red" }}>
        Wrong username
      </p>
      <p hidden={!err ? true : passwordErr} style={{ color: "red" }}>
        Wrong password
      </p>
      <form onSubmit={(e) => e.preventDefault()} hidden={!logged}>
        <div key={profile.uuid}>
          <img src={profile.img} alt="user.img" />
          <p>
            {profile.first} {profile.last}
          </p>
        </div>
        <input type="button" value="sign out" onClick={loginHandler} />
      </form>
    </div>
  );
};

export default Home;

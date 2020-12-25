import data from "./Data";
import "../App.css";

const css = {
  backgroundColor: "white",
  margin: "0px 10% 50px",
  boxShadow: "0px 1px 8px grey",
  display: "inline-block",
  borderRadius: "40px 0px",
  padding: "10px 0px",
  width: "500px",
};
const img = {
  borderRadius: "10px 0px",
};

const Profile = () => {
  return (
    <div style={{ display: "block" }}>
      <h2>Users</h2>

      {data.results.map((e) => {
        return (
          <div key={e.login.uuid} style={css}>
            <img style={img} src={e.picture.medium} alt="user.img" />
            <p>
              {e.name.first} {e.name.last}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;

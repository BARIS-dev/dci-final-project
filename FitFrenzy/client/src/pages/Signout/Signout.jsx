import { useNavigate, Link } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <>
      <h2>Du wurdest erfolgreich ausgeloggt.</h2>
      <h4>Besuche uns bald wieder!</h4>
      <p>
        Du wirst in wenigen Sekunden weitergeleitet, falls nicht, klicke{" "}
        <Link to={"/"}>hier</Link>.
      </p>
    </>
  );
};

export default Signout;

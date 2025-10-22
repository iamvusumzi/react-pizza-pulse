import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const className = "text-sm text-blue-500 hover:text-blue-600";

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <div>
      <Link to={to} className={className}>
        {children}
      </Link>
    </div>
  );
}

export default LinkButton;

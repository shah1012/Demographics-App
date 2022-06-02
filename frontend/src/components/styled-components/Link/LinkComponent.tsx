import { Link } from "react-router-dom";

export const LinkToTHisPage = (path: any, name: string) => {
  return (
    <Link
      to={path}
      style={{
        fontSize: "calc(0.75em + 0.5vmin)",
        fontWeight: 200,
        textDecoration: "none",
        color: "#cae4f1",
      }}
    >
      {name}
    </Link>
  );
};

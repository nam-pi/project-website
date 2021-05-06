import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { NampiLogo } from "../NampiLogo";

export const Navbar = () => (
  <nav className="relative flex items-center justify-between flex-wrap  bg-gray-400 p-3 text-white">
    <div className="space-x-3 text-white flex items-center">
      <Link to="/" className="font-semibold text-2xl">
        <NampiLogo className="h-10 bg-white p-1 rounded" />
      </Link>
      <Link to="/persons">
        <FormattedMessage
          description="The persons link label"
          defaultMessage="Persons"
        />
      </Link>
    </div>
  </nav>
);

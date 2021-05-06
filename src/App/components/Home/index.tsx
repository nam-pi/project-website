import { FormattedMessage } from "react-intl";
import { Heading } from "../Heading";
import { NampiLogo } from "../NampiLogo";
import { Paragraph } from "../Paragraph";

export const Home = () => (
  <div>
    <Heading>
      <FormattedMessage
        description="The home page heading"
        defaultMessage="Home"
      />
    </Heading>
    <div className="flex flex-col md:flex-row md:justify-between">
      <Paragraph className="pb-4 md:pb-0">
        <FormattedMessage
          description="The home page content"
          defaultMessage="Welcome to NAMPI"
        />
      </Paragraph>
      <NampiLogo />
    </div>
  </div>
);

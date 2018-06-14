import * as React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import * as H from "history";

export interface LinkButtonProps extends ButtonProps {
  to: H.LocationDescriptor;
}

const ButtonWithLink: any = Button;

const LinkButton: React.SFC<LinkButtonProps> = ({ to, ...others }) => (
  <ButtonWithLink
    component={Link}
    to={to}
    {...others}
  />
);

export default LinkButton;

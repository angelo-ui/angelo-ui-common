import * as React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import { Color, TypographyVariant } from "../common";

export type TitleBarClassKey = "title";

const styles: StyleRules<TitleBarClassKey> = {
  title: {
    flex: 1,
    WebkitUserSelect: "none",
  },
};

export interface TitleBarProps {
  color?: Color;
  variant?: TypographyVariant;
}

const TitleBar: React.SFC<TitleBarProps & WithStyles<TitleBarClassKey>> = ({ classes, children, color = "inherit", variant = "title", ...others }) => (
  <Typography className={classes.title} color={color} variant={variant} {...others}>{children}</Typography>
);

export default withStyles(styles)(TitleBar);

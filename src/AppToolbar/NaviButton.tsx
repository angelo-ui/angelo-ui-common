import * as React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";

export type NaviButtonClassKey = "button";

const styles: StyleRules<NaviButtonClassKey> = {
  button: {
    marginLeft: -12,
    marginRight: 12,
    WebkitAppRegion: "no-drag",
  },
};

export interface NaviButtonBarProps {
  tooltip?: string;
}

const NaviButton: React.SFC<NaviButtonBarProps & WithStyles<NaviButtonClassKey>> = ({ classes, children, tooltip, ...others }) => (
  <Tooltip title={tooltip}>
    <IconButton className={classes.button} {...others}>
      {children}
    </IconButton>
  </Tooltip>
);

export default withStyles(styles)(NaviButton);

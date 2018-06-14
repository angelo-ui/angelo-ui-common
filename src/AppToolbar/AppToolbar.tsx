import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import { Color } from "../common";

const ComponentHeight = 54;

export type AppToolbarClassKey = "wrapper" | "appbar" | "toolbar";

const styles: StyleRules<AppToolbarClassKey> = {
  wrapper: {
    minHeight: ComponentHeight,
  },
  appbar: {
    minHeight: ComponentHeight,
    boxShadow: "none",
  },
  toolbar: {
    minHeight: ComponentHeight,
    WebkitAppRegion: "drag",
    WebkitUserSelect: "none",
  },
};

export interface AppToolbarProps {
  color?: Color;
  position?: "fixed" | "absolute" | "sticky" | "static";
}

const AppToolbar: React.SFC<AppToolbarProps & WithStyles<AppToolbarClassKey>> = ({ classes, children, color = "primary", position = "fixed" }) => (
  <div className={classes.wrapper}>
    <AppBar className={classes.appbar} color={color} position={position}>
      <Toolbar className={classes.toolbar}>
        {children}
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(AppToolbar);

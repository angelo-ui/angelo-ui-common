import * as React from "react";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";

export type PageToolbarClassKey = "wrapper";

const styles: StyleRules<PageToolbarClassKey> = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export interface PageToolbarProps {
  backgroundColor?: string;
}

const PageToolbar: React.SFC<PageToolbarProps & WithStyles<PageToolbarClassKey>> = ({ classes, backgroundColor = "#fff", children, ...others }) => (
  <div className={classes.wrapper} style={{ backgroundColor }} {...others}>
    {children}
  </div>
);
export default withStyles(styles)(PageToolbar);

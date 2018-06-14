import * as React from "react";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";

export type FullSpaceClassKey = "wrapper";

const styles: StyleRules<FullSpaceClassKey> = {
  wrapper: {
    width: "100%",
    height: "100%",
  },
};

export interface FullSpaceProps { }

const FullSpace: React.SFC<FullSpaceProps & WithStyles<FullSpaceClassKey>> = ({ classes, children, ...others }) => (
  <div className={classes.wrapper} {...others}>
    {children}
  </div>
);

export default withStyles(styles)(FullSpace);

import * as React from "react";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";

export type ContainerClassKey = "wrapper";

const styles: StyleRules<ContainerClassKey> = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
};

export interface ContainerProps { }

const Container: React.SFC<ContainerProps & WithStyles<ContainerClassKey>> = ({ classes, children, ...others }) => (
  <div className={classes.wrapper} {...others}>
    {children}
  </div>
);

export default withStyles(styles)(Container);

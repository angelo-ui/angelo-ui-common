import * as React from "react";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";

export type ActionsContainerClassKey = "wrapper";

const styles: StyleRules<ActionsContainerClassKey> = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderColor: "#e6e6e6",
    borderStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
};

export interface ActionsContainerProps {
  top: boolean;
  bottom: boolean;
  backgroundColor?: string;
  padding?: string | number;
}

const ActionsContainer: React.SFC<ActionsContainerProps & WithStyles<ActionsContainerClassKey>> = ({ classes, top, bottom, backgroundColor = "#fff", padding = 0, children, ...others }) => (
  <div className={classes.wrapper} style={{ borderTopWidth: top ? 1 : 0, borderBottomWidth: bottom ? 1 : 0, backgroundColor, padding }} {...others}>
    {children}
  </div>
);

export default withStyles(styles)(ActionsContainer);

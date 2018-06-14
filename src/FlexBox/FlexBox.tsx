import * as React from "react";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";

export type FlexBoxClassKey = "wrapper";

const styles: StyleRules<FlexBoxClassKey> = {
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export interface FlexBoxProps {
  flex?: number;
}

const FlexBox: React.SFC<FlexBoxProps & WithStyles<FlexBoxClassKey>> = ({ classes, flex = 1, children, ...others }) => (
  <div className={classes.wrapper} style={{ flex }} {...others}>
    {children}
  </div>
);

export default withStyles(styles)(FlexBox);

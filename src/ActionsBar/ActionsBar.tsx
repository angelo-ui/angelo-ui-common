import * as React from "react";
import Button from "@material-ui/core/Button";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { mapActions, ActionsComponentBaseProps } from "../common";

export type ActionsBarClassKey = "wrapper" | "button";

const styles = {
  wrapper: {
    flex: 1,
    padding: 0,
  },
  button: {
    "&:first-child": {
      borderLeft: "1px solid #e6e6e6",
    },
    borderRight: "1px solid #e6e6e6",
    borderRadius: 0,
    boxShadow: "none",
  },
};

export interface ActionsBarProps extends ActionsComponentBaseProps {
  align: string;
}

const ActionsBar: React.SFC<ActionsBarProps & WithStyles<ActionsBarClassKey>> = ({ classes, actions, activeAction, align = "auto", onActivate, onActivated, onMapActions }) => {
  const _actions = mapActions(actions, onMapActions);
  return (
    <div className={classes.wrapper} style={{ textAlign: align } as React.CSSProperties}>
      {_actions.map((each, index) => (
        <Button
          key={index}
          className={classes.button}
          color="primary"
          variant={activeAction === each.value ? "raised" : "flat"}
          onClick={() => {
            if (activeAction !== each.value) {
              if (onActivate) { onActivate(each.value); }
              if (onActivated) { onActivated(each.value); }
            }
          }}
        >
          {each.text}
        </Button>
      ))}
    </div>
  );
};


export default withStyles(styles)(ActionsBar);

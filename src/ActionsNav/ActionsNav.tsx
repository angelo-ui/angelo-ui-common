import * as React from "react";
import Button from "@material-ui/core/Button";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { mapActions, ActionsComponentBaseProps } from "../common";

export type ActionsNavClassKey = "wrapper" | "button";

const styles = {
  wrapper: {
    flex: 1,
    padding: 0,
    color: "#555",
  },
  button: {
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 0,
    boxShadow: "none",
  },
};

export interface ActionsNavProps extends ActionsComponentBaseProps {
  align: string;
}

const ActionsNav: React.SFC<ActionsNavProps & WithStyles<ActionsNavClassKey>> = ({ classes, actions, activeAction, align = "auto", onActivate, onActivated, onMapActions }) => {
  const _actions = mapActions(actions, onMapActions);
  return (
    <div className={classes.wrapper} style={{ textAlign: align } as React.CSSProperties}>
      {_actions.map((each, index) => {
        const isActive = activeAction === each.value;
        return (
          <Button
            key={index}
            className={classes.button}
            color={isActive ? "primary" : "inherit"}
            variant="flat"
            style={{ borderBottomWidth: isActive ? 1 : 0 }}
            onClick={() => {
              if (!isActive) {
                if (onActivate) { onActivate(each.value); }
                if (onActivated) { onActivated(each.value); }
              }
            }}
          >
            {each.text}
          </Button>
        );
      })}
    </div>
  );
};


export default withStyles(styles)(ActionsNav);

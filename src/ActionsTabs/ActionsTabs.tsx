import * as React from "react";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { mapActions, ActionsComponentBaseProps } from "../common";

export interface ActionsTabsProps extends ActionsComponentBaseProps, TabsProps { }

const ActionsTabs: React.SFC<ActionsTabsProps> = ({ actions, activeAction, onActivate, onActivated, onMapActions, ...others }) => (
  <Tabs
    value={activeAction}
    indicatorColor="primary"
    textColor="primary"
    onChange={(event, action) => {
      if (activeAction !== action) {
        if (onActivate) { onActivate(action); }
        if (onActivated) { onActivated(action); }
      }
    }}
    {...others}
  >
    {
      mapActions(actions, onMapActions).map((each, index) => (
        <Tab
          key={index}
          label={each.text}
          value={each.value}
        />
      ))
    }
  </Tabs >
);


export default ActionsTabs;

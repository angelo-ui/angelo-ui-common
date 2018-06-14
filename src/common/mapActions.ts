import { Action } from "../common/Action";

export const mapActions = (actions: string[], mapActionsFunc?: (actions: string[]) => Action[]): Action[] => (
  mapActionsFunc ? mapActionsFunc(actions) : actions.map(each => ({ text: each, value: each.toUpperCase() }))
);

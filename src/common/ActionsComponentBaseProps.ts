import { Action } from "./Action";

export interface ActionsComponentBaseProps {
  actions: string[];
  activeAction: string;
  onMapActions?: (values: string[]) => Action[];
  onActivate?: (value: string) => void;
  onActivated?: (value: string) => void;
}

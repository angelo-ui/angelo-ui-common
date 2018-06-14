import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import withStyles, { StyleRulesCallback, WithStyles } from "@material-ui/core/styles/withStyles";
import { Magnify } from "mdi-material-ui";

export type SearchBoxClassKey = "wrapper" | "input";

const styles: StyleRulesCallback<SearchBoxClassKey> = theme => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    paddingLeft: 5,
  },
});

export interface SearchBoxProps {
  placeholder?: string;
  tooltip?: string;
  fullWidth?: boolean;
}

const SearchBox: React.SFC<SearchBoxProps & WithStyles<SearchBoxClassKey>> = ({ classes, fullWidth = true, placeholder, tooltip = "Search..", ...others }) => (
  <FormControl fullWidth={fullWidth}>
    <Input
      className={classes.input}
      placeholder={placeholder || "Search.."}
      endAdornment={
        <InputAdornment position="end">
          <Tooltip title={tooltip}>
            <IconButton {...others}>
              <Magnify />
            </IconButton>
          </Tooltip>
        </InputAdornment>
      }
    />
  </FormControl>
);

export default withStyles(styles)(SearchBox);

import * as React from "react";
import withStyles, { StyleRules, WithStyles } from "@material-ui/core/styles/withStyles";

const OffsetTop = 54;

export type PageActionsClassKey = "wrapper" | "stickableComponent" | "sticking";

const styles: StyleRules<PageActionsClassKey> = {
  wrapper: {
    flex: 1,
  },
  stickableComponent: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "#fff",
  },
  sticking: {
    position: "fixed",
    top: OffsetTop,
    zIndex: 1000,
  },
};

const wrapPageActions = <P extends object = any>(PageActions: React.ComponentType<P>) => {
  const events = [
    "resize",
    "scroll",
    "touchstart",
    "touchmove",
    "touchend",
    "pageshow",
    "load",
  ];

  type PageActionsWrapperProps = WithStyles<PageActionsClassKey>;

  class PageActionsWrapper extends React.Component<PageActionsWrapperProps> {
    _StickContainer: HTMLDivElement | null;

    constructor(props: PageActionsWrapperProps) {
      super(props);
    }

    componentWillUpdate() {
      return false;
    }

    componentDidMount() {
      events.forEach(event => window.addEventListener(event, () => this.handleStickable()));
    }

    componentWillUnmount() {
      events.forEach(event => window.removeEventListener(event, () => this.handleStickable()));
    }

    handleStickable() {
      if (this._StickContainer) {
        if (window.pageYOffset > OffsetTop) {
          if (!this._StickContainer.classList.contains(this.props.classes.sticking)) {
            this._StickContainer.classList.add(this.props.classes.sticking);
          }
        } else {
          if (this._StickContainer.classList.contains(this.props.classes.sticking)) {
            this._StickContainer.classList.remove(this.props.classes.sticking);
          }
        }
      }
    }

    render() {
      const { classes, ...others } = this.props;

      return (
        <div className={classes.wrapper}>
          <div ref={dom => this._StickContainer = dom} className={classes.stickableComponent}>
            <PageActions {...others} />
          </div>
        </div>
      );
    }
  }

  return withStyles(styles)(PageActionsWrapper);
};

export default wrapPageActions;

import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { Button as XButton } from "xrc"
import { ButtonProps as XButtonProps } from "xrc/components/button/button.interface"

type Alignment = "flex-start" | "center" | "flex-end"

interface ButtonProps extends XButtonProps {
  width: Number
  height: Number
  alignX: Alignment
  alignY: Alignment
  text: String
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    width: 200,
    height: 48,
    alignX: "center",
    alignY: "center",
    appearance: "primary",
    size: "large",
    text: "Button"
  }

  static propertyControls: PropertyControls<ButtonProps> = {
    text: {
      type: ControlType.String,
      title: "Text"
    },
    size: {
      type: ControlType.SegmentedEnum,
      options: ["large", "small"],
      optionTitles: ["Large", "Small"],
      title: "Size"
    },
    appearance: {
      type: ControlType.Enum,
      options: ["primary", "secondary", "alternative"],
      optionTitles: ["Primary", "Secondary", "Alternative"],
      title: "Appearance"
    },
    block: {
      type: ControlType.Boolean,
      title: "Block",
      enabledTitle: "True",
      disabledTitle: "False"
    },
    alignX: {
      type: ControlType.SegmentedEnum,
      options: ["flex-start", "center", "flex-end"],
      optionTitles: ["Left", "Center", "Right"],
      title: "Align X"
    },
    alignY: {
      type: ControlType.SegmentedEnum,
      options: ["flex-start", "center", "flex-end"],
      optionTitles: ["Top", "Center", "Bottom"],
      title: "Align Y"
    }
  }

  render() {
    const style: React.CSSProperties = {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: this.props.alignY,
      justifyContent: this.props.alignX
    }
    return (
      <div style={style}>
        <XButton {...this.props}>{this.props.text}</XButton>
      </div>
    )
  }
}

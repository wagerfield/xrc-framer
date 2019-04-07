import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { pick } from "ramda"
import {
  theme,
  Button as XButton,
  ButtonProps as XButtonProps,
  Flex as XFlex
} from "xrc"

interface ButtonProps extends XButtonProps {
  alignX: "flex-start" | "center" | "flex-end"
  alignY: "flex-start" | "center" | "flex-end"
  debug: boolean
  width: number
  height: number
  text: string
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    width: 200,
    height: 48,
    text: "Button",
    variant: "primary",
    size: "large",
    grow: false,
    alignX: "center",
    alignY: "center",
    debug: false
  }

  static propertyControls: PropertyControls<ButtonProps> = {
    text: {
      type: ControlType.String,
      title: "Text"
    },
    variant: {
      type: ControlType.Enum,
      title: "Variant",
      options: ["primary", "secondary", "alternative"],
      optionTitles: ["Primary", "Secondary", "Alternative"]
    },
    size: {
      type: ControlType.SegmentedEnum,
      title: "Size",
      options: ["large", "small"],
      optionTitles: ["Large", "Small"]
    },
    grow: {
      type: ControlType.Boolean,
      title: "Grow",
      enabledTitle: "True",
      disabledTitle: "False"
    },
    alignX: {
      type: ControlType.SegmentedEnum,
      title: "Align X",
      options: ["flex-start", "center", "flex-end"],
      optionTitles: ["Left", "Center", "Right"]
    },
    alignY: {
      type: ControlType.SegmentedEnum,
      title: "Align Y",
      options: ["flex-start", "center", "flex-end"],
      optionTitles: ["Top", "Center", "Bottom"]
    },
    debug: {
      type: ControlType.Boolean,
      title: "Debug",
      enabledTitle: "True",
      disabledTitle: "False"
    }
  }

  render() {
    const { alignX, alignY, debug, text } = this.props
    const buttonProps = pick(["grow", "size", "variant"], this.props)
    const background = debug && theme.palette.debug
    return (
      <XFlex
        fill
        alignItems={alignY}
        justifyContent={alignX}
        background={background}
      >
        <XButton {...buttonProps}>{text}</XButton>
      </XFlex>
    )
  }
}

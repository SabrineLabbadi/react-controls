import * as React from 'react'

import styled, {css} from '../../../Common/theming/themedComponents';

import { UpRadioStyledProps } from './'
import defaultTheme from '../../../Common/theming'

import SvgIcon from '../../Display/SvgIcon'
import * as classNames from 'classnames'

import { CommonCheckableStyle } from '../_Common/Styled'
import { ThemeInterface } from "../../../Common/theming/types";

const BaseRadioButton: React.StatelessComponent<UpRadioStyledProps> = (props) => {
    const { children, checked, className, name, text, value, iconName, onChange } = props;
    return (
      <label className={classNames("up-control", "up-radio", className)}>
        <input defaultChecked={checked} onChange={onChange} name={name} type="radio" value={value} />
        <span className="up-control-indicator"></span>
        {text}
      </label>
    )
}

export const StyledRadioButton = styled<UpRadioStyledProps>(BaseRadioButton)`
${(props: UpRadioStyledProps) => CommonCheckableStyle(props)}

.up-control-indicator {
  border-radius: 50%;
  font-size: 6px;
}
input:checked ~ .up-control-indicator::before {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ffffff;
  width: 1em;
  height: 1em;
  content: ""; 
} 
input:indeterminate ~ .up-control-indicator::before {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  border-radius: 50%;
}
`
export const RadioGroup = styled.div`
  margin-top:8px;
  &.upContainer__groupradio-horizontal label.up-radio {
    float : left ;
    margin-right: 10px;
  }
  &.upContainer__groupradio-button label.up-radio {
    float : left ;
    padding:8px;
    background-color:#EEE;
    border:0.01em solid #CCC;
  }
  &.upContainer__groupradio-button label.up-radio {
    position:relative;
  }

  &.upContainer__groupradio-button label.up-radio:nth-child(2) {
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
  }
  &.upContainer__groupradio-button label.up-radio:last-child {
    border-top-right-radius:6px;
    border-bottom-right-radius:6px;
  }

  &.upContainer__groupradio-button label.up-radio input ~ .up-control-indicator::before {
    display:none;
  }
  &.upContainer__groupradio-button label.up-radio input ~ .up-control-indicator {
    position:absolute;
    width:100%;
    height: 100%;
    border:0;
    top:0;
    left:0;
    border-radius:0;
    opacity:0.3;
    display:inline-block;
    box-shadow:unset;
  }
  &.upContainer__groupradio-button label.up-radio input:indeterminate ~ .up-control-indicator {
    background: #EFE;
  }
`
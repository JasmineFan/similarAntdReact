import React,{ReactNode,CSSProperties, useState, useRef} from "react";
import classNames from 'classnames'
import './index.scss'
import Radio from "./radio";

export interface radioGroupProps extends React.HTMLAttributes<HTMLInputElement>{
    value?:string;
    defaultValue?:string;
    className?:string;
    children?:ReactNode;
    style?: CSSProperties
    onChange?:(event: React.FormEvent<HTMLInputElement>)=>void
    disabled?:boolean
}

const RadioGroup = (props:radioGroupProps)=>{
    const {disabled,className,children,style,onChange,...others} = props
    const [value,setValue] = useState(props.defaultValue||props.value)
    const cls = classNames({
        'ant-radio-group':true,
    })
    const handleClick= (e:any)=>{
        const value = e.target.value
        setValue(value)
    }
    const newChildren = React.Children.map(children,(child:any)=>{
        if(child.type!==Radio){
            return null
        }
        return React.cloneElement(child, {
            checked:child.props.value===value,
            disabled:disabled,
            onChange:handleClick
        })
    })
    return (

            <span className={cls}>
            <span>{newChildren}</span>
  
            </span>

    )
}
export default RadioGroup
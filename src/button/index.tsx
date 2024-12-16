import React,{ReactNode} from "react";
import classNames from 'classnames'
import './button.scss'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    className?:string;
    type?:'normal'|'primary'|'dashed'|'text';
    children?:ReactNode
    size?:'small'|'medium'|'large'
    style?: React.CSSProperties
    onClick?:React.MouseEventHandler<HTMLButtonElement>
    onBlur?:React.FocusEventHandler<HTMLButtonElement>
}

const Button = (props:buttonProps)=>{
    const {className,type, children,size='medium',style,onClick,onBlur,...others} = props
    const cls = classNames({
        'ant-btn':true,
        [`ant-btn-${type}`]:type ,   //有type 就有这个class, 没有type 就没有这个class
        [`ant-btn-${size}`]:size,
        [className as string]:!!className  //!! 判断这个值是不是存在，给它转成布尔值
    })
    return <button {...others} className={cls} style={style} onClick={onClick} onBlur={onBlur}>{children}</button>
}
export default Button
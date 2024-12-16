import React,{ReactNode, useState} from "react";
import classNames from 'classnames'
import './index.scss'
import Icon from "../icon";
import {CloseOutlined} from '@ant-design/icons'

interface tagProps extends React.HTMLAttributes<HTMLButtonElement>{
    className?:string;
    closeIcon?:boolean;
    color?:string;
    visible?:boolean;
    onClose?:Function;
   
}

const Tag = (props:tagProps)=>{
    const {className,
        children,
        closeIcon,
        color,
        onClose,
        ...others} = props
    const [visible,setVisible]= useState<boolean>(true)
    React.useEffect(()=>{
        if('visible' in props && typeof props.visible!=='undefined'){
            setVisible(props.visible)
        }
    },[props.visible])
    const customColor = color && color.match(/^#/)
    const cls = classNames({
        'ant-tag':true,
        [`ant-tag-${color}`]:color&&!customColor,
        [className as string]:!!className  //!! 判断这个值是不是存在，给它转成布尔值
    })
    const style:React.CSSProperties = {...props.style}
    if(customColor){
        style.backgroundColor = color
    }
    const handleClick= (e:React.MouseEvent<HTMLElement>)=>{
        onClose?.(e)
        if(e.defaultPrevented){
            return
        }
        if(!('visible' in props)){
            setVisible(false)
        }
   
    }
    if(!visible){
        return null
    }
    
    return (<span {...others} className={cls} style={style}>
        {children}
       {closeIcon?<span><CloseOutlined  onClick={handleClick}/></span>:null} 
    </span>)
}
export default Tag
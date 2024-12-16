import React, { ReactNode, CSSProperties, useContext } from 'react';
import classNames from 'classnames';

import MenuContext from './MenuContext';

import './index.scss';

export interface SubMenuProps {
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
    size?: 'small' | 'medium' | 'large';
    icon?: ReactNode;
    title?: ReactNode;
    id?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

const SubMenu = (props: SubMenuProps) => {
    const {
        className,
        id,
        title,
        icon,
        children,
        style,
        ...others
    } = props;

    const { level, inlineIndent, mode, selectedKeys, openKeys, onOpenChange, ...otherContext } = useContext(MenuContext);
//@ts-ignore
    const isOpen = openKeys.indexOf(id) !== -1;
//@ts-ignore
    const isChilcSelected = (nodes: ReactNode) => {
        //@ts-ignore
        return React.Children.toArray(nodes).some(item => {
            // @ts-ignore
            if (!item?.props) {
                return false;
            }
            // @ts-ignore
            const {id, children} = item.props;
            if (Array.isArray(children) && children.length) {
                return isChilcSelected(children);
            }
            //@ts-ignore
            return selectedKeys.indexOf(id) !== -1;
        })
    };

    const isSelected = isChilcSelected(children);

    const cls = classNames({
        'ant-menu-submenu': true,
        [`ant-menu-submenu-${mode}`]: true,
        'ant-menu-submenu-open': isOpen,
        'ant-menu-submenu-selected': isSelected,
        [className as string]: !!className
    });
    const subcls = classNames({
        'ant-menu': true,
        'ant-menu-sub': true,
        'ant-menu-hidden': !isOpen,
        [`ant-menu-${mode}`]: true,
    })
    const iconEle = React.isValidElement(icon) ? React.cloneElement(icon, {
        //@ts-ignore
        className: "ant-menu-item-icon"
    }) : null;

    const itemStyle = {
        paddingLeft: level * inlineIndent,
    };
    //@ts-ignore
    const handleClick = (e) => {
        e.stopPropagation();

        onOpenChange?.(id);
    }
    return (<MenuContext.Provider value={{
        inlineIndent,
        mode,
        level: level + 1,
        openKeys,
        selectedKeys,
        onOpenChange,
        ...otherContext
    }}>
        <li {...others} className={cls} style={style} onClick={handleClick}>
            <div className="ant-menu-submenu-title" style={itemStyle}>
                {iconEle}
                <span className="ant-menu-title-content">{title}</span>
                <i className="ant-menu-submenu-arrow" />
            </div>
            <ul className={subcls} >
                {children}
            </ul>
        </li>
    </MenuContext.Provider>);
}

export default SubMenu;
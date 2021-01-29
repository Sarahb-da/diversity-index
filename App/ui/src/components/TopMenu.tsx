import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

import { Menu, Header } from 'semantic-ui-react'

import { useParty } from '@daml/react';

export type IMenuItem = {
    name: string,
    url: string
}

type IProps = {
    setActiveItem: (name: IMenuItem) => void
    activeItem: IMenuItem,
    items: IMenuItem[]
}

const TopMenu: React.FC<IProps> = ({
    setActiveItem,
    activeItem,
    items,
}) => {
    const { url } = useRouteMatch();
    const username = useParty();

    function handleItemClick(item: IMenuItem) {
        setActiveItem(item)
    }

    return (
      <Menu className='top-menu' secondary pointing>
          {items.map((item)=>
            <Menu.Item
                className='item'
                name={item.name}
                as={NavLink}
                to={`${url}${item.url}`}
                active={activeItem === item}
                onClick={() => handleItemClick(item)}
            >
                <Header as='h2'>
                    {item.name}
                </Header>
            </Menu.Item>
          )}
      </Menu>
    )
}

export default TopMenu;

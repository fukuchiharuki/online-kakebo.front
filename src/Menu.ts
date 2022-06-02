import { useState } from 'react'

const menu: MenuItem[] = [
  {
    path: '/',
    icon: 'gg-clipboard',
  },
  {
    path: '/chart',
    icon: 'gg-trending',
  },
  {
    path: '/pie',
    icon: 'gg-chart',
  },
  {
    path: '/book',
    icon: 'gg-view-list',
  },
]

class Menu {
  cursor!: number

  constructor(cursor: number = 0) {
    this.cursor = cursor
  }

  nextMenuItem(): MenuItem {
    const nextIndex = (this.cursor + 1) % menu.length
    return menu[nextIndex]
  }

  next(): Menu {
    return new Menu(this.cursor + 1)
  }
}

type MenuItem = {
  path: string
  icon: string
}

export default function useMenu(pathname: string): [Menu, () => void] {
  const [menu, setMenu] = useState<Menu>(initialMenu(pathname))
  function next() {
    setMenu(menu.next())
  }
  return [menu, next]
}

function initialMenu(pathname: string): Menu {
  const cursor = initialCursor(pathname)
  return new Menu(cursor)
}

function initialCursor(pathname: string): number {
  const targetMenuItem = [...menu]
    .reverse()
    .find((it) => pathname.indexOf(it.path) === 0)
  if (targetMenuItem == null) return 0
  return menu.indexOf(targetMenuItem)
}

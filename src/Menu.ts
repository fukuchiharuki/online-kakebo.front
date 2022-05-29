import { useState } from "react"

const menu: MenuItem[] = [
  {
    path: '/',
    icon: 'gg-clipboard',
  },
  {
    path: '/entries',
    icon: 'gg-view-list',
  }
]

class Menu {
  cursor!: number

  constructor(
    cursor: number = 0
  ) {
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

export default function useMenu(): [Menu, () => void] {
  const [menu, setMenu] = useState<Menu>(new Menu())
  function next() {
    setMenu(menu.next())
  }
  return [menu, next]
}
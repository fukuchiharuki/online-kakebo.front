import AccountItemType, { specOf } from './AccountItemType'

type AccountItem = {
  accountItem: AccountItemType
  amount: number
  category(): AccountItemType
  categoryIs(accountItemType: AccountItemType): boolean
  is(accountItemType: AccountItemType): boolean
  is予算(): boolean
  is特別費(): boolean
}

export default AccountItem

export function asAccountItem(o: any): AccountItem {
  const newObject = Object.create(o)
  Object.assign(newObject, extension)
  return newObject
}

const extension = {
  category(): AccountItemType {
    return specOf(this.accountItem).category()
  },

  categoryIs(accountItemType: AccountItemType): boolean {
    return this.category() === accountItemType
  },

  is(accountItemType: AccountItemType): boolean {
    return this.accountItem === accountItemType
  },

  is予算(): boolean {
    return specOf(this.accountItem).is予算()
  },

  is特別費(): boolean {
    return specOf(this.accountItem).is特別費()
  },
} as AccountItem

import AccountItemType from "components/aggregation/model/AccountItemType"

type Entry = {
  timestamp: string,
  date: string,
  amount: number,
  accountItem: AccountItemType,
  note: string, // 空文字列 if 空
  agent: string,
}

export default Entry

export function asEntry(o: any): Entry {
  const newObject = Object.create(o)
  Object.assign(newObject, extension)
  return o
}

const extension = {
  // nothing
} as Entry

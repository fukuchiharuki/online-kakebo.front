import Entry, { asEntry } from './Entry'

type Entries = {
  // nothing
} & Array<Entry>

export default Entries

export function asEntries(o: any): Entries {
  const newObject = Object.create(o.map((it: any) => asEntry(it)))
  Object.assign(newObject, extension)
  return newObject
}

const extension = {
  // nothing
} as Entries

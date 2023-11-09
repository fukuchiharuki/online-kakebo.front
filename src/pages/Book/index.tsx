import { specOf, values } from 'components/aggregation/model/AccountItemType'
import Entries from 'components/entry/model/Entries'
import Amount from 'components/ui/Amount'
import Repeat from 'components/ui/Repeat'
import WithLoading from 'components/ui/WithLoading'
import { QueryState } from 'infrastructure/useQuery'
import { Fragment, useState } from 'react'

type Props = {
  state: QueryState<Entries>
}

function Book(props: Props) {
  const { isLoading, data } = props.state

  const accountItems = values().filter((it) => !specOf(it).is予算() && specOf(it).list())
  const [tags, setTags] = useState([] as string[])
  function toggleTag(tag: string) {
    setTags(
      tags.includes(tag) ? tags.filter((it) => it !== tag) : tags.concat([tag])
    )
  }
  function tagClass(tag: string) {
    return tags.includes(tag) ? 'tag tag--on' : 'tag tag--off'
  }

  return (
    <WithLoading if={isLoading || data == null}>
      {() => {
        const entries = data!.filter((it) =>
          tags.length ? tags.includes(it.accountItem) : true
        )
        return (
          <div>
            <h3>半年分のログ</h3>
            <Repeat in={accountItems}>
              {(it) => (
                <span className={tagClass(it)} onClick={() => toggleTag(it)}>{it}</span>
              )}
            </Repeat>
            <table className="entries">
              <tbody>
                <Repeat in={entries}>
                  {(it) => (
                    <Fragment>
                      <tr>
                        <td className="date">{it.date}</td>
                        <td className="timestamp" colSpan={2}>
                          {it.agent}@{it.timestamp}
                        </td>
                      </tr>
                      <tr className="bottom">
                        <td className="note">{it.note}</td>
                        <td className="amount">
                          <Amount>{it.amount}</Amount>
                        </td>
                        <td className="account-item">{it.accountItem}</td>
                      </tr>
                    </Fragment>
                  )}
                </Repeat>
              </tbody>
            </table>
          </div>
        )
      }}
    </WithLoading>
  )
}

export default Book

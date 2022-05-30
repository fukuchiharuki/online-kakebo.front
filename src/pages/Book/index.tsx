import Entries from 'components/entry/model/Entries';
import Amount from 'components/ui/Amount';
import Repeat from 'components/ui/Repeat';
import WithLoading from 'components/ui/WithLoading';
import { QueryState } from 'infrastructure/useQuery';
import { Fragment } from 'react';

type Props = {
  state: QueryState<Entries>
};

function Book(props: Props) {
  const { isLoading, data } = props.state;
  return (
    <WithLoading if={isLoading || data == null}>{() => {
      const entries = data!
      return (
        <div>
          <h3>直近の{entries.length}件</h3>
          <table className="entries">
            <tbody>
              <Repeat in={entries}>{it => (
                <Fragment>
                  <tr>
                    <td className="date">{it.date}<span className="agent">@{it.agent}</span></td>
                    <td className="timestamp" colSpan={2}>{it.timestamp}</td>
                  </tr>
                  <tr className="bottom">
                    <td className="note">{it.note}</td>
                    <td className="amount"><Amount>{it.amount}</Amount></td>
                    <td className="account-item">{it.accountItem}</td>
                  </tr>
                </Fragment>
              )}</Repeat>
            </tbody>
          </table>
        </div>
      )
    }}</WithLoading>
  );
}

export default Book;

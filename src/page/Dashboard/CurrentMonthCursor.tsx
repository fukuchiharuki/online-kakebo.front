import CursorRange from 'model/aggregation/CursorRange';
import Today from 'model/date/Today';
import CursorParams from './CursorParams';

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
}

function CurrentMonthCursor(props: Props) {
  const { cursorParams, cursorRange } = props;
  const prevClassNames = (cursorParams.hasPrev(cursorRange)? ["flip"]:  ["flip", "flip--disabled"]).join(" ");
  const nextClassNames = "flip flip--disabled";
  return (
    <div className="month-cursor">
      <div className={prevClassNames}>◀</div>
      <div>
        <h2>今月</h2>
        <p>(残り {new Today().restOfCurrentMonth()} 日)</p>
      </div>
      <div className={nextClassNames}>▶</div>
    </div>
  );
}

export default CurrentMonthCursor;

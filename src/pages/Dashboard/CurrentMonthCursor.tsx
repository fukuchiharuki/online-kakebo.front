import CursorRange from 'components/aggregation/model/CursorRange';
import Today from 'components/date/model/Today';
import CursorParams from './CursorParams';

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
  onPrevClick?: () => void
  onNextClick?: () => void
}

function CurrentMonthCursor(props: Props) {
  const { cursorParams, cursorRange, onPrevClick, onNextClick } = props;
  const prevClassNames = (cursorParams.hasPrev(cursorRange)? ["flip"]:  ["flip", "flip--disabled"]).join(" ");
  const nextClassNames = "flip flip--disabled";
  return (
    <div className="month-cursor">
      <div className={prevClassNames} onClick={onPrevClick}><span className="button">＜</span></div>
      <div>
        <h2>今月</h2>
        <p>(残り {new Today().restOfCurrentMonth()} 日)</p>
      </div>
      <div className={nextClassNames} onClick={onNextClick}><span className="button">＞</span></div>
    </div>
  );
}

export default CurrentMonthCursor;

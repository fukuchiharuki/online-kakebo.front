import CursorRange from 'model/aggregation/CursorRange';
import Today from 'model/date/Today';
import CursorParams from './CursorParams';

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
}

function SpecifiedMonthCursor(props: Props) {
  const { cursorParams, cursorRange } = props;
  const prevClassNames = (cursorParams.hasPrev(cursorRange) ? ["flip"] : ["flip", "flip--disabled"]).join(" ");
  const nextClassNames = (cursorParams.hasNext(cursorRange) ? ["flip"] : ["flip", "flip--disabled"]).join(" ");
  const [year, month] = new Today().cursorMonth(cursorParams.cursor());
  return (
    <div className="month-cursor">
      <div className={prevClassNames}>◀</div>
      <div>
        <h2>{
          (cursorParams.cursor() === -1)
            ? "先月"
            : (cursorParams.cursor() === -2)
              ? "先々月"
              : `${-cursorParams.cursor()} ヶ月前`
        }</h2>
        <p>({year} 年 {month} 月)</p>
      </div>
      <div className={nextClassNames}>▶</div>
    </div>
  );
}

export default SpecifiedMonthCursor;

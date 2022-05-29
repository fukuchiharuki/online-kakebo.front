import CursorRange from 'components/aggregation/model/CursorRange';
import Today from 'components/date/model/Today';
import CursorParams from './CursorParams';
import 'css.gg/icons/css/push-chevron-left.css'
import 'css.gg/icons/css/push-chevron-right.css'

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
  onPrevClick?: () => void
  onNextClick?: () => void
}

function SpecifiedMonthCursor(props: Props) {
  const { cursorParams, cursorRange, onPrevClick, onNextClick } = props;
  const prevClassNames = (cursorParams.hasPrev(cursorRange) ? ["flip"] : ["flip", "flip--disabled"]).join(" ");
  const nextClassNames = (cursorParams.hasNext(cursorRange) ? ["flip"] : ["flip", "flip--disabled"]).join(" ");
  const [year, month] = new Today().cursorMonth(cursorParams.cursor());
  return (
    <div className="bottom-nav">
      <div className={prevClassNames} onClick={onPrevClick}>
        <i className="gg-push-chevron-left" />
      </div>
      <div className="indicator">
        <h2>{year} 年 {month} 月</h2>
        <p>({
          (cursorParams.cursor() === -1)
            ? "先月"
            : (cursorParams.cursor() === -2)
              ? "先々月"
              : `${-cursorParams.cursor()} ヶ月前`
        })</p>
      </div>
      <div className={nextClassNames} onClick={onNextClick}>
        <i className="gg-push-chevron-right" />
      </div>
    </div>
  );
}

export default SpecifiedMonthCursor;

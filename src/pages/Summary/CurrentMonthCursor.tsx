import CursorRange from 'components/aggregation/model/CursorRange'
import Today from 'components/date/model/Today'
import CursorParams from './CursorParams'
import 'css.gg/icons/css/push-chevron-left.css'
import 'css.gg/icons/css/push-chevron-right.css'

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
  onPrevClick?: () => void
  onNextClick?: () => void
}

function CurrentMonthCursor(props: Props) {
  const { cursorParams, cursorRange, onPrevClick, onNextClick } = props
  const prevClassNames = (
    cursorParams.hasPrev(cursorRange) ? ['flip'] : ['flip', 'flip--disabled']
  ).join(' ')
  const nextClassNames = 'flip flip--disabled'
  return (
    <div className="bottom-nav">
      <div className={prevClassNames} onClick={onPrevClick}>
        <i className="gg-push-chevron-left" />
      </div>
      <div className="indicator">
        <h2>今月</h2>
        <p>(残り {new Today().restOfCurrentMonth()} 日)</p>
      </div>
      <div className={nextClassNames} onClick={onNextClick}>
        <i className="gg-push-chevron-right" />
      </div>
    </div>
  )
}

export default CurrentMonthCursor

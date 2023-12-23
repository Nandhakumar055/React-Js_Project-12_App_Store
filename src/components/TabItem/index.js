import './index.css'

const TabItem = props => {
  const {tabItems, clickTebItem, isActive} = props
  const {tabId, displayText} = tabItems

  const onClickTabItem = () => {
    clickTebItem(tabId)
  }

  const activeClassName = isActive ? 'active-tab' : 'tab-text'

  return (
    <>
      <li className="app-list">
        <button
          className={activeClassName}
          type="button"
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem

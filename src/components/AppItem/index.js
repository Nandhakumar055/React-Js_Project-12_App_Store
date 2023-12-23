import './index.css'

const AppItem = props => {
  const {appItems} = props
  const {appName, imageUrl} = appItems

  return (
    <>
      <li className="app-card-main-container">
        <div className="app-card-container">
          <img src={imageUrl} className="app-image" alt={appName} />
          <p className="app-name">{appName}</p>
        </div>
      </li>
    </>
  )
}

export default AppItem

import "../styles/Toggle.css"

const Toggle = ({ theme, isActive, onToggle }) => {
  return(
    <label className="toggle-switch">
      <input className="toggle-checkbox" type="checkbox" checked={isActive} onChange={onToggle}></input>
      <span className={`slider ${theme}-mode-slider`} tabIndex="1"></span>
    </label>
  )
}

export default Toggle;

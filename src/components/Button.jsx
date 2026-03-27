import './Button.css'

export function Button({ variant = 'primary', disabled = false, children, onClick }) {
  return (
    <button className={`btn btn--${variant}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

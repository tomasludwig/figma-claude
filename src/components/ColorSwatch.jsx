import './ColorSwatch.css'

const colors = [
  { name: 'primary-500', variable: '--color-primary-500', hex: '#006653' },
  { name: 'primary-300', variable: '--color-primary-300', hex: '#33997f' },
  { name: 'secondary-500', variable: '--color-secondary-500', hex: '#d4763a' },
  { name: 'secondary-300', variable: '--color-secondary-300', hex: '#e0a474' },
]

export function ColorSwatch() {
  return (
    <div className="swatches">
      {colors.map((color) => (
        <div key={color.name} className="swatch">
          <div className="swatch-color" style={{ background: `var(${color.variable})` }} />
          <div className="swatch-info">
            <span className="swatch-name">{color.name}</span>
            <span className="swatch-hex">{color.hex}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

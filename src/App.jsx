import { Button } from './components/Button'
import { ColorSwatch } from './components/ColorSwatch'
import './App.css'

function App() {
  return (
    <main className="preview">
      <section className="preview-section">
        <h2>Colors</h2>
        <ColorSwatch />
      </section>
      <section className="preview-section">
        <h2>Button — Primary</h2>
        <div className="preview-row">
          <Button variant="primary">Default</Button>
          <Button variant="primary">Hover me</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>
      <section className="preview-section">
        <h2>Button — Ghost</h2>
        <div className="preview-row">
          <Button variant="ghost">Default</Button>
          <Button variant="ghost">Hover me</Button>
          <Button variant="ghost" disabled>Disabled</Button>
        </div>
      </section>
    </main>
  )
}

export default App

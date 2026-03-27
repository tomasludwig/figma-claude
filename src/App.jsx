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
        <h2>Buttons</h2>
        <div className="preview-row">
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
    </main>
  )
}

export default App

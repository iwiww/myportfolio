import SideRays from './components/SideRays'
import './App.css'

export default function App() {
  return (
    <main className="stage">
      <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
        <SideRays
          rayColor1="#EF4444"
          rayColor2="#96c8ff"
          origin="top-right"
          speed={2.5}
          intensity={2}
          spread={2}
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>
    </main>
  )
}

import './App.css'
import Form from 'react-bootstrap/Form';
import React from 'react'

function App() {

  const [searchTerm, setSearchTerm] = React.useState("")

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toUpperCase())
  }

  const isHighlighted = (note) => {
    return note.toUpperCase() === searchTerm
  }

  return(
    <div className="main-content">
      <div className="search-bar-container">
      <Form.Control 
        size="lg" 
        type="text" 
        placeholder="Search for a Note"
        onChange={handleChange}
        value={searchTerm}
        />
      </div>  
      <div className="fret-container">
        <div className="string">
          <div className="string-marker">E</div>
          <div className="string-holder"></div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
        </div>
        <div className="string">
          <div className="string-marker">B</div>
          <div className="string-holder"></div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
        </div>
        <div className="string">
          <div className="string-marker">G</div>
          <div className="string-holder"></div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
        </div>
        <div className="string">
          <div className="string-marker">D</div>
          <div className="string-holder"></div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
        </div>
        <div className="string">
          <div className="string-marker">A</div>
          <div className="string-holder"></div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
        </div>
        <div className="string">
          <div className="string-marker">E</div>
          <div className="string-holder"></div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
          <div className={isHighlighted("D#") ? "highlighted-fret" : "fret"}>D#</div>
          <div className={isHighlighted("E") ? "highlighted-fret" : "fret"}>E</div>
          <div className={isHighlighted("F") ? "highlighted-fret" : "fret"}>F</div>
          <div className={isHighlighted("F#") ? "highlighted-fret" : "fret"}>F#</div>
          <div className={isHighlighted("G") ? "highlighted-fret" : "fret"}>G</div>
          <div className={isHighlighted("G#") ? "highlighted-fret" : "fret"}>G#</div>
          <div className={isHighlighted("A") ? "highlighted-fret" : "fret"}>A</div>
          <div className={isHighlighted("A#") ? "highlighted-fret" : "fret"}>A#</div>
          <div className={isHighlighted("B") ? "highlighted-fret" : "fret"}>B</div>
          <div className={isHighlighted("C") ? "highlighted-fret" : "fret"}>C</div>
          <div className={isHighlighted("C#") ? "highlighted-fret" : "fret"}>C#</div>
          <div className={isHighlighted("D") ? "highlighted-fret" : "fret"}>D</div>
        </div>          
      </div>
      <div className="fret-numbers">
        <div className="fret-number-marker">E</div>
        <div className="string-holder-invisible"></div>
          <div className="fret-number">1</div>
          <div className="fret-number">2</div>
          <div className="fret-number">3</div>
          <div className="fret-number">4</div>
          <div className="fret-number">5</div>
          <div className="fret-number">6</div>
          <div className="fret-number">7</div>
          <div className="fret-number">8</div>
          <div className="fret-number">9</div>
          <div className="fret-number">10</div>
          <div className="fret-number">11</div>
          <div className="fret-number">12</div>
          <div className="fret-number">13</div>
          <div className="fret-number">14</div>
          <div className="fret-number">15</div>
          <div className="fret-number">16</div>
          <div className="fret-number">17</div>
          <div className="fret-number">18</div>
          <div className="fret-number">19</div>
          <div className="fret-number">20</div>
          <div className="fret-number">21</div>
          <div className="fret-number">22</div>
      </div>
    </div>
  )
}

export default App

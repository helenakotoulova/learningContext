import React, {useState} from 'react';
import ContextComponent from './ContextComponent';


export const ThemeContext = React.createContext();

function App() {
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  const [darkTheme, setDarkTheme]=useState(true);
  
  return (
    <section>
      <ThemeContext.Provider value={darkTheme}>
        <h1>ahoj</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ContextComponent />
      </ThemeContext.Provider>
    </section>
  );
}

export default App;

/* useContext ma 2 casti:
1. Context Provider - ten wrapnu okolo vseho, co chci, aby melo pristup k te value Provideru.
2. samotna value provideru

useContext funguje jako globalni useState pro vsechny children. nemusim tim padem
kde vsem children psat atributy (napr. darkTheme={darkTheme})

*/

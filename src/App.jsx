import { useState, useEffect } from 'react'
import './App.css'
import Id from './components/Id'
import Name from './components/Name'
import Titles from './components/Titles'


function App() {
  const [isues, setIsues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setIsues(data)
      }).catch(error => console.log(error))
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <th>
            {isues.map((isues, index) => (
              <Id id={isues.id + index}
                key={index}
              />
            ))}
          </th>
          <th>
            {isues.map((isues, index) => (
              <Name name={isues.user.login + index}
                key={index}
              />
            ))}
          </th>
          <th>
            {isues.map((isues, index) => (
              <Titles titles={isues.title + index}
                url = {isues.html_url}
                key={index}
                
              />
            ))}
          </th>
        </tbody>
      </table>
    </>
  )
}

export default App
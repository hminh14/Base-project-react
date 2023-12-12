import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { demo } from './interface'

function App() {
  const [demo, setDemo] = useState<demo[]>([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)

      setDemo(response.data)
    } catch (error) {
      // handle error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Minh Hoc Gioi vcut</h1>
      <div className='card'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              {/* Thêm các cột khác tùy theo dữ liệu bạn nhận từ API */}
            </tr>
          </thead>
          <tbody>
            {demo.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                {/* Render các cột dữ liệu khác tương tự */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App

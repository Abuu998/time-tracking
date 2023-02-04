import { useState } from 'react'
import Header from "./components/Header"
import Card from "./components/Card"
import json from "./data.json"
import './index.css'

function App() {
    const [data, setData] = useState(json)


    function capitalize(str) {
        const newStr = str.split('');
        newStr[0] = newStr[0].toUpperCase();
        return newStr.join('')
    }

    // console.log(data)

    const cards = data.map((el, ind) => {
        return (
            <Card
                key={ind}
                title={el.title}
                daily={el.timeframes.daily}
                weekly={el.timeframes.weekly}
                monthly={el.timeframes.monthly}
            />
        )
    })

    return (
        <div className="container">
            <Header handleCapitalize={capitalize} />
            {cards}
        </div>
    )
}

export default App

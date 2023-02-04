import { useState } from "react"
import profil from "../assets/image-jeremy.png"
import Buttons from "./Buttons"
import rowData from "../data.json"
import "../index.css"

export default function Header(props) {
    const [timeFrames, setTimeFrames] = useState(Object.keys(rowData[0].timeframes))

    const buttons = timeFrames.map((btn, index) => {
        return (
            <Buttons
                key={index}
                btn={props.handleCapitalize(btn)}
            />
        )
    })

    return (
        <header className="header">
            <div className="profil pro">
                <div className="profil-cont">
                    <img
                        src={profil}
                        alt="Profil image"
                        className="profil-img"
                    />
                </div>
                <p className="info">Report for<span className="person-name">Jeremy Robson</span></p>
            </div>
            <nav className="nav pro">
                {buttons}
            </nav>
        </header>
    )
}

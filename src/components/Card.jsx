import elipsis from "../assets/icon-ellipsis.svg"
import work from "../assets/icon-work.svg"
import play from "../assets/icon-play.svg"
import study from "../assets/icon-study.svg"
import exercise from "../assets/icon-exercise.svg"
import social from "../assets/icon-social.svg"
import selfCare from "../assets/icon-self-care.svg"
import "../index.css"

export default function Card({title, daily, weekly, monthly}) {

    function lowerCase(str) {
        const newStr = str.toLowerCase();
        return newStr
    }

    function getImage(str) {
        switch (str) {
            case "Work":
                return work;
            case "Play":
                return play;
            case "Study":
                return study;
            case "Exercise":
                return exercise;
            case "Social":
                return social;
            case "Self Care":
                return selfCare;
            default:
                return;
        }
    }

    return (
        <div className={`card ${lowerCase(title)}`}>
            <div className="card-image-cont">
                <img 
                    className="card-image" 
                    src={getImage(title)}
                    alt="Bg image..." 
                />
            </div>
            <div className="card-part">
                <div className="card-part-top crd">
                    <p className="title">{title}</p>
                    <div className="elipsis-cont">
                        <img src={elipsis} alt="" />
                    </div>
                </div>
                <div className="card-part-btm crd">
                    <p className="hours">{`${daily.current}hrs`}</p>
                    <p className="previous">{`${daily.term} - ${daily.previous}hrs`}</p>
                </div>
            </div>
        </div>
    )
}
import {useState} from "react";
import {Rating} from "./Components/Rating/Rating";
import {Attribution} from "./Components/Attribution/Attribution";
import {Thanks} from "./Components/Thanks/Thanks";

export const App = () => {
    const [feedback, setFeedback] = useState(0);
    const [isNeedRerender, setIsNeedRerender] = useState(false);

    return (
        <div className="container">
            <div className="content">
                {!isNeedRerender ?
                    <Rating setFeedback={setFeedback} setIsNeedRerender={setIsNeedRerender} /> :
                    <Thanks feedback={feedback} />
                }
            </div>
            <Attribution styles={{color: 'hsl(0, 0%, 100%)'}}/>
        </div>
    );
};

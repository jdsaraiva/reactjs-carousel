import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import Carousel from "./components/Carousel";
import './style.css';

const App = () => {

    // Local images are saved inside array "images" and loaded right away
    const [images] = useState([
            {
                "id": 1,
                "orig_src": "src/imgs/1.jpg",
                "description": "Hello from image 1!"
            },
            {
                "id": 2,
                "orig_src": "src/imgs/2.jpg",
                "description": "Hello from image 2!"
            },
            {
                "id": 3,
                "orig_src": "src/imgs/3.jpg",
                "description": "Hello from image 2!"
            },
            {
                "id": 4,
                "orig_src": "src/imgs/4.jpg",
                "description": "Hello from image 2!"
            },
            {
                "id": 5,
                "orig_src": "src/imgs/5.jpg",
                "thumb_src": "3_thumb.jpg",
                "description": "Hello from image 2!"
            },
    ])

    return (
        <div className="App">
            <Carousel images={images} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

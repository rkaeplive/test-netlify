import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
    // const [param, setParam] = useState([]);
    // const getCustomParams = async () => {
    //     const props = await axios
    //         .get("http://localhost:8000/api/test", {
    //             headers: {
    //                 Authorization: localStorage.getItem("token"),
    //             },
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     setParam(props.data);
    // };
    // useEffect(() => {
    //     getCustomParams();
    // }, []);
    // console.log(param);
    const param = [1, 2, 3, 4, 5];
    return (
        <div className="App">
            {param.map((p) => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}

export default App;

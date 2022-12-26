import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const [param, setParam] = useState([]);
    const getCustomParams = async () => {
        const props = await axios
            .get("https://resilient-muffin-736b46.netlify.app/api/test", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .catch((err) => {
                console.log(err);
            });
        setParam(props.data);
    };
    useEffect(() => {
        getCustomParams();
    }, []);
    return (
        <div className="App">
            {param.map((p) => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}

export default App;

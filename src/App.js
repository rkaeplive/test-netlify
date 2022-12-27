import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const [param, setParam] = useState([]);
    const getCustomParams = async () => {
        const props = await axios
            // https://test-netify-server.onrender.com
            .get("https://test-netify-server.onrender.com")
            .catch((err) => {
                console.log(err);
            });
        setParam(props.data);
    };
    console.log(param);
    useEffect(() => {
        getCustomParams();
    }, []);
    return (
        <div className="App">
            {param.map((p) => (
                <div key={p.user_id}>{p.user_email}</div>
            ))}
        </div>
    );
}

export default App;

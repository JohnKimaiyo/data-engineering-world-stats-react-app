import React, { useEffect, useState } from "react";
import axios from "axios";

function USApopulation() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch data from the backend
        axios
            .get("http://localhost:3000/api/data") // Backend endpoint
            .then((response) => {
                setData(response.data.documents); // Assuming the structure contains `documents`
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;




    return (
        <div>USApopulation</div>
    )
}

export default USApopulation
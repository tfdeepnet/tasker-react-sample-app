import { useState } from "react";

function TaskEdit ({task , onSaveTask}) {

    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");

    const saveTask = (e) => {
        e.preventDefault();
        onSaveTask({desc: desc , date: date});
        setDesc("");
        setDate("");
    }

};
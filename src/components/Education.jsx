import { useState } from "react";
import "../styles/Section.css";

export default function Education(){
    const [education, setEducation] = useState({
        school: "",
        study: "",
        date: "",
    });

    const [isEditing, setIsEditing] = useState(true);

    function handleChange(event){
        const {name, value} = event.target;

        setEducation((previousPerson) => ({
            ...previousPerson,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        setIsEditing(false);
    }

    function handleEdit(){
        setIsEditing(true);
    }

    return (
        <section className="cv-section">
            <h2>Educational Experience</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        School Name
                        <input 
                        type="text"
                        name="school"
                        value={education.school}
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        Title of Study
                        <input 
                        type="text"
                        name="study"
                        value={education.study}
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        Date of Study
                        <input 
                        type="date" 
                        name="date"
                        onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            ):(
                <div>
                    <h3>{education.school}</h3>

                    <p>
                        <strong>Study:</strong>{education.study}
                    </p>

                    <p>
                        <strong>Date:</strong>{education.date}
                    </p>

                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </section>
    )
}
import { useState } from "react";
import "../styles/Section.css";

export default function Experience(){
    const [experience, setExperience] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
    });


    const [isEditing, setIsEditing] = useState(true);

    function handleChange(event){
        const {name, value} = event.target
        setExperience((previousPerson) => ({
            ...previousPerson,
            [name]: value,
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
            <h2>Practical Experience</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Company Name
                        <input 
                        type="text"
                        name="company"
                        value={experience.company}
                        onChange={handleChange} 
                        />
                    </label>
                    <label>
                        Position Title
                        <input 
                        type="text"
                        name="position"
                        value={experience.position}
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        Main Responsibilities
                        <textarea name="responsibilities" value={experience.responsibilities} onChange={handleChange}/>
                    </label>

                    <label>
                        Start Date
                        <input 
                        type="Date"
                        name="startDate"
                        value={experience.startDate}
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        End Date
                        <input 
                        type="Date"
                        name="endDate"
                        value={experience.endDate}
                        onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            ): (
                <div>
                    <h3>{experience.company}</h3>

                    <p>
                        <strong>Responsibilities:</strong>{" "}
                        {experience.responsibilities}
                    </p>

                    <p>
                        <strong>From:</strong>{experience.startDate}
                    </p>

                    <p>
                        <strong>Until:</strong>{experience.endDate}
                    </p>

                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </section>
    )
}
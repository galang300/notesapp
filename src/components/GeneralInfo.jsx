import { useState } from "react";
import "../styles/Section.css";

export default function GeneralInfo(){
    const [person, setPerson] = useState({
        name: "",
        email: "",
        phone: "",
    });


    const [isEditing, setIsEditing] = useState(true);

    function handleChange(event){
        const {name, value} = event.target;

        setPerson((previousPerson) => ({
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
            <h2>General Information</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input 
                        type="text"
                        name="name"
                        value={person.name}
                        onChange={handleChange} 
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                        type="email"
                        name="email"
                        value={person.email}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input 
                        type="text"
                        name="phone"
                        value={person.phone}
                        onChange={handleChange}
                         />
                    </label>

                    <button type="submit">Submit</button>
                </form>
                ) : (
                    <div>
                        <h3>{person.name}</h3>
                        <p>Email: {person.email}</p>
                        <p>Phone: {person.phone}</p>
                    </div>
                )}
        </section>
    )
}
import React, { useState } from 'react'
import styles from './Contribute.module.css'

const Contribute = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'music',
        date: '',
        location: '',
        description: '',
        organizer: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Event submitted for verification! You will be notified once approved.')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Contribute an Event</h1>
                <p>Share local events, hidden gems, and community activities. Earn points for every verified submission!</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label>Event Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Local Food Festival"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Category</label>
                        <select name="category" value={formData.category} onChange={handleChange}>
                            <option value="music">Music</option>
                            <option value="food">Food</option>
                            <option value="art">Art</option>
                            <option value="tech">Tech</option>
                            <option value="culture">Culture</option>
                            <option value="adventure">Adventure</option>
                        </select>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. City Park, Calicut"
                            required
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>Organizer Name</label>
                    <input
                        type="text"
                        name="organizer"
                        value={formData.organizer}
                        onChange={handleChange}
                        placeholder="Individual or Organization Name"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us more about the event..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className={styles.inputGroup}>
                    <label>Upload Photos/Videos</label>
                    <div className={styles.fileUpload}>
                        <i className="lni lni-cloud-upload"></i>
                        <span>Click to upload or drag and drop</span>
                        <input type="file" multiple accept="image/*,video/*" />
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Submit for Verification
                </button>
            </form>
        </div>
    )
}

export default Contribute

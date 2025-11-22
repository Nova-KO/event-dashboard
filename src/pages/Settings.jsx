import React, { useState } from 'react'
import styles from './ProfileSubPages.module.css'

const Settings = () => {
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [showPrivacyModal, setShowPrivacyModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        // Simulate password change
        alert('Password changed successfully!')
        setShowPasswordModal(false)
    }

    const handleDeleteAccount = () => {
        // Simulate account deletion
        alert('Your account has been scheduled for deletion.')
        setShowDeleteModal(false)
        // In a real app, you would redirect to login or home here
        window.location.href = '/login'
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Settings</h1>

            <div className={styles.settingsSection}>
                <h2>Account Preferences</h2>
                <div className={styles.settingItem}>
                    <div className={styles.settingInfo}>
                        <h3>Language</h3>
                        <p>Select your preferred language</p>
                    </div>
                    <select className={styles.select}>
                        <option>English</option>
                        <option>Malayalam</option>
                        <option>Hindi</option>
                    </select>
                </div>

                <div className={styles.settingItem}>
                    <div className={styles.settingInfo}>
                        <h3>Currency</h3>
                        <p>Select your preferred currency</p>
                    </div>
                    <select className={styles.select}>
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                    </select>
                </div>
            </div>

            <div className={styles.settingsSection}>
                <h2>Notifications</h2>
                <div className={styles.settingItem}>
                    <div className={styles.settingInfo}>
                        <h3>Event Reminders</h3>
                        <p>Get notified before events start</p>
                    </div>
                    <label className={styles.switch}>
                        <input type="checkbox" defaultChecked />
                        <span className={styles.slider}></span>
                    </label>
                </div>

                <div className={styles.settingItem}>
                    <div className={styles.settingInfo}>
                        <h3>New Events in My Area</h3>
                        <p>Get notified about new events near you</p>
                    </div>
                    <label className={styles.switch}>
                        <input type="checkbox" defaultChecked />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>

            <div className={styles.settingsSection}>
                <h2>Privacy & Security</h2>
                <button
                    className={styles.linkBtn}
                    onClick={() => setShowPasswordModal(true)}
                >
                    Change Password
                </button>
                <button
                    className={styles.linkBtn}
                    onClick={() => setShowPrivacyModal(true)}
                >
                    Privacy Policy
                </button>
                <button
                    className={`${styles.linkBtn} ${styles.danger}`}
                    onClick={() => setShowDeleteModal(true)}
                >
                    Delete Account
                </button>
            </div>

            {/* Change Password Modal */}
            {showPasswordModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2>Change Password</h2>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowPasswordModal(false)}
                            >
                                <i className="lni lni-close"></i>
                            </button>
                        </div>
                        <form onSubmit={handlePasswordSubmit}>
                            <div className={styles.inputGroup}>
                                <label>Current Password</label>
                                <input type="password" required className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>New Password</label>
                                <input type="password" required className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Confirm New Password</label>
                                <input type="password" required className={styles.input} />
                            </div>
                            <div className={styles.modalActions}>
                                <button
                                    type="button"
                                    className={styles.cancelBtn}
                                    onClick={() => setShowPasswordModal(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className={styles.saveBtn}>
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Privacy Policy Modal */}
            {showPrivacyModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2>Privacy Policy</h2>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowPrivacyModal(false)}
                            >
                                <i className="lni lni-close"></i>
                            </button>
                        </div>
                        <div className={styles.modalContent}>
                            <p><strong>Last Updated: November 2025</strong></p>
                            <p>At Eventify, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>

                            <h3>1. Information We Collect</h3>
                            <p>We collect information you provide directly to us, such as when you create an account, book tickets, or contact support. This includes your name, email address, and payment information.</p>

                            <h3>2. How We Use Your Information</h3>
                            <p>We use your information to provide and improve our services, process transactions, send you notifications about your bookings, and communicate with you about new events.</p>

                            <h3>3. Data Security</h3>
                            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

                            <h3>4. Third-Party Services</h3>
                            <p>We may use third-party services for payment processing and analytics. These services have their own privacy policies which we encourage you to review.</p>

                            <h3>5. Your Rights</h3>
                            <p>You have the right to access, correct, or delete your personal information. You can manage your preferences in your account settings.</p>
                        </div>
                        <div className={styles.modalActions}>
                            <button
                                className={styles.saveBtn}
                                onClick={() => setShowPrivacyModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Account Modal */}
            {showDeleteModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2>Delete Account</h2>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowDeleteModal(false)}
                            >
                                <i className="lni lni-close"></i>
                            </button>
                        </div>
                        <div className={styles.modalContent}>
                            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
                            <p>All your data, including booking history and favorites, will be permanently removed.</p>
                        </div>
                        <div className={styles.modalActions}>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className={styles.dangerBtn}
                                onClick={handleDeleteAccount}
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Settings

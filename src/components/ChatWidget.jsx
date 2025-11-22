import React, { useState } from 'react'
import styles from './ChatWidget.module.css'

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm your Eventify AI assistant. How can I help you today?", sender: 'bot' }
    ])
    const [inputValue, setInputValue] = useState('')

    const handleSend = () => {
        if (!inputValue.trim()) return

        const newMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user'
        }

        setMessages([...messages, newMessage])
        setInputValue('')

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "I'm here to help you discover events, book tickets, and answer any questions about Eventify!",
                sender: 'bot'
            }
            setMessages(prev => [...prev, botResponse])
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <div className={styles.headerInfo}>
                            <div className={styles.avatar}>
                                <i className="lni lni-robot"></i>
                            </div>
                            <div>
                                <h3>Eventify AI</h3>
                                <span className={styles.status}>
                                    <span className={styles.statusDot}></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            <i className="lni lni-close"></i>
                        </button>
                    </div>

                    <div className={styles.chatMessages}>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`${styles.message} ${message.sender === 'bot' ? styles.botMessage : styles.userMessage}`}
                            >
                                {message.sender === 'bot' && (
                                    <div className={styles.botAvatar}>
                                        <i className="lni lni-robot"></i>
                                    </div>
                                )}
                                <div className={styles.messageContent}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.chatInput}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className={styles.sendBtn} onClick={handleSend}>
                            <i className="lni lni-telegram-original"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* Chat Bubble Button */}
            <button
                className={`${styles.chatBubble} ${isOpen ? styles.hidden : ''}`}
                onClick={() => setIsOpen(true)}
            >
                <i className="lni lni-comments"></i>
                <span className={styles.badge}>AI</span>
            </button>
        </>
    )
}

export default ChatWidget

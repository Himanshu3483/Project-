import React, { useState } from 'react';

const Help = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "How do I create a new task?",
      answer: "To create a new task, go to the Task Manager page and fill out the form at the top of the page. Enter the task name, due date, and priority, then click 'Add Task.'"
    },
    {
      question: "How can I join a support group?",
      answer: "Navigate to the Support Network page, browse the available groups, and click the 'Join Group' button next to the group you'd like to join."
    },
    {
      question: "How do I set a reminder?",
      answer: "Go to the Reminders page, fill out the form with your reminder title and date/time, then click 'Add Reminder.'"
    },
    {
      question: "Can I change my notification settings?",
      answer: "Yes, you can customize your notification preferences in the Settings page. You can choose to receive notifications via email, push notifications, or SMS."
    }
  ];

  return (
    <div className="page-container">
      <h1>Help Center</h1>
      <p>Find answers to common questions below. If you can't find what you're looking for, please contact our support team.</p>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              className="faq-question"
            >
              {faq.question}
              <span className="faq-toggle">{activeQuestion === index ? '−' : '+'}</span>
            </h3>
            {activeQuestion === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="contact-support">
        <h2>Need more help?</h2>
        <p>If you couldn't find the answer you were looking for, please don't hesitate to reach out to our support team.</p>
        <a href="mailto:support@example.com" className="btn">Contact Support</a>
      </div>
    </div>
  );
};

export default Help;

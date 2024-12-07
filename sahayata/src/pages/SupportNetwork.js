import React from 'react';

const SupportNetwork = () => {
  const supportGroups = [
    { name: "Anxiety Support", description: "A group for people dealing with anxiety.", members: 150 },
    { name: "Heartbreak Recovery", description: "Support for those going through a breakup or divorce.", members: 98 },
    { name: "Chronic Pain Management", description: "A community for individuals managing chronic pain.", members: 203 },
    { name: "Career Transition", description: "Support for those changing careers or job hunting.", members: 175 },
  ];

  return (
    <div className="page-container">
      <h1>Support Network</h1>
      <p className="intro">Join a support group to connect with others facing similar challenges.</p>
      <div className="grid">
        {supportGroups.map((group, index) => (
          <div key={index} className="card support-group">
            <h2>{group.name}</h2>
            <p>{group.description}</p>
            <p className="members">Members: {group.members}</p>
            <button className="btn join-btn">Join Group</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportNetwork;

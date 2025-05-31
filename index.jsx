import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: '#007BFF' }}>Welcome to My Portfolio</h1>
            <p>Hello! I'm a passionate developer excited to share my work.</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}>💻 Skilled in Web Development</li>
                <li style={{ margin: '10px 0' }}>🔒 Interested in Cybersecurity</li>
                <li style={{ margin: '10px 0' }}>🌱 Continuously Learning</li>
            </ul>
            <p>Contact me at <a href="praveen.kumar1195@outlook.com">praveen.kumar1195@outlook.com</a></p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

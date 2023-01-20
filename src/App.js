import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState('career');

  return (
    <div className="App">
      <header className="App-header">
        <nav className='Header-Links'>
          <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/resume-2023.pdf?alt=media&token=6f7d574c-e235-464f-98fa-87c46b009da9">📝 Resume</a>
          <a className='Header-Link' target='_blank' href="https://github.com/Nitsorn">🐙 Github</a>
          <a className='Header-Link' target='_blank' href="https://www.linkedin.com/in/oat-wongsajjathiti/">🤝 LinkedIn</a>
          <a className='Header-Link' target='_blank' href="mailto:nitsorn.oat@gmail.com">📧 Email</a>
        </nav>
      </header>
      <div className='App-body'>
        <div className='App-Hero'>
          <div className='Definition'>
            <h1>👋 Hello! <br /> My name is <span className='Oat-underline'>Oat</span>
              <span className='NameExplain'>yes, like oatmeal. Not my real name but everyone calls me Oat. In fact, I was given this name even before I was born! And what is my real name? I guess you will never know...</span>
            </h1>

            <p>
              Thanks for visiting my website! I am a frontend engineer from Thailand 🇹🇭 living in Toronto, Canada 🇨🇦
            </p>
            <p>I enjoy dancing, drawing and finding good deals on Facebook marketplace 🕵️</p>
            <p>I'm also interested in self-development, Buddhism and staying active 💪</p>
          </div>

        </div>
        <img className='profile-pic' src='https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/profile.jpg?alt=media&token=fbcffb12-728c-49e6-940e-365add29c0d3'></img>
      </div>

      <div className='Tabs'>
        <button className={`Tab ${tab === 'career' && 'Tab--active'}`} onClick={() => setTab('career')}>
          🌱
          <span>Career</span>
        </button>
        <button className={`Tab ${tab === 'about' && 'Tab--active'}`} onClick={() => setTab('about')}>
          💁🏻
          <span>More about me</span>
        </button>
        <button className={`Tab ${tab === 'projects' && 'Tab--active'}`} onClick={() => setTab('projects')}>
          🖌️
          <span>Side projects</span>
        </button>
        <button className={`Tab ${tab === 'blogs' && 'Tab--active'}`} onClick={() => setTab('blogs')}>
          📝
          <span>(Really old) Blogs</span>
        </button>
      </div>

      <div className='Tab-Content'>
        {
          tab === 'career' && (
            <div>
              <h2>🌱 My Career</h2>
              <p>
                I am a self-taught frontend engineer with eight years of experience. I graduated with a Chemical Engineering degree (from McGill University in Montreal, Canada), immediately realizing it was not for me, and took a year to learn how to code on my own (while moving to a Vancouver, crashing at a friend's place and working part-time as a sever).
              </p>
              <p>
                My first job was at a seven-people tech agency, where I was hired as an office manager/social media manager/graphic designer. I slowly proved my worth and showed interest in frontend development, and within 2 months I officially became a software engineer.
              </p>
              <p>
                For the next two years, I worked as the only engineer at a couple 2-5 people pre-seed startups. These years showed me the challenges in building a company, but also gave me an opportunity to gain high-level businss knowledge and ability to build fast, be versatile and adaptable to changing product requirements. Unfortunately, all the companies eventually failed to raise funds and had to shut down.
              </p>
              <p>
                I then decided to find a more stable job where I can learn from others. I applied to Streamlabs through Angelist, and got offered a position (by mistake, but thats another story...) of a junior frontend engineer.
              </p>
              <p>
                While my self-taught technical skills were below others, I demonstrated my hunger quickly and gained the respect of my teammates and the CTO (who eventually became engineer I work closey with the most). The work ethics and soft-skills gained through teaching myself and working by myself made me highly impactful and reliable. In my four years at Streamlabs, I grew from a junior frontend engineer to become the Head of Frontend Engineering for their web platform, overseeing many of our products and directly up to seven engineers across the organization.
              </p>
              <p>
                After giving four years to Streamlabs, I wanted to switch company to challenge myself further technically. I decided to willingly step down from my managerial role and go back to full individual contributor role, and search for a late-stage startup with top-tier ex-FAANG engineers in a complex industry. After months of interview, I decided to join Bolt Financials in the e-commerce space as a senior frontend engineer.
              </p>
            </div>
          )
        }
      </div>
      <footer>
        <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/resume-2023.pdf?alt=media&token=6f7d574c-e235-464f-98fa-87c46b009da9">📝 Resume</a>
        <a className='Header-Link' target='_blank' href="https://github.com/Nitsorn">🐙 Github</a>
        <a className='Header-Link' target='_blank' href="https://www.linkedin.com/in/oat-wongsajjathiti/">🤝 LinkedIn</a>
        <a className='Header-Link' target='_blank' href="mailto:nitsorn.oat@gmail.com">📧 Email</a>
      </footer>
    </div>
  );
}

export default App;

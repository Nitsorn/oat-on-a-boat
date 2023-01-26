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
              Thanks for visiting my website! I am a front-end engineer from Thailand 🇹🇭 living in Toronto, Canada 🇨🇦
            </p>
            <p>I enjoy dancing, drawing and finding good deals on Facebook marketplace 🕵️</p>
            <p>I'm also interested in self-development, Buddhism and staying active 💪</p>
          </div>

        </div>
        <img className='profile-pic' src='https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/profile.jpg?alt=media&token=fbcffb12-728c-49e6-940e-365add29c0d3'></img>
      </div>

      <div className='Tabs'>
        <button className={`Tab ${tab === 'career' && 'Tab--active'}`} onClick={() => setTab('career')}>
          🚀
          <span>Career</span>
        </button>

        <button className={`Tab ${tab === 'projects' && 'Tab--active'}`} onClick={() => setTab('projects')}>
          🖌️
          <span>Side projects & hobbies</span>
        </button>
        <button className={`Tab ${tab === 'evolution' && 'Tab--active'}`} onClick={() => setTab('evolution')}>
          🌱
          <span>Evolution</span>
        </button>
        <button className={`Tab ${tab === 'blogs' && 'Tab--active'}`} onClick={() => setTab('blogs')}>
          📝
          <span>(Really old) Blogs</span>
        </button>
        <button className={`Tab ${tab === 'about' && 'Tab--active'}`} onClick={() => setTab('about')}>
          💁🏻
          <span>More about me</span>
        </button>
      </div>

      <div className='Tab-Content'>
        {
          tab === 'career' && (
            <div>
              <h2>🚀 Career</h2>
              <p>
                I am a self-taught front-end engineer with eight years of experience. I graduated with a Chemical Engineering degree (from McGill University in Montreal, Canada), immediately realizing it was not for me, and took a year to learn how to code on my own (while moving to Vancouver, crashing at a friend's place and working part-time as a server).
              </p>
              <p>
                My first job was at a seven-people tech agency, where I was hired as an office manager/social media manager/graphic designer. I slowly proved my worth and showed interest in front-end development, and within 2 months I officially became a software engineer.
              </p>
              <p>
                For the next two years, I worked as the only engineer at a couple of 2-5 people pre-seed startups. These years showed me the challenges of building a company but also allowed me to gain high-level business knowledge and the ability to build fast, be versatile, and be adaptable to changing product requirements. Unfortunately, all the companies eventually failed to raise funds and had to shut down.
              </p>
              <p>
                I then decided to find a more stable job where I can learn from others. I applied to <a target='_blank' href='https://streamlabs.com'>Streamlabs</a> (livestreaming) through Angelist and got offered a position (by mistake, but that's another story...) as a junior front-end engineer.
              </p>
              <p>
                While my self-taught technical skills were below others, I demonstrated my hunger quickly and gained the respect of my teammates and the CTO (who eventually became the engineer I work closely with the most). The work ethic and soft skills gained through self-learning and working as the only engineer made me highly impactful and reliable. In my four years at Streamlabs, I grew from a junior front-end engineer to become the Head of front-end Engineering for their web platform, overseeing many of our products and directly managing up to seven engineers across the organization.
              </p>
              <p>
                In 2022, after giving four years to Streamlabs, I wanted to switch companies to challenge myself further technically. I willingly decided to step down from my managerial role and go back to a full individual contributor role, and search for a late-stage startup with top-tier ex-FAANG engineers in a technically challenging industry. After months of interviews, I decided to join <a target='_blank' href='https://bolt.com'>Bolt Financials</a> (e-commerce/checkout) as a senior front-end engineer, owning the front-end of one of the company's biggest bets for 2023. I am currently at Bolt.
              </p>
            </div>
          )
        }
        {
          tab === 'about' && (
            <div>
              <p>Curious? <a className='Header-Link' target='_blank' href="mailto:nitsorn.oat@gmail.com">📧 Email me </a> :)</p>
            </div>
          )
        }
        {
          tab === 'projects' && (
            <div>
              <h2>🖌️ Side projects</h2>
              <ul>
                <li>
                  🔗 <a href='https://oatonaboat' target={'_blank'}>Oat on a boat | Personal website (2023)</a> [<a href="https://github.com/Nitsorn/oat-on-a-boat" target={'_blank'}>Github</a>]
                </li>
                <li>
                  🔗 <a href='https://friendlyinvite.me' target={'_blank'}>Friendly | Plan & collaborate on your social events (2022)</a> [<a href="https://github.com/friendlyinvite-me/fe-friendly" target={'_blank'}>Github [frontend]</a>]
                </li>
                <li>
                  🔗 <a href='https://www.instagram.com/stylish.devs/' target={'_blank'}>Stylish.dev | Stylish & altruistic programmer fashion (2020-2021)</a>
                </li>
              </ul>
              <h2>🏌️‍♂️ Hobbies</h2>
              <ul>
                <li>
                  🔗 <a href='https://www.instagram.com/oat_draws/?hl=en' target={'_blank'}>Oat draws</a>
                </li>
                <li>
                  Hip-hop Dance
                </li>
                <li>
                  Golf
                </li>
              </ul>
              <h2>🤔 Things I'm learning </h2>
              <ul>
                <li>🎸 Guitar</li>
                <li>🕺 Salsa & Bachata Dance</li>
                <li>🤿 Scuba diving</li>
              </ul>

            </div>
          )
        }
        {
          tab === 'evolution' && (
            <div>
              <h2>🌱 Evolution</h2>
              <h4>Resumes in chronological order</h4>
              <div>
                <ul>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/resume-2023.pdf?alt=media&token=6f7d574c-e235-464f-98fa-87c46b009da9">📝 2023 (Current)</a>
                  </li>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/2022.pdf?alt=media&token=a63277c1-2857-4d86-9555-298184194f0e">📝 2022</a>
                  </li>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/2021.pdf?alt=media&token=6f9acbde-4624-431b-8cc2-b8eabae1ffa2">📝 2021</a>
                  </li>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/2019.pdf?alt=media&token=e10d6a5c-aa4e-4538-bffb-dc7b2fd066c6">📝 2019</a>
                  </li>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/2018.pdf?alt=media&token=83075b57-3e5c-4f80-9c94-20b319b4afb9">📝 2018</a>
                  </li>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/2017.pdf?alt=media&token=e55c0f32-c113-4d23-ac26-67970837caa9">📝 2017</a>
                  </li>
                  <li>
                    <a className='Header-Link' target='_blank' href="https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/2015.pdf?alt=media&token=204af636-dbde-4a44-94aa-8997e0a80a5c">📝 2015</a>
                  </li>
                </ul>
              </div>
              <p>
                Like my resumes and want me to help design yours? <a href="mailto:nitsorn.oat@gmail.com">Email me :)</a>
              </p>
            </div>
          )
        }
        {
          tab === 'blogs' && (
            <div>
              <h2>📝 (Really old) Blogs</h2>
              <a href='https://medium.com/@oat-on-a-boat/' target={'_blank'}>https://medium.com/@oat-on-a-boat/</a>
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

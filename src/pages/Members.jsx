import React, { useState } from 'react';

const membersData = {
  "founders": {
    "": [
      { "name": "Juan Howard Wijaya", "role": "", "image": "/projectspark-pku/Images/Members/juan1.jpg" },
      { "name": "Kenan Lowelim Bendiclano", "role": "", "image": "/projectspark-pku/Images/Members/kenan1.jpg" },
      { "name": "Oliver Keith Wijaya", "role": "", "image": "/projectspark-pku/Images/Members/oliver1.jpg" },
      { "name": "Neilson Huang", "role": "", "image": "/projectspark-pku/Images/Members/neilson1.jpg" },
      { "name": "Jordyn Anderson Wu", "role": "", "image": "/projectspark-pku/Images/Members/jordyn1.jpg" }
    ]
  },
  "25/26": {
    "Main Team": [
      { "name": "Juan Howard Wijaya", "role": "Leader", "image": "/projectspark-pku/Images/Members/juan1.jpg" },
      { "name": "Kenan Lowelim Bendiclano", "role": "Vice Leader", "image": "/projectspark-pku/Images/Members/kenan1.jpg" },
      { "name": "Gessy Sandra", "role": "1st Secretary", "image": "/projectspark-pku/Images/Members/gessy1.jpg" },
      { "name": "Queensyla Valerie Hansen", "role": "2nd Secretary", "image": "/projectspark-pku/Images/Members/queensyla1.jpg" },
      { "name": "Oliver Keith Wijaya", "role": "1st Treasurer", "image": "/projectspark-pku/Images/Members/oliver1.jpg" },
      { "name": "Neilson Huang", "role": "2nd Treasurer", "image": "/projectspark-pku/Images/Members/neilson1.jpg" }
    ],
    "Media & Public Relations": [
      { "name": "Jordyn Anderson Wu", "role": "Head of Media & Public Relations", "image": "/projectspark-pku/Images/Members/jordyn1.jpg" },
      { "name": "Clarissa Wu", "role": "Member", "image": "/projectspark-pku/Images/Members/clarissa1.jpg" },
      { "name": "Audrey Keira Chan", "role": "Member", "image": "/projectspark-pku/Images/Members/audreykc1.jpg" },
      { "name": "Angelina Lisvia", "role": "Member", "image": "/projectspark-pku/Images/Members/lisvia1.jpg" },
      { "name": "Sherin Tjaya Indera", "role": "Member", "image": "/projectspark-pku/Images/Members/sherin1.jpg" },
      { "name": "Audrey Olivia", "role": "Member", "image": "/projectspark-pku/Images/Members/audreyo1.jpg" },
      { "name": "Natalie Angeline Gunawan", "role": "Member", "image": "/projectspark-pku/Images/Members/natalie1.jpg" },
      { "name": "Karen", "role": "Member", "image": "/projectspark-pku/Images/Members/karen1.jpg" },
      { "name": "Caren Ivonny", "role": "Member", "image": "/projectspark-pku/Images/Members/caren1.jpg" }
    ],
    "Logistics & Operations": [
      { "name": "Jason Wirio", "role": "Head of Logistics & Operations", "image": "/projectspark-pku/Images/Members/jason1.jpg" },
      { "name": "Verrell Miguel Wijaya", "role": "Member", "image": "/projectspark-pku/Images/Members/verrell1.jpg" },
      { "name": "Joey Richard Sahala Sianipar", "role": "Member", "image": "/projectspark-pku/Images/Members/joey1.jpg" },
      { "name": "Fan Helsen", "role": "Member", "image": "/projectspark-pku/Images/Members/fan1.jpg" },
      { "name": "Louis Garry", "role": "Member", "image": "/projectspark-pku/Images/Members/louis1.jpg" },
      { "name": "Christian Marcelino Delamora", "role": "Member", "image": "/projectspark-pku/Images/Members/christian1.jpg" },
      { "name": "Suyankiadi", "role": "Member", "image": "/projectspark-pku/Images/Members/suyankiadi1.jpg" },
      { "name": "Travis Tandrew", "role": "Member", "image": "/projectspark-pku/Images/Members/travis1.jpg" },
      { "name": "Edward Pangestu", "role": "Member", "image": "/projectspark-pku/Images/Members/edward1.jpg" },
      { "name": "Joyceline Mint Wijaya", "role": "Member", "image": "/projectspark-pku/Images/Members/joyceline1.jpg" },
      { "name": "Abelia Calista Pasaribu", "role": "Member", "image": "/projectspark-pku/Images/Members/abelia1.jpg" },
      { "name": "Celvia Bella", "role": "Member", "image": "/projectspark-pku/Images/Members/celvia1.jpg" }
    ],
    "Documentation": [
      { "name": "Jonathan Huang", "role": "Head of Documentation", "image": "/projectspark-pku/Images/Members/jonathan1.jpg" },
      { "name": "Nico Ezekiel", "role": "Member", "image": "/projectspark-pku/Images/Members/nico1.jpg" },
      { "name": "Naura Nadine", "role": "Member", "image": "/projectspark-pku/Images/Members/naura1.jpg" },
      { "name": "Jayden Laurenz", "role": "Member", "image": "/projectspark-pku/Images/Members/jayden.jpg" },
      { "name": "Trixie Oshana Kho", "role": "Member", "image": "/projectspark-pku/Images/Members/trixie1.jpg" }
    ],
    "Technical": [
      { "name": "Steven Teguh Kandiawan", "role": "Head of Technical", "image": "/projectspark-pku/Images/Members/steven1.jpg" },
      { "name": "Freddy Limothie", "role": "Member", "image": "/projectspark-pku/Images/Members/freddy1.jpg" }
    ]
  },
  "26/27": {
    "Strategy": []
  }
};

function Members() {
  const [selectedYear, setSelectedYear] = useState('25/26');

  const yearsToRender = selectedYear === 'all' ? Object.keys(membersData) : [selectedYear];

  return (
    <main className="members">
      <h1>Meet the Team</h1>

      <nav className="year-filter">
        <button onClick={() => setSelectedYear('founders')}>Founders</button>
        <button onClick={() => setSelectedYear('25/26')}>25/26</button>
        <button onClick={() => setSelectedYear('26/27')}>26/27</button>
        <button onClick={() => setSelectedYear('all')}>All</button>
      </nav>

      <section id="members-container">
        {yearsToRender.map(y => (
          <div key={y} className="year-group">
            <h2>{y === 'founders' ? 'Founders' : `Team of ${y}`}</h2>
            
            {Object.keys(membersData[y]).map(division => {
              const members = membersData[y][division].filter(m => m.name);
              if (members.length === 0) return null;

              return (
                <React.Fragment key={division}>
                  {division.trim() !== '' && <h3>{division}</h3>}
                  <div className="member-grid">
                    {members.map((member, i) => {
                      const roleLower = member.role ? member.role.toLowerCase() : '';
                      let cardClass = 'member-card';
                      if (roleLower.includes('vice leader')) {
                        cardClass += ' vice-leader';
                      } else if (roleLower.includes('leader') || roleLower.includes('head')) {
                        cardClass += ' leader';
                      }

                      return (
                        <div key={i} className={cardClass}>
                          <div className="card-inner">
                            <img src={member.image || '/projectspark-pku/Images/placeholder.jpg'} alt={member.name} />
                            <h4>{member.name}</h4>
                            {member.role && <p>{member.role}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Members;

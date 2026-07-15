import React, { useEffect, useState } from 'react';
import { supabase } from "../supabaseClient.js";
import { getImagePath } from "../utils/imagePath.js";

function Members() {
  const [selectedYear, setSelectedYear] = useState('25/26');
  const [membersData, setMembers] = useState({})

  const fetchMembers = async () => {
    const { error, data } = await supabase
      .from("members")
      .select("*, department(name, cohort)")
    
    if (error) {
      console.error("Error reading task : ", error.message)
      return;
    }

    // group is an object to format the data into json-like form
    const group = {}

    data.forEach(member => {
      const division = member.department.name;
      const cohort = member.department.cohort;
      const isFounders = division === "Founders";

      // founders edge case
      const groupKey = isFounders ? "founders" : cohort;
      const divisionKey = isFounders ? "" : member.department.name;

      // if no cohort create one
      if (!group[groupKey]) group[groupKey] = {};

      // if no division create one
      if (!group[groupKey][divisionKey]) group[groupKey][divisionKey] = [];

      group[groupKey][divisionKey].push(member);
    });

    setMembers(group);
  };

  const baseUrl = import.meta.env.BASE_URL || '/';
  const placeholderPath = `${baseUrl}Images/placeholder.jpg`;
  const yearsToRender = selectedYear === 'all' ? Object.keys(membersData) : [selectedYear];

  useEffect(() => {
    fetchMembers();
  }, []);

  console.log(membersData);

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
          // y is a string for the year
          <div key={y} className="year-group">
            <h2>{y === 'founders' ? 'Founders' : `Team of ${y}`}</h2>
            
            {Object.keys(membersData[y] || {}).map(division => {
              const members = (membersData[y][division] || []).filter(m => m.name);
              
              // Sort members by role hierarchy
              members.sort((a, b) => {
                const roleA = a.role ? a.role.toLowerCase() : '';
                const roleB = b.role ? b.role.toLowerCase() : '';
                
                const getRank = (role) => {
                  if (role.includes('leader') || role.includes('head') || role.includes('president')) return 1;
                  if (role.includes('vice')) return 2;
                  if (role.includes('manager')) return 3;
                  return 4; // Member or other
                };
                
                return getRank(roleA) - getRank(roleB);
              });

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
                      } else if (roleLower.includes('leader') || roleLower.includes('head') || roleLower.includes('coordinator')) {
                        cardClass += ' leader';
                      }

                      return (
                        <div key={i} className={cardClass}>
                          <div className="card-inner">
                            <img
                              src={getImagePath(member.name)}
                              alt={member.name}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = placeholderPath;
                              }}
                            />
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

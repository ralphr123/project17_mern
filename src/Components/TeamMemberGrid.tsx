import React, { useState } from 'react';

// Components
import { TeamMember } from '.';
import TeamMembers from '../Data/TeamMembers.json';

const TeamMemberGrid = () => {
    const [id, setId] = useState<number>(-1);

    const handleOnClickTeamMember = (id: number): void => {
        setId(id);
        console.log(id);
    }

    return (
        <div className="team-member-grid" onClick={() => handleOnClickTeamMember(3)}>
            <div className="team-members mobile">
                <div className="team center">
                    <span>Executive Team</span>
                </div>
                <div className="grid full-size center-horizontal">
                    {TeamMembers.map((member) => {
                        return (
                            <TeamMember 
                                name={member.name}
                                jobTitle={member.jobTitle}
                                description={member.shortDescription}
                                src={member.src}
                                onClick={handleOnClickTeamMember}
                                key={member.id}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="our-team mobile">
                <div className="our-team-title center">
                    <span>Lorem Ips</span>
                </div>
                <div className="our-team-descr-cont center-horizontal">
                    <div className="our-team-descr">
                        <p>

                            Womens coats are often regarded as an investment piece-- something durable and lasting and expected to be worn for many years to come. 
                            As such, it's important that every coat purchase be treated with the long term in mind-- is this a style that i will like years from now; 
                            is it a style that will still be in years from now? Here at Ludvig, our coats and jackets range from timeless basics to expressive rarities. 
                            Jacket hunting is an enjoyable sport-- get your next timepiece here! <br/> <br/>

                            Coats for women are much like coats for men, but with a touch of lightness. One major investment piece for both sexes is the leather coat, 
                            also known as leather jackets or the biker jacket. Which color of leather would most suit you? A black leather jacket would automatically 
                            match an outfit of any design, so if you like to go all-out with colors it might be a good way to offset that. A brown leather jacket has 
                            a warmer, vintage feel harkening back to Amelia Earheart. For the less conventional, there are also white leather jacket and red leather
                            jacket options.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberGrid;
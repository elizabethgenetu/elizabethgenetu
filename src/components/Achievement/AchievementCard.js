import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineVerified } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({ id, title, details, date, field, image }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard: {
            backgroundColor: theme.quaternary,
            // "&:hover": {
            //     backgroundColor:theme.primary50,
            // },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
            <div key={id} className={`achievement-card ${classes.achievementCard}`}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <br></br>
                        <p style={{ color: theme.tertiary }}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{ color: theme.primary }}>
                        <h5>{date}</h5>
                       
                            <AiOutlineVerified />
                            
                                <a key={id} href={field} target="_blank" rel="noreferrer" style={{ backgroundColor: theme.quaternary }}>
                                    <h5  style={{ color: theme.primary }}> Verified</h5>
                                </a>
                           

                        
                    </div>
                </div>
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
            </div>
        </Fade>

    )
}

export default AchievementCard

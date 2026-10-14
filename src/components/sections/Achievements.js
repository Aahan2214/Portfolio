import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAchievementsSection = styled.section`
  max-width: 700px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 15px;
      padding-left: 30px;
      font-size: var(--fz-lg);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 1.8;
      }

      .title {
        color: var(--lightest-slate);
      }

      .detail {
        color: var(--slate);
      }
    }
  }
`;

const Achievements = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const achievements = [
    { title: 'Tech Era 2.0', detail: '2nd Prize' },
    { title: 'Sports Meet (2022)', detail: 'Silver medal, and 1st place in Tug of War' },
    { title: 'Secured NCC C CERTIFICATE(2026)',detail: 'Attended many camps during NCC Tenure'},
    { title: 'Training Placement CR(2024-2026)',detail:'Corrdinated between the Placement dept and Academic dept'},
  ];

  return (
    <StyledAchievementsSection id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">Achievements</h2>

      <ul>
        {achievements.map((item, i) => (
            <li key={i}>
            <span className="title">{item.title}</span>
            {item.detail && (
              <span className="detail">
                {item.title ? ' — ' : ''}
                {item.detail}
              </span>
            )}
          </li>
        ))}
      </ul>
    </StyledAchievementsSection>
  );
};

export default Achievements;
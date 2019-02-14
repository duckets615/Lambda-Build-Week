import React from 'react';
import styled from 'styled-components';

import StoryCard from './StoryCard'

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const StoryContainer = props => {
    return(
        <CardContainer>
        {props.stories.map(story => {
            return <StoryCard key={story.id} story={story}/>
        })}
        </CardContainer>
    )
}

export default StoryContainer
import React from 'react'
import styled from 'styled-components';

const DiscoveryContainer = () => {
    const WelcomeMessage = styled.p`
        margin: auto 0;
        font-size: 0.9em;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
        `;
    return (
        <WelcomeMessage>Come join the fun! <br /> Chat with friends or meet new ones in one of our lively chat rooms.<br /> See you there! 🙋🏽‍♂️</WelcomeMessage>

    )
}

export default DiscoveryContainer;
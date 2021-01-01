import styled from 'styled-components/macro'
import Image from '../../assets/images/profileImg.png'

const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ProfileImg = styled.img`
    height: 5rem;
    border-radius: 50%;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

export default function Profile() {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>Pablo George</ProfileName>
        </Container>
    );
}
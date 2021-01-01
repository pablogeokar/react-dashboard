import styled from 'styled-components/macro'
import MenuItem from './MenuItem'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

export default function Menu() {
    return (
        <Container>
            <MenuItem title="Home" icon="home" />
            <MenuItem title="Deposits" icon="file-multiple" active />
            <MenuItem title="Offers" icon="gift" />
            <MenuItem title="Payments" icon="bank" />
            <MenuItem title="Settings" icon="cog" />            
        </Container>
    );
}
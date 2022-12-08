import { Container } from './components/Container';
import Content from './Content';
import './Styles.css';
import Time from './Time';
import { Button } from './components/Button';
import StatusBar from './StatusBar';
import StatusBarLoading from './StatusBarLoading';
import { Blackout } from './components/Blackout';
import ChooseTime from './ChooseTime';
import Header from './Header';
import Text from './Text';
import Input from './Input';
import Inputs from './Inputs';
import TextBeforeInput from './TextBeforeInput';
import ButtonsTime from './ButtonsTime';

const App = () => {
    return (
        <Container>
            <Blackout>
                <ChooseTime>
                    <Header>
                        <Text text="Time" />
                    </Header>
                    <Inputs>
                        <TextBeforeInput text="Hours:" />
                        <Input/>
                        <TextBeforeInput text="Minutes:" />
                        <Input/>
                        <TextBeforeInput text="Seconds:" />
                        <Input/>
                    </Inputs>
                    <ButtonsTime>
                        <Button>Apply</Button>
                        <Button>Cancel</Button>
                    </ButtonsTime>
                </ChooseTime>
            </Blackout>
            <Content>
                <Time text="00:00:00"></Time>
                    <Button className="buttonStart">Start</Button>
                    <Button className="buttonReset">Reset</Button>
                <StatusBar>
                    <StatusBarLoading />
                </StatusBar>
            </Content>
        </Container>
    );
}

export default App;

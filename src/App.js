import Container from './Container';
import Content from './Content';
import './Styles.css';
import Time from './Time';
import Buttons from './Buttons';
import ButtonStart from './ButtonStart';
import ButtonReset from './ButtonReset';
import StatusBar from './StatusBar';
import StatusBarLoading from './StatusBarLoading';
import Blackout from './Blackout';
import ChooseTime from './ChooseTime';
import Header from './Header';
import Text from './Text';
import Input from './Input';
import Inputs from './Inputs';
import TextBeforeInput from './TextBeforeInput';
import ButtonsTime from './ButtonsTime';
import ButtonApply from './ButtonApply';
import ButtonCancel from './ButtonCancel';

function App() {
  return (
      <Container>
          <Blackout>
              <ChooseTime>
                  <Header>
                      <Text text="Time"></Text>
                  </Header>
                  <Inputs>
                      <TextBeforeInput text="Hours:"></TextBeforeInput>
                      <Input></Input>
                      <TextBeforeInput text="Minutes:"></TextBeforeInput>
                      <Input></Input>
                      <TextBeforeInput text="Seconds:"></TextBeforeInput>
                      <Input></Input>
                  </Inputs>
                  <ButtonsTime>
                      <ButtonApply text="Apply"></ButtonApply>
                      <ButtonCancel text="Cancel"></ButtonCancel>
                  </ButtonsTime>
              </ChooseTime>
          </Blackout>
        <Content>
            <Time text="00:00:00"></Time>
                <Buttons>
                    <ButtonStart text="Start"></ButtonStart>
                    <ButtonReset text="Reset"></ButtonReset>
                </Buttons>
            <StatusBar>
                <StatusBarLoading></StatusBarLoading>
            </StatusBar>
        </Content>
      </Container>
  );
}

export default App;

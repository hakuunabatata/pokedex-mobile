import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #fff;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  background-color: #1a1a1a;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PageButton = styled.TouchableOpacity`
  background-color: #1a1a1a;
  width: 50%;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const DisabledButton = styled.View`
  background-color: #a1a1a1;
  width: 50%;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const PageButtonText = styled.Text`
  color: #ffffff;
`;

export const ScrollContainer = styled.ScrollView`
  width: 90%;
`;

export const PokeContainer = styled.TouchableOpacity`
  width: 90%;
  height: 120px;
  border-radius: 20px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin: 2.5px;
`;

export const PokeInfo = styled.View``;

export const PokeNumber = styled.Text``;

export const PokeTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  padding-left: 20px;
`;

export const PokeImage = styled.Image`
  height: 100px;
  width: 100px;
`;

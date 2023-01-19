import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
    width: 100%;
    background-color: ${({ theme}) => theme.COLORS.GRAY_700};

    flex-direction: row;
    justify-content: center;

    border-radius: 6px;
`;
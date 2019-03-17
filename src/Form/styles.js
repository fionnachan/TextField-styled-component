import styled from 'styled-components';

import { TextField } from '../../components/TextField/';

const StyledTextField = styled(TextField)`
  border-width: 2px;
  border-style: dashed;
  border-color: #1166ff;
  box-shadow: 0 4px 4px #1166ff;
  outline: none;
`

const FormRow = styled.div`
  width: 500px;
  margin: 20px auto;
`

export {
  StyledTextField,
  FormRow
};
import styled from "styled-components";
import AntSelect from "antd/lib/select";

export const SelectOption = styled(AntSelect.Option)`
  color: ${({ theme }) => theme.primaryPalette.colors.font1Light};
`;

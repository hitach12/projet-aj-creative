import styled from "@emotion/styled";

export const MainLayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const DashboardLayoutWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "topbar topbar topbar topbar topbar topbar topbar topbar"
    "sidebar content content content content content content content";
  gap: 4px;
  /* align-items: center; */
  justify-content: center;
`;

export const TopBarWrapper = styled.div`
  grid-area: topbar;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SideBarWrapper = styled.div`
  grid-column-start: -1;
  grid-column-end: 1;
  grid-area: sidebar;
  background-color: #61d0d9;
  
`;

export const ContentWrapper = styled.div`
grid-column-start: 1;
  grid-column-end: 11;
  grid-area: content;
  flex: 11;
  background-color : #edf2f6;
  min-width : 500px;
  justify-content: space-between;
  align-items: center;

  
`;


export const ProfileWrapper = styled.div`
padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileAvatar = styled.div`
display: flex;
justify-content: center;
align-items: center;
  height: 50px;
  width: 50px;
  border: 1px solid #666;
  border-radius: 50%;
  margin-right: 16px;
`
import styled from "@emotion/styled";

export const FeedItemWrapper = styled.div`
  padding: 16px;
  border: 1px solid #f1ebeb;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 13px -6px rgba(0, 103, 184, 0.62);
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color:#fff;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CardSubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const CardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DividerWrapper = styled.hr``;

export const TitleAndAvatarHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  align-items: center;
  gap: 20px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  background-color: #666;
`;

export const TitleHeaderWrapper = styled.div`
  min-width: 100px;
  max-width: 250px;
  /* justify-content: space-around; */
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  font-weight: 900;
  font-size: 0.8rem;
`;
export const AuthorOrDateWrapper = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
`;

export const AuthorAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ActionsWrapper = styled.strong`
  font-size: 2rem;
  font-weight: 400;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleSubHeaderWrapper = styled.strong`
  font-size: 1.2rem;
`;

export const URLWrapper = styled.a`
  font-size: 1.2rem;
  color: green;
`;

import moment from "moment";
import React from "react";
import { FaHeart, FaMicrophone, FaShare } from "react-icons/fa";
import { IFeed } from "../../../types";
import Button from "../../../ui/Button";
import Media from "../media";
import {
  ActionsWrapper,
  AuthorAndDateWrapper,
  AuthorOrDateWrapper,
  AvatarWrapper,
  CardBodyWrapper,
  CardFooterWrapper,
  CardHeaderWrapper,
  CardSubHeaderWrapper,
  DividerWrapper,
  FeedItemWrapper,
  TitleAndAvatarHeaderWrapper,
  TitleHeaderWrapper,
  TitleSubHeaderWrapper,
  TitleWrapper,
  URLWrapper
} from "./styles";

interface IProps {
  feed: IFeed;
}
export default function FeedItem(props: IProps) {
  return (
    <FeedItemWrapper>
      <CardHeaderWrapper>
        <TitleAndAvatarHeaderWrapper>
          <AvatarWrapper />
          <TitleHeaderWrapper>
            <TitleWrapper>{props.feed.source.name}</TitleWrapper>
            <AuthorAndDateWrapper>
              <AuthorOrDateWrapper>{props.feed.author}</AuthorOrDateWrapper>
              <AuthorOrDateWrapper>
                {moment(props.feed.publishedAt).format("MMMM Do YYYY, h:mm a")}
              </AuthorOrDateWrapper>
            </AuthorAndDateWrapper>
          </TitleHeaderWrapper>
        </TitleAndAvatarHeaderWrapper>
        <ActionsWrapper>...</ActionsWrapper>
      </CardHeaderWrapper>
      <CardSubHeaderWrapper>
        <TitleSubHeaderWrapper>{props.feed.title}</TitleSubHeaderWrapper>
        <URLWrapper target="_blank" href={props.feed.url}>
          {props.feed.source.name}
        </URLWrapper>
      </CardSubHeaderWrapper>
      <CardBodyWrapper>
        <Media
          type={props.feed.source.name === "YouTube" ? "video" : "image"}
          src={
            props.feed.source.name === "YouTube"
              ? props.feed.url.replace("watch?v=","embed/")
              : props.feed.urlToImage
          }
        />
        <h5>{props.feed.content}</h5>
      </CardBodyWrapper>
      <DividerWrapper />
      <CardFooterWrapper>
        <Button variant="text">
          <FaHeart /> 25 likes
        </Button>
        <Button variant="outlined" color="divider" rouned>
          En parler <FaMicrophone />
        </Button>
        <Button variant="text">
          Partager <FaShare />
        </Button>
      </CardFooterWrapper>
    </FeedItemWrapper>
  );
}

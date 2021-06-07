import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IFeed } from "../../../types";
import api from "../../../utils/api";
import FeedItem from "../feed-item";
import { FeedWrappper } from "./styles";

export default function FeedList() {
  const [page, setPage] = useState(1);
  const [feeds, setFeeds] = useState<IFeed[]>([]);
    const [count, setCount] = useState(0)
  const fetchData = async () => {
    const { data } = await api.get(
      `https://newsapi.org/v2/top-headlines?country=ca&apiKey=b4709be0a02b4c7cbf0256c4bf9a6f00&page=${page}&pageSize=2`
    );
    if(page === 1) setCount(data.totalResults);
    setTimeout(() => {
        setFeeds([...feeds, ...data.articles]);
    }, 200)
  };

  useEffect(() => {
    fetchData()
  }, [page])

//   const articles = feeds.filter((item: IFeed) => item.urlToImage);

  const handleFetch = () => {
    setPage(page + 1);
  };
const styles = {alignItems: 'center',
justifyContent: 'center'
 }
 
  return (
      <InfiniteScroll 
        dataLength={count}
        next={handleFetch}
        hasMore={
            feeds.length <= count
        }
        loader={<div></div>}
        onScroll={handleFetch}
      >
            <FeedWrappper style ={styles} id="scrollableDiv">
        {feeds &&
          feeds.map((item: IFeed) => (
            <FeedItem key={item.content} feed={item} />
          ))}
    </FeedWrappper>
      </InfiniteScroll>
  );
}

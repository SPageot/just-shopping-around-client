import _ from "lodash";
import React from "react";
import useAPIFetch from "@/hooks/useAPIFetch";
import ScreenHeader from "@/components/ScreenHeader/ScreenHeader";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ScreenCard from "@/components/ScreenCard/ScreenCard";
import { ActivityIndicator } from "react-native";

const News = () => {
  const { newsData, loading } = useAPIFetch("http://localhost:3000/news");

  return (
    <ScreenContainer>
      <ScreenHeader padding>News</ScreenHeader>
      {!loading && newsData ? (
        <SectionContainer>
          {newsData.map((news) => (
            <ScreenCard
              key={news.url}
              cardImageSrc={news.urlToImage}
              description={news.description}
              urlToArticle={news.url}
            />
          ))}
        </SectionContainer>
      ) : (
        <SectionContainer center>
          <ActivityIndicator size='large' />
        </SectionContainer>
      )}
    </ScreenContainer>
  );
};

export default News;

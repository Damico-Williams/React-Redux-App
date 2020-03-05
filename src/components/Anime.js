import React from "react";
import { connect } from "react-redux";
import { getAnime } from "../actions";
import { Card, Image } from "semantic-ui-react";

const Anime = ({ getAnime, anime, nowLoading, error }) => {
  if (nowLoading) {
    return <h2>Getting Anime...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {anime.map(item => {
        return (
          <Card centered>
            <Image size="large" src={item.image_url} />
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
            </Card.Content>
          </Card>
        );
      })}

      <button onClick={getAnime}>Get Anime</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    anime: state.anime,
    nowLoading: state.nowLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getAnime })(Anime);

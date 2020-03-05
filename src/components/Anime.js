import React from "react";
import { connect } from "react-redux";
import { getAnime } from "../actions";
import { Card, Image, Button } from "semantic-ui-react";
import '../App.css';

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
          <Card centered color='teal'>
            <Image size="large" src={item.image_url} />
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
            </Card.Content>
          </Card>
        );
      })}

      <Button color='teal' onClick={getAnime}>Get Anime</Button>
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

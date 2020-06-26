import React from "react";
import { connect } from "react-redux";
import { getPokemon } from "../actions";
import { Card, Image, Button } from "semantic-ui-react";
import '../App.css';

const Pokemon = ({ getPokemon, pokemon, nowLoading, error }) => {
  if (nowLoading) {
    return <h2>Getting Pokemon...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {result.data.pokemon.map(card => {
        return (
          <Card centered color='teal'>
            <Image size="large" src={card.imageUrl} />
            <Card.Content>
              <Card.Header>{card.name}</Card.Header>
            </Card.Content>
          </Card>
        );
      })}

      <Button color='teal' onClick={getPokemon}>Get Pokemon</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    anime: state.pokemon,
    nowLoading: state.nowLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getPokemon })(Pokemon);
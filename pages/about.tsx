import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export const HERO_QUERY = gql`
  query GetCharacter($episode: Episode!) {
    hero(episode: $episode) {
      name
      id
      friends {
        name
        id
        appearsIn
      }
    }
  }
`;

export const withCharacter = graphql(HERO_QUERY, {
  options: () => ({
    variables: { episode: "JEDI" },
  }),
});

export default withCharacter(({ data: { loading, hero, error } }) => {
  if (loading) return <div>Loading</div>;
  if (error) return <h1>ERROR</h1>;
  return (
    <div>
      {hero &&
        <div>
          <h3>{hero.name}</h3>
          {hero.friends.map(friend =>
            <h6 key={friend.id}>
              {friend.name}:
              {" "}{friend.appearsIn.map(x => x.toLowerCase()).join(", ")}
            </h6>
          )}
        </div>}
    </div>
  )
})

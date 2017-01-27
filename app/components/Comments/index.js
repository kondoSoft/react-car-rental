/**
*
* Comments
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card, Image, Icon, Grid, Container } from 'semantic-ui-react'


function Comments(props) {
  console.log(props.comment.comments.description)
  return (


        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card className="backgroundCar spaceComillas">
            <Card.Content>
              <Card.Description>
                {props.comment.comments.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Image shape='circular' floated='left' size='mini' src={props.comment.photo} />
              <a>
                {props.comment.name}
              </a>
              <p>{props.comment.profession}</p>
            </Card.Content>
          </Card>
        </Grid.Column>



  );
}

Comments.propTypes = {

};

export default Comments;

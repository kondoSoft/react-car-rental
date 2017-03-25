/**
*
* Comments
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card, Image, Icon, Grid, Container } from 'semantic-ui-react'


function Comments(props) {
  return (

        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card className="backgroundCar spaceComillas">
            <Card.Content>
              <Card.Description>
                {props.comment.Comment}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Image shape='circular' floated='left' size='mini' alt='User Photo' src={`http://localhost:8000${props.comment.Photo}`} />
              <a>
                {props.comment.FullName}
              </a>
              <p>{props.comment.Job}</p>
            </Card.Content>
          </Card>
        </Grid.Column>



  );
}

Comments.propTypes = {

};

export default Comments;

/**
*
* CommentSlide
*
*/

import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'
// import styled from 'styled-components';


class CommentSlide extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      // <Grid.Column mobile={16} tablet={8} computer={16}>
      <div>
        <Card className="backgroundCar spaceComillas">
          <Card.Content>
            <Card.Description>
              {this.props.comment.Comment}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Image shape='circular' floated='left' size='mini' alt='User Photo' src={this.props.comment.Photo} />
            <a>
              {this.props.comment.FullName}
            </a>
            <p>{this.props.comment.Job}</p>
          </Card.Content>
        </Card>
      </div>
      // </Grid.Column>
    );
  }
}

CommentSlide.propTypes = {

};

export default CommentSlide;

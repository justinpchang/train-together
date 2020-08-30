import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';

const FeedCard = () => {
  return (
    <Row>
      <Card className='feed-card'>
        <Card.Body>
          <Card.Title>Exercise</Card.Title>
          <Card.Text>
            <p>Date: adslkfjal</p>
            <p>Description: lkfjaldf</p>
            <p>Rating: kdafjldkfja</p>
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default FeedCard;

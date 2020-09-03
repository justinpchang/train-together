import React from 'react';
import FeedCard from './FeedCard';

const Feed = (props) => {
  return (
    <div className='feed'>
      {
        props.cards.map((card, i) => {
          return (
            <FeedCard
              key={i}
              name={card.name}
              postTime={card.postTime}
              description={card.description}
              title={card.title}
              tags={card.tags}
              date={card.date}
              attending={card.attending}
              likes={Math.floor(Math.random() * 15)}
              comments={Math.floor(Math.random() * 15)}
              userId={props.userId}
              sessionId={card.sessionId}
              showSubmit={props.showSubmit}
              sessionPic={card.sessionPic}
              profilePic={card.profilePic}
            />
          )
        })
      }
    </div>
  );
};

export default Feed;
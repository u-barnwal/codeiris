import React from 'react';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Votes from './Votes';

function Post() {
  return (
    <div className="bg-white rounded-md p-4 flex">
      <Votes onUpVote={() => {}} onDownVote={() => {}}>
        0
      </Votes>

      <div className="ml-10 flex-1">
        <PostHeader
          user={{
            image:
              'https://i.pinimg.com/originals/10/18/55/101855f519ea89fc7e9a965a346a196f.jpg',
            name: 'Sheldon Cooper',
          }}
          className="mb-5"
        />

        <PostBody title="The Thespian Catalyst">
          Sheldon gives a lecture making his usual condescending comments.
          Meanwhile, the gang is enjoying the tweets of the people that attended
          Sheldon's lecture; all negative towards him from Twitter. When he
          arrives home, he expects the reaction to his lecture to be
          monumentally positive, but his friends proceed to read out some of the
          tweets. Later, at the Cheesecake Factory, Raj mentions how it's sad to
          "accidentally walk into a gay bar and have no one hit on you." This
          statement makes Leonard and Howard think Raj's deprivation of female
          company has caused some issues. Bernadette comforts and reassures Raj.
          Amy tries to cheer Sheldon up, but on failing that she proposes he
          take acting lessons as it is the responsibility of the teacher to
          "communicate as well as entertain and engage." Sheldon goes to Penny
          to ask for acting lessons; she agrees after he offers to pay her.
          Sheldon's first acting class in improvisation ends up stressing Penny,
          and in the second, they act out a script that Sheldon wrote based upon
          a fan fiction story when he was ten years old; "Where No Sheldon Has
          Gone Before." Penny takes the role of Mr. Spock, saying Sheldon needs
          to be out of his comfort zone so Sheldon plays his mother who is
          sending him off to the 23rd century at the request of Mr. Spock, who
          says that he is the best hope to bring peace to a vast and troubled
          galaxy. Eventually the script brings out very emotional feelings from
          Sheldon. He cries because in the play he doesn't want to get taken
          away. Penny calls his mother to help him settle down: "Hi, Mrs Cooper.
          It's Penny. Yeah, I think I broke your son". Then she has Sheldon talk
          to his mother, who begs her not to let Spock take him to the future.
          Raj has a daydream in which Howard has been offered a fellowship, but
          he has to leave the country and while he is away requests that Raj
          satisfies Bernadette's sexual needs; Raj willingly agrees to it. Later
          he daydreams that Howard is hit by a truck and is not going to make
          it, but is able to convey his last wish, which is for Raj to take care
          of Bernadette sexually; again he agrees. The final dream sees
          Bernadette approaches him infuriated, but the scene quickly changes
          into a Bollywood-style dance routine proclaiming their love to each
          other. Snapping out of each of these, Raj eventually comes to the
          conclusion that he is definitely not gay.
        </PostBody>
      </div>
    </div>
  );
}

export default Post;

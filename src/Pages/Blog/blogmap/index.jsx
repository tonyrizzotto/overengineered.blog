import Posts from '../../../posts';

const blogMap = [
  {
    metadata: {
      title: 'Amazon Gives No Breaks to Serverless',
      subTitle: 'Serverless is dead. Long live King Monolith... right?',
      date: 'May 7th, 2023',
      length: '🔥 🔥',
    },
    element: <Posts.NumberTwo />,
    path: 'no-breaks-from-amazon',
  },
  {
    metadata: {
      title: 'The Truth About "Full-Stack" Development',
      subTitle: 'This is no longer your daddys full-stack.',
      date: 'May 7th, 2023',
      length: '🔥 🔥 🔥',
    },
    element: <Posts.NumberOne />,
    path: 'the-truth-about-full-stack',
  },
];

export default blogMap;

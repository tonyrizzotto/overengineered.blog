import Posts from '../../../posts';

const blogMap = [
  {
    metadata: {
      title: 'Amazon Gives No Breaks to Serverless',
      subTitle: '..but then again why should they?',
      date: 'May 7th, 2023',
    },
    element: <Posts.NumberTwo />,
    path: '/blog/no-breaks-from-amazon',
  },
  {
    metadata: {
      title: 'Defining "Full-Stack"',
      subTitle: 'A totally honest view of what Full-Stack is in 2023.',
      date: 'May 7th, 2023',
    },
    element: <Posts.NumberOne />,
    path: '/blog/the-truth-about-full-stack',
  },
];

export default blogMap;

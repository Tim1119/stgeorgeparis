import React from 'react';
import PillContentPage from '../../components/PillContentPage';

export default function UnderstandingYourFaith() {
  return (
    <PillContentPage
      title="Understanding Your Faith"
      image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop"
      pills={[
        {
          id: 'library',
          label: 'Chaplaincy Library',
          paragraphs: [
            "The Chaplaincy Library is housed just off the side chapel and holds a growing collection of books on theology, prayer, church history and Christian living, available to borrow by anyone in the congregation.",
            'If you\u2019re looking for a place to start, ask the Chaplain or Administrator for a recommendation \u2014 the library is arranged informally and a personal pointer is often the fastest way in.',
            "To borrow a book, simply note it in the sign-out book kept on the shelf, and return it when you're done so others can enjoy it too.",
          ],
        },
        {
          id: 'diocese',
          label: 'Online Learning via the Diocese',
          paragraphs: [
            'The Diocese in Europe offers a range of online courses and resources for anyone wanting to deepen their understanding of the Christian faith, from introductory courses for newcomers to more in-depth theological study.',
            "These are designed to fit around busy lives and can be followed from home, at your own pace, either alongside a small group at St George's or independently.",
            'Speak to the Chaplain for current course recommendations and how to enrol.',
          ],
        },
      ]}
    />
  );
}

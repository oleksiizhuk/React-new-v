import { useState } from 'react';

export const UseVerb = () => {
  const [data, setData] = useState({})

  const verbObject = {
    begin:
    {
      id: 1,
      infinitive: 'begin',
      simple: 'began',
      participle: 'begun',
      translate: 'Починати'
    },
    run:
    {
      id: 2,
      infinitive: 'run',
      simple: 'ran',
      participle: 'run',
      translate: 'Бігти'
    },
    find:
    {
      id: 3,
      infinitive: 'find',
      simple: 'found',
      participle: 'found',
      translate: 'Знаходити'
    }
  };
};

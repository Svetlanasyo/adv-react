import React from 'react';
import { useLocation } from 'react-router';

const Search = () => {

  console.log(useLocation())
  console.log(useLocation().search)
  const query = new URLSearchParams(useLocation().search);
  ///about?id=1&q=adam
  const term = query.get('q');

  const returned = doSearch(term);


  return (
    <div>
      <h1>Search page</h1>
      <p>Results for {term}</p>
      <ul>
        {
          returned.map( t => (
            <li key={t}>{t}</li>
          ))
        }
      </ul>
    </div>
  )
  }
  
  const Items = [
    'Lorem Ipsum',
    'Ipsum Dipsum',
    'Foo Bar',
    'A little black cat',
    'A lazy fox',
    'A jumping dog'
  ];
  
  const doSearch = term => {
    if(!term) {
      return Items;
    }
    
    return Items.filter(
      item => item.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1
    );
  }
  
  
  export default Search;
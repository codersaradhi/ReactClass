import React from 'react'
import ReactDOM from 'react-dom/client'


// const story = React.createElement('p', 
    
//     {id:"heading",xyz:"abc also"},//where our html elements need attributes to that html element
    
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nulla officiis nostrum maxime excepturi quaerat harum ipsa nemo? Obcaecati eveniet qui quasi laudantium cumque aspernatur, illum quidem veniam ut! Consequuntur aliquid eos fuga aut mollitia nam illo quo, fugiat expedita pariatur deserunt, doloribus repellat perferendis culpa nulla assumenda ratione omnis! Laboriosam animi iure enim sapiente, rerum officiis explicabo tempore nam! Id, vitae?")
const parent = React.createElement('div',{id:"parent"},
    [React.createElement('div',{id:"child1"},
        [React.createElement('h1',{},'iam the h1 tag'),React.createElement('h2',{},'iam the h2 tag')]
    ),React.createElement('div',{id:"child2"},
        [React.createElement('h1',{},'iam the h1 tag'),React.createElement('h2',{},'iam the h2 tag')]
    )])
    console.log(parent) // this story is a object from react
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent); // this render function take this story object that will create a html tag or element to the document
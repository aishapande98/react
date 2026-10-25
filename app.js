
// const heading = React.createElement('h1', {id: 'heading'}, 'Hello React');
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'chiild'},
        
        React.createElement('h1', {}, 'H! tag')
    )
);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


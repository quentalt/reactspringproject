import React,{useState} from 'react';
import Form from './Form';
import ListContainer from './ListContainer';

let count =3;

const App = () => {

    const [value, setValue] = useState('');
    const [items,setItems] = useState([

        {

            id:1,
            text:'il n y pas de passion, il y a la serenite.'

        },

        {

                id:2,
                text: 'il n y a pas de chaos, il y a de l harmonie'

        }

    ]);

    const handleSubmit = e => {

        e.preventDefault();
        setItems([...items,{id: count, text: value}]);
        setValue('');
        count++;

    };

    return (

        <main className="container">
            <section className="row justify-content-center mt-3">
                <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
                 </section>
                 <section className="row justify-content-center mt-2">
                     <ListContainer items={items}/>
                     </section>
        </main>
    );

}

export default App;
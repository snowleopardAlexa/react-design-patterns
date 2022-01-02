import { SplitScreen } from './SplitScreen';
import './App.css';
import { RegularList } from './RegularList';
import { NumberedList } from './NumberedList';
import { SmallPersonListItem }  from './people/SmallPersonListItem';
import { LargePersonListItem }  from './people/LargePersonListItem';
import { SmallProductListItem }  from './products/SmallProductListItem';
import { LargeProductListItem }  from './products/LargeProductListItem';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: "red"}}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{backgroundColor: "blue"}}>{message}</h1>
}

const people = [{
  name: 'Alexa',
  age: 45,
  hairColor: 'blonde',
  hobbies: ['swimming', 'cats'],
}, 
{
  name: 'Robert',
  age: 45,
  hairColor: 'blonde',
  hobbies: ['swimming', 'cats'],
},
{
  name: 'Paul',
  age: 45,
  hairColor: 'blonde',
  hobbies: ['swimming', 'cats'],
}];

const products = [{
  name: 'Radio',
  price: '$450',
  description: 'huge lcd',
  raiting: 4.5,
}, 
{
  name: 'TV',
  price: '$450',
  description: 'huge lcd',
  raiting: 4.5,
},
{
  name: 'Bike',
  price: '$450',
  description: 'huge lcd',
  raiting: 4.5,
}];

function App() {
  return (
    <>
    <SplitScreen leftWeight={3} rightWeight={1}>
      <LeftHandComponent name="Alexa" />
      <RightHandComponent message="Hello" />
    </SplitScreen>
    <RegularList
     items={people}
     resourceName="person"
     itemComponent={SmallPersonListItem} 
    />
     <NumberedList
      items={people}
      resourceName="person"
      itemComponent={LargePersonListItem} 
    />
    <RegularList
     items={products}
     resourceName="product"
     itemComponent={SmallProductListItem} 
    />
     <NumberedList
     items={products}
     resourceName="product"
     itemComponent={LargeProductListItem} 
    />
   </>
  );
}

export default App;

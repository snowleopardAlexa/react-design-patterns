export const RegularList = ({ 
    items, 
    resourceName,
    itemComponent: ItemComponent,
 }) => {
     return (
         <>
           {items.map((item, i) => (
               <itemComponent key={i} {...{ [resourceName]: item}} />
           ))}
         </>
     )
 }
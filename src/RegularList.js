export const RegularList = ({ 
    items, 
    resourceName,
    itemComponent: itemComponent,
 }) => {
     return (
         <>
           {items.map((item, i) => (
               <itemComponent key={i} {...{ [resourceName]: item}} />
           ))}
         </>
     )
 }
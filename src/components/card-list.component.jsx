import React from 'react';
import '../card-list/card-list.styles.css'
import{Card} from '../components/card/card.component'
export const CardList=props=>{
    console.log(props);
return <div className="card-list">    {
    props.monster.map(monster=>(<Card key={monster.id} monster={monster}/>)
)}</div>;

}

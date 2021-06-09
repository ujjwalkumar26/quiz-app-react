import React from 'react';
import { useContext,useState } from "react";
import { QuizContext } from '../custom/contexts';
import {Input, Image, Button,Header} from 'semantic-ui-react';
import '../App.css';
function Home(){
    // eslint-disable-next-line
    const {status,setStatus,score,setScore,name,setName,category,setCategory} = useContext(QuizContext);
    var [selected,setSelected] = useState({first: false, second: false,third: false});
    function handleNamechange(event){
        setName(event.target.value);
    }
    return(
        <div className='Menu'>
                <h1 className='white'>Enter your name</h1>
                <Input required placeholder='Flamboyant Kumar' onChange={handleNamechange}/>

            <h3 className='white'>Select Category</h3>
            <Image.Group size='small'>
                <Image src={require('../images/quiztypes/1.png').default} onClick={()=>{setCategory(1);setSelected({first: true, second: false,third: false})}} disabled={selected.first} style={{width: '150px', height: '150px'}} rounded/>
                <Image src={require('../images/quiztypes/2.png').default} onClick={()=>{setCategory(2);setSelected({first: false, second: true,third: false})}} disabled={selected.second} style={{width: '150px', height: '150px'}} rounded/>
                <Image src={require('../images/quiztypes/3.png').default} onClick={()=>{setCategory(3);setSelected({first: false, second: false,third: true})}} disabled={selected.third} style={{width: '150px', height: '150px'}} rounded/>
            </Image.Group>
            {category===1 && <Header size='huge' color='pink'>Food</Header>}
            {category===2 && <Header size='huge' color='pink'>Blood health</Header>}
            {category===3 && <Header size='huge' color='pink'>Body metabolism</Header>}
            <Button size='massive' basic inverted color='purple' onClick={()=>{setStatus("quiz")}}>
             Start the Quiz
            </Button>
        
        </div>
    )
}
export default Home;
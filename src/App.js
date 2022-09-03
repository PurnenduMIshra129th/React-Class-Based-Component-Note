import logo from './logo.svg';
import './App.css';
import React from 'react';
import World from './components/FunctionAndClass';
import Hello from './components/jsxAndWithOutJsx';
import Likun from './components/propsUsing';
import State from './components/state';
import Counter from './components/setstate';
import Destructure from './components/destructuringOfpropsAndState';
import Event from './components/event';
import EventBinding from './components/eventBinding';
import MethodAsPropsParent from './components/methodAsPropsParent';
import Condition from './components/condition';
import Listrendering from './components/listrendering';
import IndexAsKey from './components/indexAsKey';
import Style1 from './components/style1';
import Style3 from './components/style3';
import './style4.css'
import styles from './style4.module.css'
import Form from './components/Form';
import Lifecycle from './components/Lifecycle';
import Fragment from './components/Fragment';
import FragmentTable from './components/FragmentTable';
import { Purecomp } from './components/PureComponent';
import PureComponent1 from './components/PureComponent1';
import Refs from './components/Refs';
import RefswithClass from './components/RefswithClass';
import RefsWithClassParent from './components/RefsWithClassParent';
import RefForwardingParent from './components/RefForwardingParent';
import Portal from './components/Portal';
import ErrorBoundryHeroName from './components/ErrorBoundryHeroName';
import ErrorBoundry from './components/ErrorBoundry';
import HigherOrderComponent from './components/HigherOrderComponent';
import HigherOrderComponentHover from './components/HigherOrderComponentHover';
import UpdatedComponent from './components/HigherOrderComponentConcept';
import RenderProps from './components/RenderProps';
import RenderPropsUser from './components/RenderPropsUser';
import RenderPropsCounter from './components/RenderPropsCounter';
import ContextC from './components/ContextC';
import { UserProvider } from './components/ContexrUser';
import HTTPGET from './components/HTTPGET';
import HTTPPost from './components/HTTPPost';
function App() {
  return (
    <div className="App">

      {/* <World /> */}



      {/* <Hello  />


     
      {/* <Likun name="b" heroName="superman" />  */}


      {/* <State /> */}



      {/* <Counter/> */}


      {/* <Destructure name ="purnendu" title="mishra"/> */}

      {/* <Event/> */}

      <EventBinding/>



      {/* <MethodAsPropsParent/>  */}

      {/* <Condition/> */}

      {/* <Listrendering/> */}

      {/* <IndexAsKey/> */}

      {/* <Style1  /> */}

      {/* <Style3/>
      <h1 className='error'> i am imported from style4.css</h1>
      <h1 className='right'> i am imported from a style module</h1> */}

      {/* <Form/> */}

      {/* <Lifecycle/> */}

      {/* <Fragment/> */}

      {/* <FragmentTable/> */}

      {/* <Purecomp/> */}
      {/* <PureComponent1/> */}

      {/* <Refs/> */}

      {/* <RefswithClass/> */}

      {/* <RefsWithClassParent/> */}

      {/* <RefForwardingParent/> */}

      {/* <Portal/> */}

       
      {/* <ErrorBoundry>
      <ErrorBoundryHeroName heroName ="Batman"/>
      <ErrorBoundryHeroName heroName ="superman"/>
      <ErrorBoundryHeroName heroName ="joker"/>
      </ErrorBoundry> */}

      {/* <HigherOrderComponent/>
      <HigherOrderComponentHover/> */}
      {/* <UpdatedComponent/> */}



      {/* <RenderProps/>
      <RenderPropsUser render={(IsLoggedIn )=> IsLoggedIn? "likun": "Purnendu"}/> */}
      {/* <RenderPropsUser name={(IsLoggedIn )=> IsLoggedIn? "likun": "Purnendu"}/> */}
      {/* <RenderPropsUser name="Purnendu"/> */}
      {/* <RenderPropsCounter render ={(count,IncrementCount)=><RenderProps count={count} IncrementCount={IncrementCount}/>}/> */}



      {/* <ContextC/> */}
      {/* step-2 give a value */}
      {/* <UserProvider value="Purnendu">
        <ContextC/>
      </UserProvider> */}
      {/* <ContextC/> */}

      {/* <HTTPGET/> */}
      {/* <HTTPPost/> */}
    </div>
  );
}

export default App;

import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import CountHook from './components/CountHooks'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import Table from './components/Table'
import ParentComponents from './components/ParentComponents'
import FocusInput from './components/FocusInput'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import OnMouseHover from './components/OnMouseHover'
import ComponentOne from './components/ComponentOne'
import {UserProvider} from './components/UserContext'
import Posts from './components/Posts'
import PostsForm from './components/PostsForm'
import HookCounter from './components/HookCounter';
import UseStateWithObject from './components/UseStateWithObject';
import UseStateWithArray from './components/UseStateWithArray';
import ClassCounterTwo from './components/ClassCounterTwo';
import UseEffectHook from './components/UseEffectHook';
import MouseMove from './components/MouseMove';
import MouseContainer from './components/MouseContainer';
import FetchDataWithHook from './components/FetchDataWithHook';
import ComponentA from './components/ComponentA';
import React,{useReducer} from 'react';
import UseMemoHook from './components/UseMemoHook';
import UseRefHook from './components/UseRefHook';
import UseRefHook2 from './components/UseRefHook2';
import UseReduceHook from './components/UseReduceHook';

import UseReducerHookWithObj from './components/UseReducerHookWithObj'
import ComponentAWithContext from './components/ComponentAWithContext';
import ComponentBWithContext from './components/ComponentBWithContext';
import CounterACustomHook from './components/CounterACustomHook';
import CounterBCustomHook from './components/CounterBCustomHook';
export const UserContext = React.createContext()
export const ProfileContext = React.createContext()
export const CountContext = React.createContext()

export const initialState = 0

export const reducer = (state,action)=>{
    switch(action){
        case 'increment' :
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countValue: count,countDispatch: dispatch}}>
    <div className="App">
      <CounterACustomHook></CounterACustomHook>
      <CounterBCustomHook></CounterBCustomHook>
{/*     
        <ComponentAWithContext>

        </ComponentAWithContext>
        <ComponentBWithContext>

        </ComponentBWithContext> */}
      {/* <UseReducerHookWithObj></UseReducerHookWithObj> */}
      {/* <UseReduceHook></UseReduceHook> */}
      {/* <UseMemoHook></UseMemoHook> */}
      {/* <UseRefHook></UseRefHook> */}
      {/* <UseRefHook2></UseRefHook2> */}
      {/* <UserContext.Provider value="saiful">
          <ProfileContext.Provider value="something is better then">
          <ComponentA></ComponentA>
          </ProfileContext.Provider>
      </UserContext.Provider> */}
      
      {/*<FetchDataWithHook></FetchDataWithHook>*/}
      {/*<MouseContainer></MouseContainer>*/}
      {/*<MouseMove></MouseMove>*/}
      {/* <UseStateWithArray></UseStateWithArray> */}
      {/* <ClassCounterTwo></ClassCounterTwo> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <PostsForm></PostsForm> */}
      {/* <HookCounter></HookCounter> */}
      {/* <UseStateWithObject></UseStateWithObject> */}
      {/* <Posts></Posts> */}
      {/* <UserProvider value="saiful">
        <ComponentOne></ComponentOne>
      </UserProvider> */}
    
      {/* <ClickCounter name="saiful"></ClickCounter>
      <OnMouseHover name="rafi"></OnMouseHover> */}
      {/* <ErrorBoundary>
        <Hero heroName="superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker"></Hero>
      </ErrorBoundary> */}
      {/* <FocusInput></FocusInput> */}
      {/* <ParentComponents></ParentComponents> */}
      {/* <Table></Table> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <Form></Form> */}
      {/* <StyleSheet primary={true}></StyleSheet>
      <Inline></Inline> */}
      {/* <NameList></NameList> */}
      {/* <Greet name="saiful" designation="student">
          <p>this is paragraph </p>
      </Greet>
      <Greet name="rakib" designation="teacher"></Greet>
      <Welcome name="messi" designation="footballer"></Welcome>
      <Welcome name="neymer" designation="footballer"></Welcome>
      */}
       {/* <Welcome name="messi" designation="footballer"></Welcome>  */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <CountHook></CountHook> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;

### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
- This handles client side and server side routing in react

- What is a single page application?
  Where the server sends all the html after the initial page load

- What are some differences between client side and server side routing?
- server side handles mapping between URL bar and page user sees via server and client side uses browser

- What are two ways of handling redirects with React Router? When would you use each?
  Using <Redirect> and .push method on history object
  use redirect for when user goes to a place they shouldnt 
  use .push method when user has completed an action 

- What are two different ways to handle page-not-found user experiences using React Router?
  Use redirect and the having the url be cleaned up
  Not using redirect and the url wouldnt be cleaned up
  

- How do you grab URL parameters from within a component using React Router?
  useParams() hook

- What is context in React? When would you use it?
  A way of sharing data across components, If something is created high up the and needed way down but not not needed 
  in between

- Describe some differences between class-based components and function
  components in React.
  Hooks allow you to use React without classes,
  Class-based components require render method
  Class-based components state is changed with the instance methode setState
  Hooks use useState() method to change state

- What are some of the problems that hooks were designed to solve?
  Repeating code and logic in the lifecycle of a component
  Sharing logic among components
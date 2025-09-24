// The array content 
import kickstartImage from '@/public/kickstart-react.jpg';
import debugImage from '@/public/debug-code.jpg';
import blueprintImage from "@/public/blueprint-component.jpg"
import stateImage from "@/public/state-mgmt-flow.jpg"
import hooksImage from '@/public/hooks.jpg';
import stylingImage from "@/public/styling.jpg"


export const cards = [
    {
     id : 1 , 
     src : kickstartImage , 
     alt : 'The kickstart image' , 
     title : 'kickstart with React Personal Intro ' , 
     description : 'Tallored guidance for total biginner in React'
    } , 

    {
     id : 2, 
     src : debugImage , 
     alt : 'The debug image' , 
     title : 'Debugging Your React Code  ' , 
     description : 'Stuck with a React bugs ? Let\'s squash it together .'
    } ,

    {
     id : 3, 
     src : blueprintImage, 
     alt : 'The blueprint image' , 
     title : 'React Component Best Practices ' , 
     description : 'Optimize and refactor your components .'
    } ,

    {
     id : 4, 
     src : stateImage  , 
     alt : 'The state image' , 
     title : 'Effective state Management Tactis ' , 
     description : 'Strategies to manage state efficiently .'
    } , 

    {
    id : 5, 
     src : hooksImage , 
     alt : 'The hooks image' , 
     title : 'Customs Hooks Creation  ' , 
     description : 'Craft your custom hooks .'
    } ,

     {
     id : 6, 
     src : stylingImage , 
     alt : 'The styling image' , 
     title : 'Styling Strategies in React' , 
     description : 'Discus and implement styling solutions.'
    } ,
    
]


export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
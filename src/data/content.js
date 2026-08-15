import { BriefcaseBusiness, Compass, Lightbulb, MessagesSquare, Users, Globe2, BadgeCheck, Mail } from 'lucide-react'

export const linkedIn = 'https://www.linkedin.com/in/glory-obinwokoye-%F0%9F%A6%84-45154418a/'
// TODO: Replace with Glory's approved email.
export const email = ''
export const nav = [{label:'Home',to:'/'},{label:'About',to:'/about'},{label:'Services',to:'/services'},{label:'Results',to:'/results'},{label:'Credentials',to:'/credentials'},{label:'Contact',to:'/contact'}]
export const services = [
 {title:'LinkedIn Profile Optimisation',text:'Refine the foundation of your professional presence so your profile communicates your value with clarity.',items:['Headline direction','About-section guidance','Profile positioning','Featured-section recommendations','Profile consistency review']},
 {title:'Personal Brand Strategy',text:'Shape a recognisable professional identity that brings your expertise, voice and audience into focus.',items:['Brand positioning','Audience clarity','Core message','Content themes','Professional identity direction']},
 {title:'LinkedIn Visibility Strategy',text:'Build a practical direction for showing up, engaging well and creating meaningful professional momentum.',items:['Visibility review','Content direction','Engagement strategy','Community-building approach','Consistency framework']},
 {title:'LinkedIn Coaching',text:'Get focused, personal guidance as you improve your confidence, content and LinkedIn presence.',items:['Personalised guidance','LinkedIn confidence','Content feedback','Profile improvement','Practical next steps']},
 {title:'Digital Opportunity Guidance',text:'Learn to recognise and communicate the value that opens useful doors in the digital world.',items:['Identifying digital opportunities','Communicating transferable value','Strengthening professional presence','Building useful online relationships']}
]
export const audiences = [{title:'Professionals',text:'Ready to make their expertise easier to recognise.',icon:BriefcaseBusiness},{title:'Entrepreneurs',text:'Building a credible voice around the work they lead.',icon:Compass},{title:'9–5ers',text:'Creating visibility beyond their job title.',icon:Lightbulb},{title:'People in the Diaspora',text:'Growing a connected, global professional presence.',icon:Globe2}]
export const values = ['Intentional Growth','Authentic Visibility','Continuous Learning','Meaningful Community']
export const social = [{label:'LinkedIn',href:linkedIn,icon:BadgeCheck},{label:'Email',href:`mailto:${email}`,icon:Mail}]
// TODO: Replace with verified LinkedIn recommendations. Do not publish draft content as testimonials.
export const testimonials = []

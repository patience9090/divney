import { BriefcaseBusiness, Compass, Lightbulb, Globe2, BadgeCheck, Mail } from 'lucide-react'

export const linkedIn = 'https://www.linkedin.com/in/glory-obinwokoye-%F0%9F%A6%84-45154418a/'
export const gyeeConsulting = 'https://www.gyeeconsulting.com'
// TODO: Replace with Glory's approved email.
export const email = ''
export const nav = [{label:'Home',to:'/'},{label:'About',to:'/about'},{label:'Services',to:'/services'},{label:'Results',to:'/results'},{label:'Credentials',to:'/credentials'},{label:'Contact',to:'/contact'}]
export const services = [
 {title:'Digital Business Coaching & Mentorship',text:'Get practical guidance to shape your business idea, clarify your offer and take consistent steps towards launching or improving your digital business.',items:['Skills and business idea assessment','Target customer and offer clarity','Business planning and launch direction','Implementation guidance and accountability','Sustainable working habits']},
 {title:'Remote Work Systems & Workflow Design',text:'Create a practical way to manage your work, clients and priorities wherever you are.',items:['Workflow assessment','Task and project organisation','Client communication processes','Repeatable routines and process documentation','Digital tool selection guidance']},
 {title:'Project Management & Operational Support',text:'Bring structure to educational, digital and operational projects through clear planning, coordination and communication.',items:['Project scope and delivery planning','Milestones and task coordination','Stakeholder communication','Progress tracking and reporting','Delivery and handover support']},
 {title:'LinkedIn & Personal Brand Support',text:'Strengthen the professional presence that supports your business, communicates your expertise and helps you build meaningful connections.',items:['Profile positioning','Personal brand messaging','Content direction','Networking and engagement guidance']}
]
export const audiences = [{title:'Diaspora Professionals',text:'Build a digital business that draws on your experience and supports your goals across borders.',icon:Globe2},{title:'9–5 Professionals',text:'Explore and develop a business alongside your job, with a realistic plan for your available time.',icon:BriefcaseBusiness},{title:'Entrepreneurs',text:'Clarify your offer and strengthen the systems that help you manage and grow your business.',icon:Compass},{title:'Beginners',text:'Start with your existing skills and interests, supported by practical guidance and clear next steps.',icon:Lightbulb}]
export const values = ['Intentional Growth','Authentic Visibility','Continuous Learning','Meaningful Community']
export const social = [{label:'LinkedIn',href:linkedIn,icon:BadgeCheck},{label:'Email',href:`mailto:${email}`,icon:Mail}]
// TODO: Replace with verified LinkedIn recommendations. Do not publish draft content as testimonials.
export const testimonials = []

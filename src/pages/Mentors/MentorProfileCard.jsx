import React from 'react'
import "./MentorsNew_Module_Ansh_New.css"
import SkillIcon from './skillIcon'
import { useNavigate } from 'react-router-dom'

const MentorProfileCard = ({item,index}) => {

    const navigate=useNavigate()
  return (
  <>
   <div className='mentors-page-card' key={index} id={index}>
    <div className='mentor-cardd'>
<div className='mentor-cardd-top-part'>
    <div className='mentor-cardd-top-part-left-col'>
    <div className='mentor-cardd-top-part-left-col-name-icon-cont'>
    <h4 className='mentor-cardd-top-part-left-col-title'>{item?.name}</h4> 
    <a className='MentorslinkedInSocialLink' href={item?.linkedin}><img src="./images/linkedinIcon.svg" alt="social-icon" /></a>
    </div>
       
        <p className='mentor-cardd-top-part-left-col-sub-title'>{item?.designation}</p>
        
    </div>
    <div className='mentor-cardd-top-part-right-col'>
        <img className='mentor-cardd-top-part-right-col-image' src={item?.image?item?.image:"https://firebasestorage.googleapis.com/v0/b/reverr-25fb3.appspot.com/o/Images%2FDefaultdp.png?alt=media&token=eaf853bf-3c60-42df-9c8b-d4ebf5a1a2a6"} alt="mentor-profile" />
    </div>
</div>

<div className='mentor-cardd-middle-part'>
    <p className='mentor-cardd-middle-part-intro'>{item?.about?item?.about.slice(0,180):"He's an entrepreneur who has mentored more than 1000 students, and is highly experienced in this field. He's an explorer and is extremely passionate about all his work."}</p>
</div>

<div className='mentor-cardd-skill-part'>
{item?.domain?.slice(0,4).map((skill)=>{
    return <>
    <div className='mentor-cardd-skill-part-skill-cont'>
        <div className='mentor-cardd-skill-part-skill-cont-skill-tag'><SkillIcon /></div>
        <p className='mentor-cardd-skill-part-skill-cont-skill name'>{skill}</p>
    </div> 
    </>
})}
    
</div>

<div className='mentor-cardd-bottom-part'>
    <div className='mentor-cardd-bottom-part-left-col'>
<h3 className='mentor-cardd-bottom-part-left-col-price-cont'>&#8377; {(item?.plans[0]/2)<=500?500:(item?.plans[0]/2)>500&&(item?.plans[0]/2)<=750?750:(item?.plans[0]/2)>750&&(item?.plans[0]/2)<=1000?1000:(item?.plans[0]/2)>1000&&(item?.plans[0]/2)<=1500?1500:item?.plans[0]/2} <span className='mentor-cardd-bottom-part-left-col-per-time'>/ 30 min</span></h3>
    </div>
    <div className='mentor-cardd-bottom-part-right-col'>
        <button onClick={()=>navigate('/schedule', {state:{mentor:item}})}className='mentor-cardd-bottom-part-right-col-schedule-btn'>Schedule</button>
    </div>
</div>


    </div>
</div>
  </>
  )
}

export default MentorProfileCard
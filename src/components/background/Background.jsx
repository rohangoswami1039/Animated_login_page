import React from "react"

//Importing the images 
import student from './../../assets/student.png'
import settings from './../../assets/settings.png'
import resource from './../../assets/resource.png'
import management from './../../assets/management.png'


import './Style.css';


function getlength(){
    const logo = document.querySelectorAll('#logo path')
    for(let i=0;i<logo.length;i++){
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
        console.log("Test for loop ")
    }
    console.log("Test for function")
    
}
function Background(){
    getlength()
    return (<>  
<div className="background_text">
<div className="bubbles">
<div className="Student_usage_text">
        <img id="student_logo" src={student}/>
        <div className="student_usage">
        It offers a collaborative workspace, hence customers can record and upload video messages and can share resources. <br/>
        It is straightforward and has a good interface design, informative reporting, options and takes intuitive actions. <br/>
        </div>
     </div>

     <div className="Student_usage_text">
        <div className="settings_usage">
        It is innovative, responsive, and is based on HTML 5 interface which supports many hardware devices. <br/> <br/>
        It can track an individual’s learning progress, and provide progress information with a robust reporting framework. <bt/>
        </div>
        <img id="student_logo" src={settings}/>
     </div>

     <div className="Student_usage_text">
        <img id="student_logo" src={resource}/>
        <div className="student_usage">
        It engages users with gamification, video streaming, mobile-friendly learning, and personalized dashboards. <br/> <br/>
        With Eduventure, the users are now able to enhance their skill set whenever they want according to their convenience. <br/>
        </div>
     </div>

     <div className="Student_usage_text">
        <div className="settings_usage">
        It offers Instructor-Led Training in a virtual environment along with assessments and quizzes to benchmark knowledge retention. <br/><br/>
        It offers customized learning paths, reports, and dashboards for reviewing performance and gaining sight of the learning impact.<br/><br/>
        </div>
        <img id="student_logo" src={management}/>
     </div>
  <div className="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>


  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>

</div>

     

</div>
<div class="nav">
    <div class="nav-header">
      <div class="nav-title">
     
    <svg id="logo" width="268" height="24" viewBox="0 0 368 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.3242 32H2.35938V3.99219H31.3242V7.99609H6.36328V27.9961H31.3242V32ZM27.9258 20.0078H8.35547V16.0039H27.9258V20.0078Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M68.1133 32H64.1094V13.9922H53.1133C52.1497 13.9922 51.2448 14.181 50.3984 14.5586C49.5651 14.9232 48.8359 15.4245 48.2109 16.0625C47.5859 16.6875 47.0911 17.4297 46.7266 18.2891C46.375 19.1354 46.1992 20.0404 46.1992 21.0039C46.1992 21.9674 46.375 22.8724 46.7266 23.7188C47.0911 24.5521 47.5859 25.2878 48.2109 25.9258C48.8359 26.5508 49.5651 27.0521 50.3984 27.4297C51.2448 27.7943 52.1497 27.9831 53.1133 27.9961H62.1172V32H53.1133C51.6029 32 50.1836 31.7135 48.8555 31.1406C47.5273 30.5547 46.3685 29.7669 45.3789 28.7773C44.4023 27.7747 43.6276 26.6094 43.0547 25.2812C42.4818 23.9401 42.1953 22.5143 42.1953 21.0039C42.1953 19.4935 42.4818 18.0742 43.0547 16.7461C43.6276 15.418 44.4023 14.2591 45.3789 13.2695C46.3685 12.2669 47.5273 11.4792 48.8555 10.9062C50.1836 10.3203 51.6029 10.0208 53.1133 10.0078H64.1094V2H68.1133V32Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M107.422 32H92.4219C90.9115 32 89.4922 31.7135 88.1641 31.1406C86.8359 30.5547 85.6771 29.7669 84.6875 28.7773C83.7109 27.7747 82.9362 26.6094 82.3633 25.2812C81.7904 23.9401 81.5039 22.5143 81.5039 21.0039V10.0078H85.5078V21.0039C85.5078 21.9674 85.6836 22.8724 86.0352 23.7188C86.3997 24.5521 86.8945 25.2878 87.5195 25.9258C88.1445 26.5508 88.8737 27.0521 89.707 27.4297C90.5534 27.7943 91.4583 27.9831 92.4219 27.9961H103.418V10.0078H107.422V32Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M147.668 10.0078L135.52 32H130.949L118.879 10.0078H123.547L133.234 27.8398L143 10.0078H147.668Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M183.969 17C183.969 17.9766 183.786 18.888 183.422 19.7344C183.057 20.5807 182.556 21.3229 181.918 21.9609C181.293 22.5859 180.551 23.0807 179.691 23.4453C178.845 23.8099 177.94 23.9922 176.977 23.9922H161.645C161.931 24.5781 162.289 25.1185 162.719 25.6133C163.148 26.1081 163.63 26.5312 164.164 26.8828C164.698 27.2344 165.277 27.5078 165.902 27.7031C166.54 27.8984 167.204 27.9961 167.895 27.9961H180.98V32H167.895C166.384 31.987 164.965 31.694 163.637 31.1211C162.309 30.5352 161.15 29.7474 160.16 28.7578C159.184 27.7552 158.409 26.5898 157.836 25.2617C157.263 23.9336 156.977 22.5143 156.977 21.0039C156.977 19.4935 157.263 18.0742 157.836 16.7461C158.409 15.418 159.184 14.2591 160.16 13.2695C161.15 12.2669 162.309 11.4792 163.637 10.9062C164.965 10.3203 166.384 10.0208 167.895 10.0078H176.977C177.94 10.0078 178.845 10.1901 179.691 10.5547C180.551 10.9193 181.293 11.4206 181.918 12.0586C182.556 12.6836 183.057 13.4193 183.422 14.2656C183.786 15.112 183.969 16.0234 183.969 17ZM176.977 20.0078C177.38 20.0078 177.764 19.9297 178.129 19.7734C178.493 19.6172 178.812 19.4023 179.086 19.1289C179.359 18.8555 179.574 18.5365 179.73 18.1719C179.887 17.8073 179.965 17.4167 179.965 17C179.965 16.5964 179.887 16.2122 179.73 15.8477C179.574 15.4831 179.359 15.1641 179.086 14.8906C178.812 14.6172 178.493 14.4023 178.129 14.2461C177.764 14.0768 177.38 13.9922 176.977 13.9922H167.895C167.009 13.9922 166.176 14.1484 165.395 14.4609C164.626 14.7734 163.936 15.2031 163.324 15.75C162.725 16.2839 162.224 16.9219 161.82 17.6641C161.43 18.3932 161.176 19.1745 161.059 20.0078H176.977Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M199.898 32H195.895V10.0078H210.895C212.405 10.0078 213.824 10.3008 215.152 10.8867C216.48 11.4596 217.639 12.2474 218.629 13.25C219.618 14.2396 220.4 15.4049 220.973 16.7461C221.546 18.0742 221.832 19.4935 221.832 21.0039V32H217.828V21.0039C217.828 20.0404 217.646 19.1354 217.281 18.2891C216.917 17.4427 216.422 16.707 215.797 16.082C215.172 15.444 214.436 14.9427 213.59 14.5781C212.757 14.2005 211.858 14.0052 210.895 13.9922H199.898V32Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M242.605 32H238.602V13.9922H232.605V10.0078H238.602V2H242.605V10.0078H256.609V13.9922H242.605V32Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M293.32 32H278.32C276.81 32 275.391 31.7135 274.062 31.1406C272.734 30.5547 271.576 29.7669 270.586 28.7773C269.609 27.7747 268.835 26.6094 268.262 25.2812C267.689 23.9401 267.402 22.5143 267.402 21.0039V10.0078H271.406V21.0039C271.406 21.9674 271.582 22.8724 271.934 23.7188C272.298 24.5521 272.793 25.2878 273.418 25.9258C274.043 26.5508 274.772 27.0521 275.605 27.4297C276.452 27.7943 277.357 27.9831 278.32 27.9961H289.316V10.0078H293.32V32Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M328.938 13.9922H313.938C313.521 13.9922 313.13 14.0768 312.766 14.2461C312.401 14.4023 312.082 14.6172 311.809 14.8906C311.535 15.1641 311.32 15.4831 311.164 15.8477C311.008 16.2122 310.93 16.5964 310.93 17V32H306.926V17C306.926 16.0234 307.108 15.112 307.473 14.2656C307.837 13.4193 308.339 12.6836 308.977 12.0586C309.615 11.4206 310.357 10.9193 311.203 10.5547C312.049 10.1901 312.961 10.0078 313.938 10.0078H328.938V13.9922Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
        <path d="M365.492 17C365.492 17.9766 365.31 18.888 364.945 19.7344C364.581 20.5807 364.079 21.3229 363.441 21.9609C362.816 22.5859 362.074 23.0807 361.215 23.4453C360.368 23.8099 359.464 23.9922 358.5 23.9922H343.168C343.454 24.5781 343.812 25.1185 344.242 25.6133C344.672 26.1081 345.154 26.5312 345.688 26.8828C346.221 27.2344 346.801 27.5078 347.426 27.7031C348.064 27.8984 348.728 27.9961 349.418 27.9961H362.504V32H349.418C347.908 31.987 346.488 31.694 345.16 31.1211C343.832 30.5352 342.673 29.7474 341.684 28.7578C340.707 27.7552 339.932 26.5898 339.359 25.2617C338.786 23.9336 338.5 22.5143 338.5 21.0039C338.5 19.4935 338.786 18.0742 339.359 16.7461C339.932 15.418 340.707 14.2591 341.684 13.2695C342.673 12.2669 343.832 11.4792 345.16 10.9062C346.488 10.3203 347.908 10.0208 349.418 10.0078H358.5C359.464 10.0078 360.368 10.1901 361.215 10.5547C362.074 10.9193 362.816 11.4206 363.441 12.0586C364.079 12.6836 364.581 13.4193 364.945 14.2656C365.31 15.112 365.492 16.0234 365.492 17ZM358.5 20.0078C358.904 20.0078 359.288 19.9297 359.652 19.7734C360.017 19.6172 360.336 19.4023 360.609 19.1289C360.883 18.8555 361.098 18.5365 361.254 18.1719C361.41 17.8073 361.488 17.4167 361.488 17C361.488 16.5964 361.41 16.2122 361.254 15.8477C361.098 15.4831 360.883 15.1641 360.609 14.8906C360.336 14.6172 360.017 14.4023 359.652 14.2461C359.288 14.0768 358.904 13.9922 358.5 13.9922H349.418C348.533 13.9922 347.699 14.1484 346.918 14.4609C346.15 14.7734 345.46 15.2031 344.848 15.75C344.249 16.2839 343.747 16.9219 343.344 17.6641C342.953 18.3932 342.699 19.1745 342.582 20.0078H358.5Z"  stroke="#fff" strokeWidth="2" mask="url(#path-1-outside-1_10_136)"/>
    </svg>
      </div>
    </div>
    <div class="nav-links">
        <a href="#" target="_blank">Home</a>
        <a href="#" target="_blank">Gith Hub</a>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Contact Us</a>
    </div>
  </div>




</>)
}
export default Background ;
import React,{useRef, useState, useEffect, useWindowDimensions} from "react"
import Webcam from "react-webcam"
//import * as posenet from '@tensorflow-models/posenet';
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from  '@tensorflow/tfjs-core' 
import '@tensorflow/tfjs-backend-webgl'
import '@tensorflow/tfjs-backend-wasm'

import '../styles/pushupPosture.css'
import '../styles/general.css'

import {useSpeechSynthesis} from 'react-speech-kit'
import { useNavigate } from "react-router-dom"


export default function()  {

  const[detected, setDetected] = useState(false)
  const navigate = useNavigate();
 

  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
 

  const [prevStatus, setPrevStatus] = useState(false)
  const {speak, speaking, cancel} = useSpeechSynthesis()
    const webCamRef = useRef(null)
const canvasRef = useRef(null)
const [statusText, setstatusText] = useState('Make sure shoulder, feet, and ankle in view')
const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING}

function handleResize(){
 
  
  setWindowSize({width: window.innerWidth, height: window.innerHeight}) 
  
}


  useEffect(()=> {
    console.log(prevStatus)
    if(!prevStatus){
      cancel()
      speak({text:'fix posture'})
    

    } else {
      cancel()
      speak({text: 'continue'})
      
    }
  }, [prevStatus])

  function drawKeypoint(keypoint, ctx) {
    // If score is null, just show the keypoint.
    const score = keypoint.score;
   
    

    if (score > 0.2 ) {
      //const circle = new Path2D();
      //circle.arc(keypoint.position.x, keypoint.position.y, 100, 0, 2 * Math.PI);
      //ctx.fill(circle);
      //ctx.stroke(circle);

      ctx.fillStyle = '#FF0000'
      ctx.fillRect(keypoint.x, keypoint.y,10,10);
     
      
    }
  }

    
    const runPosenet = async () => {
        //const net = await posenet.load({inputResolution: {width:640, height:480}, scale:1});
        const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig)
        setInterval(()=> {
            detect(detector)
        }, 100)
        
    }

    useEffect(()=>{  
      
      window.addEventListener("resize", handleResize); 
      handleResize();
      runPosenet()

     

      return () => window.removeEventListener('resize', handleResize)
      
      // runPosenet();
      //window.addEventListener('resize', ()=>{setWidth(window.innerWidth);
      //setHeight(window.innerHeight)})

      // window.addEventListener('resize', ()=>{
        // setWidth(window.innerWidth)
      //   setHeight(window.innerHeight)  
      // })
      // window.addEventListener('orientationChange', ()=>{
      //   setWidth(window.innerWidth)
      //   setHeight(window.innerHeight)
     
      // }
      // )  
    
    }, [])



   
  

    const detect = async(net) => {
        if(typeof webCamRef.current !== 'undefined' && webCamRef.current !== null && webCamRef.current.video.readyState===4){
            const video = webCamRef.current.video
            const videoWidth = webCamRef.current.video.videoWidth
            const videoHeight = webCamRef.current.video.videoHeight

            video.width = videoWidth
            video.height = videoHeight
            const ctx = canvasRef.current.getContext("2d") 
            canvasRef.current.width = videoWidth
            canvasRef.current.height = videoHeight
            
         
        

            const pose = await net.estimatePoses(video)
            
           // console.log(pose[0].keypoints)
            
            //for(var i = 0; i < 17;i++ ){
              //drawKeypoint(pose[0].keypoints[i], ctx)
             
              
            //}
            //console.log(pose)
           
            // console.log(ctx)
            var LS = pose[0].keypoints[5]
            var LH = pose[0].keypoints[11]
            var LK = pose[0].keypoints[13]
        
                

           if(LS.score > 0.3 && LH.score > 0.3 && LK.score > 0.3){
            setDetected(true)
              var radians = Math.atan2(LK.y - LH.y, LK.x - LH.x) - Math.atan2(LS.y - LH.y, LS.x - LH.x)
            var angle = (Math.abs(radians*(180.0/Math.PI)))
            drawKeypoint(LS,ctx)
            drawKeypoint(LH, ctx)
            drawKeypoint(LK, ctx)
          
          

            if(angle > 170 && angle < 190){
              setstatusText('Good Posture')
              setPrevStatus(true)
                

            } else {
              setstatusText('Bad Posture')
              setPrevStatus(false)
                            
            }
          } else {
            setDetected(false)
            setstatusText('Make sure shoulder, feet, and ankle in view')
            
          }

    
          //}

            //for (var i = 0; i < pose['keypoints'].length; i++){
              //drawKeypoint(pose['keypoints'][i], ctx)

            //}
            //console.log(pose)

        }

    }

    return <div style={{height:windowSize.height, width:windowSize.width}} className={!detected? 'starting' : prevStatus? 'correct':'wrong'} >
    <div class="posture-heading container">
      <a onClick={(e)=>{
        e.preventDefault();
        navigate('../home')
      }}href="#">
        <ion-icon class="utility-icon" name="chevron-back-outline"></ion-icon>
      </a>
      <div class="posture-greeting">
        <p class="posture--header">{statusText}</p>
      </div>
    </div>

      <Webcam
        
        style={{
        position:'absolute',
        paddingLeft :windowSize.width/20,
        paddingRight :windowSize.width/20,
        paddingBottom: windowSize.height/10,


         
          width:windowSize.width,
          height: windowSize.height,
          left:'0', 
          right:'0',}}
        videoConstraints = {{facingMode:'user', aspectRatio:16/10}}
       ref={webCamRef} />
 
      <canvas ref={canvasRef}

      
        style={{
          position:'absolute',
          paddingLeft :windowSize.width/20,
        paddingRight :windowSize.width/20,
        paddingBottom: windowSize.height/10,
        width:windowSize.width,
        height: windowSize.height,
   
          
          left:'0', 
          right:'0',
       
          //textAlign:'center',
      }}
      /> 
 </div>   

}
  


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


export default function()  {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
 

  const [prevStatus, setPrevStatus] = useState(false)
  const {speak, speaking, cancel} = useSpeechSynthesis()
    const webCamRef = useRef(null)
const canvasRef = useRef(null)
const [statusText, setstatusText] = useState('Not Straight')
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
      
      runPosenet()
      
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
              var radians = Math.atan2(LK.y - LH.y, LK.x - LH.x) - Math.atan2(LS.y - LH.y, LS.x - LH.x)
            var angle = (Math.abs(radians*(180.0/Math.PI)))
            drawKeypoint(LS,ctx)
            drawKeypoint(LH, ctx)
            drawKeypoint(LK, ctx)
          
          

            if(angle > 170 && angle < 190){
              setstatusText('Straight back')
              setPrevStatus(true)
                

            } else {
              setstatusText('Not Straight')
              setPrevStatus(false)
                            
            }
          } else {
            
          }

    
          //}

            //for (var i = 0; i < pose['keypoints'].length; i++){
              //drawKeypoint(pose['keypoints'][i], ctx)

            //}
            //console.log(pose)

        }

    }

    return <div style={{height:windowSize.height}} className={prevStatus? 'correct':'wrong'} >
    <div class="posture-heading container">
      <a href="#">
        <ion-icon class="utility-icon" name="chevron-back-outline"></ion-icon>
      </a>
      <div class="posture-greeting">
        <p class="posture--header">Pushup posture check</p>
      </div>
    </div>

      <Webcam
        
        style={{width: windowSize.width, height: windowSize.height,
        position:'absolute',
          marginLeft:'auto', 
          marginRight:'auto', 
          left:'0', 
          right:'0',}}
        videoConstraints = {{facingMode:'user', aspectRatio: windowSize.width/windowSize.height }}
       ref={webCamRef} />
 
      <canvas ref={canvasRef}

      
        style={{
          position:'absolute',
          marginLeft:'auto', 
          marginRight:'auto', 
          left:'0', 
          right:'0',
          width:windowSize.width,
          height: windowSize.height ,  
          //textAlign:'center',
      }}
      /> 
 </div>   

}
  


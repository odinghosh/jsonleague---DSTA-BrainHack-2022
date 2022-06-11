import React,{useRef, useState, useEffect} from "react"
import Webcam from "react-webcam"
//import * as posenet from '@tensorflow-models/posenet';
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from  '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import '@tensorflow/tfjs-backend-wasm'
import {useSpeechSynthesis} from 'react-speech-kit'






export default function()  {
  const [prevStatus, setPrevStatus] = useState(false)
  const {speak, speaking, cancel} = useSpeechSynthesis()
    const webCamRef = useRef(null)
const canvasRef = useRef(null)
const [statusText, setstatusText] = useState('Not Straight')
const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING}


  useEffect(()=> {
    console.log(prevStatus)
    if(!prevStatus){
      cancel()
      speak({text:'fix posture'})
    
    

    } else {
      cancel()
     

    
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

    useEffect(()=>{  runPosenet()})



   
  

    const detect = async(net) => {
        if(typeof webCamRef.current !== 'undefined' && webCamRef.current !== null && webCamRef.current.video.readyState===4){
            const video = webCamRef.current.video
            const videoWidth = webCamRef.current.video.videoWidth
            const videoHeight = webCamRef.current.video.videoHeight

            video.width = 640
            video.height = 480
            const ctx = canvasRef.current.getContext("2d") 
            canvasRef.current.width = 640
            canvasRef.current.height = 480
            
         
        

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
            

           

          
            

           if(LS.score > 0.2 && LH.score > 0.2 && LK.score > 0.2){
            drawKeypoint(LS,ctx)
            drawKeypoint(LH, ctx)
            drawKeypoint(LK, ctx)
              var radians = Math.atan2(LK.y - LH.y, LK.x - LH.x) - Math.atan2(LS.y - LH.y, LS.x - LH.x)
            var angle = (Math.abs(radians*(180.0/Math.PI)))

            if(angle > 172 && angle < 190){
               
                setstatusText('Straight')
                setPrevStatus(true)
                
             
             
          

            } else {
                setstatusText('Not Straight')
                setPrevStatus(false)
                            
            }
          }

    
          //}

            //for (var i = 0; i < pose['keypoints'].length; i++){
              //drawKeypoint(pose['keypoints'][i], ctx)

            //}
            //console.log(pose)

        }

    }

    return <div><h1 style={{fontSize: 100}}>
   {statusText}
</h1> <Webcam style={{position:'absolute',
 marginLeft:'auto', 
 marginRight:'auto', 
 left:'0', 
 right:'0', 
 textAlign:'center', 
 height:480, 
 width:640}} ref={webCamRef} />
 
 <canvas ref={canvasRef}
 style={{position:'absolute',
 marginLeft:'auto', 
 marginRight:'auto', 
 left:'0', 
 right:'0', 
 textAlign:'center', 
 height:480, 
 width:640}}
 />
 </div>}
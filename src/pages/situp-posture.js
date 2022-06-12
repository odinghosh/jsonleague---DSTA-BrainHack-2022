import React,{useRef, useState, useEffect, useWindowDimensions} from "react"
import Webcam from "react-webcam"
//import * as posenet from '@tensorflow-models/posenet';
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from  '@tensorflow/tfjs-core' 
import '@tensorflow/tfjs-backend-webgl'
import '@tensorflow/tfjs-backend-wasm'

import {useSpeechSynthesis} from 'react-speech-kit'


export default function()  {
  var width = window.innerWidth
  var height = window.innerHeight - 200

  const [situp, setsitup] = useState(false)

  const [prevStatus, setPrevStatus] = useState(false)
  const {speak, speaking, cancel} = useSpeechSynthesis()
    const webCamRef = useRef(null)
const canvasRef = useRef(null)
const [statusText, setstatusText] = useState('Feet not on ground')
const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING}

useEffect(()=> {
    console.log(prevStatus)
    if(!prevStatus){
      cancel()
      speak({text:'Feet not on ground'})
      
    
    

    } else {
      cancel()
      speak({text: 'continue'})

    }
  }, [prevStatus])

  useEffect(()=> {
    console.log(prevStatus)
    if(situp){
     
      speak({text:'situp complete'})
    

    } else {
     
    }
  }, [situp])


  

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

    useEffect(()=>{  runPosenet();console.log('run')}, [])



   
  

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

            var p11 = pose[0].keypoints[11]
          
            var p15 = pose[0].keypoints[15]

            var p7 = pose[0].keypoints[7]
          
            var p13 = pose[0].keypoints[13]

            if(p7.score > 0.2 && p13.score > 0.2){
            drawKeypoint(p7, ctx)
            drawKeypoint(p13, ctx)
            if (((p7.x - p13.x)/videoWidth) < 0.15){
                setsitup(true)
            } else {
                setsitup(false)
            }
            }
            
        

            if(p11.score > 0.2 && p15.score > 0.2){
                drawKeypoint(p11, ctx)
                drawKeypoint(p15, ctx)
               

            if((p15.y/videoHeight - p11.y/videoHeight) < -0.04 || (p15.y/videoHeight - p11.y/videoHeight) > 0.06){
                setstatusText('Feet not on ground')
                setPrevStatus(false)
              
            } else {
                setstatusText('Feet on ground')
                setPrevStatus(true)
                
            }
        }
           


           
         

           //if(LS.score > 0.2 && LH.score > 0.2 && LK.score > 0.2){
            //drawKeypoint(LS,ctx)
            //drawKeypoint(LH, ctx)
            //drawKeypoint(LK, ctx)
              //var radians = Math.atan2(LK.y - LH.y, LK.x - LH.x) - Math.atan2(LS.y - LH.y, LS.x - LH.x)
            //var angle = (Math.abs(radians*(180.0/Math.PI)))
            
          

            //if(angle > 172 && angle < 190){
              
              // if(!prevStatus){
                //setPrevStatus(true)
               //}
                

            //} else {
              //if(prevStatus){
                // setPrevStatus(false)
              //}
                            
          //  }
          //}

    
          //}

            //for (var i = 0; i < pose['keypoints'].length; i++){
              //drawKeypoint(pose['keypoints'][i], ctx)

            //}
            //console.log(pose)

        }

    }

    return <div><h1 style={{fontSize: 100, textAlign:'center'}}>
   {statusText}
</h1> <Webcam style={{position:'absolute',
 marginLeft:'auto', 
 marginRight:'auto', 
 left:'0', 
 right:'0', 
 textAlign:'center', 
 }} ref={webCamRef} />
 
 <canvas ref={canvasRef}
 style={{position:'absolute',
 marginLeft:'auto', 
 marginRight:'auto', 
 left:'0', 
 right:'0', 
 textAlign:'center', 
 }}
 />
 </div>}
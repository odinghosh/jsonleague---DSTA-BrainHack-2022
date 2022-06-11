import React,{useRef} from "react"
import Webcam from "react-webcam"
import * as posenet from '@tensorflow-models/posenet';
import * as tf from  '@tensorflow/tfjs'






export default function()  {
    const webCamRef = useRef(null)
const canvasRef = useRef(null)




  function drawKeypoint(keypoint, ctx) {
    // If score is null, just show the keypoint.
    const score = keypoint.score;
   
    

    if (keypoint.part == 'nose') {
      //const circle = new Path2D();
      //circle.arc(keypoint.position.x, keypoint.position.y, 100, 0, 2 * Math.PI);
      //ctx.fill(circle);
      //ctx.stroke(circle);

      ctx.fillRect(keypoint.position.x, keypoint.position.y,10,10);
      if(keypoint.part == 'nose'){
        console.log(keypoint.position.x)
        console.log(keypoint.position.y)
      }
    }
  }

    const runPosenet = async () => {
        const net = await posenet.load({inputResolution: {width:640, height:480}, scale:1});
        setInterval(()=> {
            detect(net)
        }, 100)
    }


   
  

    const detect = async(net) => {
        if(typeof webCamRef.current !== 'undefined' && webCamRef.current !== null && webCamRef.current.video.readyState===4){
            const video = webCamRef.current.video
            const videoWidth = webCamRef.current.video.videoWidth
            const videoHeight = webCamRef.current.video.videoHeight

            video.width = 640
            video.height = 480
            
         
        

            const pose = await net.estimateSinglePose(video)
            const ctx = canvasRef.current.getContext("2d") 
            canvasRef.current.width = 640
            canvasRef.current.height = 480 
            // console.log(ctx)
            //console.log(pose['keypoints'])
            for (var i = 0; i < pose['keypoints'].length; i++){
              drawKeypoint(pose['keypoints'][i], ctx)

            }
            //console.log(pose)

        }

    }

    runPosenet();
    return <div><h1>
    Hello World
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
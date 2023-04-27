import logo from './logo.svg';
import './App.css';
import Image from "./Image";
import {useState} from "react";
import {postNewProjectOwner} from "./Services/http/axiosApi";
import {getHi} from "./Services/http/axiosApi";
import {Buffer} from 'buffer';

function App() {
  const [img, setImg] = useState()
  const [resultImage, setResultImg] = useState()
    const [status, setStatus] = useState()
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(false);

  async function postNewProjectOwnerToServer() {
    setStatus("Loading...")
    if(img == null)
      console.log("img is null")
    const image = await postNewProjectOwner(img).then(
        (res) => {
        //  console.log(res.data.message)
          if(res.data == null)
            console.log("res data is null")

          console.log(res.data)
            return res.data;

        }).catch(
            err => {
              console.log(err)
              setStatus("Something went wrong")
            }
    )

    if(image == null) {
      console.log("image from server is null")
      setStatus('Something went wrong...')
    }
    else
    {
      console.log(image)
      setStatus("Image is ready!")
      setResultImg(image)

    }

    setLoading(false)
  }

    function hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }

  async function getHiFromPython()
  {
    console.log("waiting to get hi")
    setStatus("Sending request")

    const response = await getHi().then((response) =>
    {
      console.log('got data i guess')
      console.log(response)
      console.log(response.data)
      setPost(response.data);
    });
    console.log(post)
    console.log(response.data.json)
    // setStatus(response.data)

  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex',justifySelf:'center',justifyContent:'center', alignContent:'center', height:'auto',width:'auto', flexDirection:'row'}}>
          <Image
              setImg={setImg}
          />
          <img className={"result-image"} src={`data:image/jpeg;base64,${resultImage}`} alt="Your image in anime style will be displayed here"/>
        </div>

        <br/><br/>
        <button
            className={"select-image"}
            style={{fontSize:18, margin: 10}}
            onClick={postNewProjectOwnerToServer}
            id={"main-submit"}
        >
          <b>Turn your image to anime!</b>
        </button>

        <label>status: {status}</label>
      </header>
        </div>


  );
}

export default App;

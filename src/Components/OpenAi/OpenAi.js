import React,{useState} from 'react'
import {Configuration,OpenAIApi} from "openai"
import './OpenAi.css'

export default function OpenAi() {
  const configuration = new Configuration({
    // apiKey:process.env.OPEN_AI_API_KEY,
    apiKey:"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",
})

const openai=new OpenAIApi(configuration)

const[prompt,setPrompt]=useState("")
const[result,setResult]=useState("")
const[loading,setLoading]=useState(false)

const handleClick = async()=>{
    setLoading(true);
    try{
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt:prompt,
            temperature:0.5,
            max_tokens:100,
        });
        setResult(response.data.choices[0].text);
        console.log("chatgpt = ",response.data.choices[0].text)
    }catch(error){
        console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className='openai-wrapper'>
      <h1 className='open-name'>OPEN AI:</h1>
      <span>(use this feature to keep updated about your favourite <span style={{color:"orange",fontSize:"20px"}}>crypto </span>news)</span>
      
      <div className='openai-main'>
        <textarea
                  type="text"
                  value={prompt}
                  onChange={(e)=>setPrompt(e.target.value)}
                  placeholder="Write your prompt.."
                  className="textarea"
                  cols="30"
                  rows="7"
                  // outline="none"
          ></textarea>
      
          <button
                  onClick={handleClick}
                  disabled={loading || prompt.length === 0}
                  className="btn"
          >
              {loading ? "Generating...":"Generate"}
          </button>

          <span className='result'>{result}</span>
      </div>
    </div>
  )

}

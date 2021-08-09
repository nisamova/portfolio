import React from "react"
import { CustomHook } from "./CustomHook"
import "./NasaImages.css"

export default function Nasaimages() {
  const { loading, data, error } = CustomHook(
    "https://api.nasa.gov/planetary/apod?api_key=vwr50SLzfJKOBvYEJyfoqSEpVbcjfGuq1JOoxgdm"
  )
  if (loading) return <h1> loading....</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <>
      <div className="nasasection">
        <div>
          <img src={data.url} alt={data.title} />
        </div>
        <div className="nasaexplanation">
          <h4>{data.title}</h4>
          <p>{data.date}</p>
          <p>{data.explanation}</p>
        </div>
      </div>
    </>
  )
}

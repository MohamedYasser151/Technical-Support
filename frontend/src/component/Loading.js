import React from 'react'
import './css/Loading.css'
function Loading() {
  return (
    <div className="loading">
    <div className="terminal-loader">
  <div className="terminal-header">
    <div className="terminal-title">Fashion wave</div>
    <div className="terminal-controls">
      <div className="control close"></div>
      <div className="control minimize"></div>
      <div className="control maximize"></div>
    </div>
  </div>
  <div className="content">
    <div className="textloading">Loading...</div>
  </div>
</div>
</div>
  )
}

export default Loading

import { Spin } from "antd"

const Loading = () => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "70vh"}}>
      <Spin size="large" />
    </div>
  )
}

export default Loading
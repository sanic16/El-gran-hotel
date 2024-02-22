import './commonHeader.css'

const CommonHeader = (
  {
    title
  }:
  {
    title: string
  }
) => {
  return (
    <div className="common-header">
        <h1 className="common-heading">
            {title}
        </h1>
        <div className="underline">
             <div className="small-underline"></div>
             <div className="big-underline"></div>
        </div>
    </div>
  )
}

export default CommonHeader
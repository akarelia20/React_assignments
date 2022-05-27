import { useParams } from 'react-router-dom'

const DisplayPara = props => {
  const { firstPara, color, background } = useParams()

  return (
    <div>
      {isNaN(firstPara) ? (
        <h1
          style={
            color && background
              ? { color: color, backgroundColor: background }
              : null
          }
        >
          This is a Word : {firstPara}
        </h1>
      ) : (
        <h1> The number is : {firstPara}</h1>
      )}
    </div>
  )
}

export default DisplayPara

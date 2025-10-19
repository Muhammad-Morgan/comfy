import { useRouteError } from "react-router-dom"
const ErrorElement = () => {
  const error = useRouteError()
  console.log(error);
  
    return (
    <div>
      <h1 className="text-4xl font-bold">Something went wrong...</h1>
    </div>
  )
}

export default ErrorElement

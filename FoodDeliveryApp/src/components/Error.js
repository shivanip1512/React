import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
      <div className="error-page">
          <img src="https://miro.medium.com/v2/resize:fit:1162/1*oQ5wuy0x8aFUhfo-g35WNA.png"/>
          <div className="error-text">
              <h1> Oops !!!</h1>
              <h2> Something went wrong !!</h2>
              <h2> Error : { err.status } {err.statusText} </h2>
          </div>
      </div>
  )
}

export default Error
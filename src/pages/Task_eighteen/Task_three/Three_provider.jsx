import Three_context from "./Three_context"

const Three_provider = ({children}) => {
  return (
    <Three_context.Provider value={{}}>

{children}

    </Three_context.Provider>
  )
}

export default Three_provider

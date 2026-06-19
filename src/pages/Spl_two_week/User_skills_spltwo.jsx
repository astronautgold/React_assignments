
const User_skills_spltwo = ({skill}) => {
  return (
    <><div>
      {skill.map((Element, index) => (
        <p key={index}>
            {Element}
        </p>
      ))}
    </div></>
  )
}

export default User_skills_spltwo





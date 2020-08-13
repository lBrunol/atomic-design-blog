type Props = {
  icon: string
}

const IconLink = ({ icon }: Props) => {
  return <div>{icon}</div>
}

IconLink.defaultProps = {
  icon: 'oi'
}

export default IconLink

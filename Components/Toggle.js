import ToggleSwitch from 'toggle-switch-react-native'
const Toggle =(props)=>{
    return(
        <ToggleSwitch
  isOn={props.state}
  onColor="#06C295"
  offColor="#BDC8C5"
  label={props.name}
  labelStyle={{ color: "black", fontWeight: "500", fontSize:15, marginVertical:12 }}
  size="small"
  onToggle={isOn => console.log("changed to : ", isOn)}
/>
    )
}
export default Toggle
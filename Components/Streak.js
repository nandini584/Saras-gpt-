import CalendarStrip from 'react-native-calendar-strip';
import {View, Text, SafeAreaView, StyleSheet ,ScrollView} from 'react-native'
export default function Streak(){
    return(
        <SafeAreaView >
            <CalendarStrip
      scrollable
      style={{height:100, paddingTop: 8}}
      calendarColor={'#F6F9F8'}
      calendarHeaderStyle={{color: '#2F2A2A'}}
      dateNumberStyle={{color: '#2F2A2A'}}
      dateNameStyle={{color: '#2F2A2A'}}
      iconContainer={{flex: 0.1}}
      borderRadius={20}/>

        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
   
})
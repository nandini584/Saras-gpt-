import {useState} from 'react';
import {View, Text, StyleSheet,ScrollView, FlatList, Pressable} from 'react-native'
import SearchBar from '../../Components/Searchbar'
import Card from '../../Components/Card'
import Streak from '../../Components/Streak'
export default function Home({ navigation }){
   
    const [quiz, setQuiz] = useState(true);
    const [state, setState] = useState([true, false, true, false, true, false, true, false]);
    const data = [
        "Newspaper",
        "Battles",
        "Amendments",
        "History",
        "Current Affairs",
        "Reports",
        "Riots",
        "Constitution"
      ];
    
      const [searchResults, setSearchResults] = useState(data);
      
        const handleSearch = (query) => {
          const filteredResults = data.filter(item => 
          item.toLowerCase().includes(query.toLowerCase())
         );
         setSearchResults(filteredResults);
       };
    
       const renderListItem = ({ item }) => (
        <>
        <Text style={styles.item}>{item}</Text>
        </>
      );
    
    return(
        <View style={{backgroundColor:"#F6F9F8"}}>
            <View>
                <Streak/>
            </View>
            <View>
               
                 <SearchBar onSearch={handleSearch}/> 
                 {/* <FlatList
             data={searchResults}
             renderItem={renderListItem}
             keyExtractor={(item, index) => index.toString()}
                />  */}
            </View>
            <View style={{display:"flex", flexDirection:"row", paddingTop:7, backgroundColor:"white", marginHorizontal:32, borderRadius:8, marginBottom:20, justifyContent:"space-around", fontWeight:"bold" }}>
                <Pressable onPress={() => setQuiz(true)}>
              <Text style={quiz? {color: "#2F2A2A", fontWeight:700, fontSize:14, borderBottomWidth:2.5, paddingBottom:6}:{ color:"#858585" ,fontWeight:700, fontSize:14}}>Choose a Topic</Text></Pressable>
              <Pressable onPress={() => setQuiz(false)}>
              <Text style={quiz ? {color: "#858585", fontWeight:700, fontSize:14}:{ color:"#2F2A2A" ,fontWeight:700, fontSize:14, borderBottomWidth:2.5, paddingBottom:6}}>UPSC Trivia</Text></Pressable>
            </View>
            <ScrollView>
            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", marginBottom:300}}>
             
               <Card url={state[0] ? require("../../assets/newspaper.png") : require("../../assets/newspaperbw.png")} domain="Newspaper" count={54} acuracy={0.43}/>
               <Card url={state[1] ? require("../../assets/Battles.png") : require("../../assets/Battlesbw.png")} domain="Battles" count={23} acuracy={0.45}/>
               <Card url={state[2] ? require("../../assets/Amendments.png") : require("../../assets/Amendmentsbw.png")} domain="Amendments" count={90} acuracy={0.54}/>
               <Card url={state[3] ? require("../../assets/Constitution.png") : require("../../assets/Constitutionbw.png")} domain="Constitution" count={10} acuracy={0.87}/>
               <Card url={state[4] ? require("../../assets/Riots.png") : require("../../assets/Riotsbw.png")} domain="Riots" count={15} acuracy={0.98}/>
               <Card url={state[5] ? require("../../assets/History.png") : require("../../assets/Historybw.png")} domain="History" count={5} acuracy={0.03}/>
               <Card url={state[6] ? require("../../assets/CurrentAffairs.png") : require("../../assets/CurrentAffairsbw.png")} domain="Current Affairs" count={0} acuracy={0}/>
               <Card url={state[7] ? require("../../assets/Reports.png") : require("../../assets/Reportsbw.png")} domain="Reports" count={0} acuracy={0}/>
            </View>
                </ScrollView>
        </View>
    )
}
const styles= StyleSheet.create({
    item:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
    },
})
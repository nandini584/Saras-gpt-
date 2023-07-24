import {View, Text, StyleSheet,ScrollView, useState, FlatList} from 'react-native'
import SearchBar from '../../Components/Searchbar'
import Card from '../../Components/Card'
import Streak from '../../Components/Streak'
export default function Home({ navigation }){
   
//   const data = [
//       "Newspaper",
//       "Battles",
//       "Amendments",
//       "History",
//       "Current Affairs",
//     ];
    
//     const [searchResults, setSearchResults] = useState(data);
      
//        const handleSearch = (query) => {
//          const filteredResults = data.filter(item => 
//            item.toLowerCase().includes(query.toLowerCase())
//          );
//          setSearchResults(filteredResults);
//        };
    
//        const renderListItem = ({ item }) => (
//          <Text style={styles.item}>{item}</Text>
//        );
    
    return(
        <View style={{backgroundColor:"#F6F9F8"}}>
            <View>
                <Streak/>
            </View>
            <View>
                <SearchBar/>
                {/* <SearchBar onSearch={handleSearch}/> */}
                 {/* <FlatList
             data={searchResults}
             renderItem={renderListItem}
             keyExtractor={(item, index) => index.toString()}
                />  */}
            </View>
            <View style={{display:"flex", flexDirection:"row", paddingVertical:7, backgroundColor:"white", marginHorizontal:32, borderRadius:8, marginBottom:20, justifyContent:"space-around", fontWeight:"bold" }}>
              <Text>Choose a Topic</Text>
              <Text>UPSC Trivia</Text>
            </View>
            <ScrollView>
            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
               <Card url={require("../../assets/newspaper.png")} domain="Current Affairs" count={34} acuracy={0.43}/>
               <Card url={require("../../assets/newspaper.png")} domain="Newspaper" count={34} acuracy={0.45}/>
               <Card url={require("../../assets/Amendments.png")} domain="Amendments" count={34} acuracy={0.54}/>
               <Card url={require("../../assets/Constitution.png")} domain="Constitution" count={34} acuracy={0.87}/>
               <Card url={require("../../assets/newspaper.png")} domain="History" count={34} acuracy={0.98}/>
               <Card url={require("../../assets/newspaper.png")} domain="Battles" count={34} acuracy={0.03}/>
               <Card url={require("../../assets/Amendments.png")} domain="Radiology" count={34} acuracy={0.32}/>
               <Card url={require("../../assets/Constitution.png")} domain="Current Affairs" count={34} acuracy={0.74}/>
               
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
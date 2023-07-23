import {View, Text, StyleSheet,ScrollView, useState, FlatList} from 'react-native'
import SearchBar from '../../Components/Searchbar'
import Card from '../../Components/Card'
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
        <View >
            <View>
                <Text>Streak(component)</Text>
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
            <View>
                <Text>Switch tab(component)</Text>
            </View>
            <ScrollView>
            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                

               <Card/>
               <Card/>
               <Card/>
                <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
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
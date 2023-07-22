import {View, StyleSheet, Pressable, FlatList, TouchableOpacity ,Text} from 'react-native'
import {useState, useEffect} from 'react'
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from "@react-navigation/native";
import StackNavigator from '../../StackNavigator';
import Congrats from './Congrats';
import questions from '../../data/questions';
export default function Quiz() {
  //progress
  const [progress, setProgress]=useState(0.0)
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  useEffect(() => {
    // ...
    if (selectedAnswerIndex !== null) {
      if (currentQuestion && selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
        setProgress((progress) => progress + 0.2);
        setAnswerStatus(true);
        setAnswers((prevAnswers) => [...prevAnswers, { question: index + 1, answer: true }]);
      } else {
        setProgress((progress) => progress + 0.2);
        setAnswerStatus(false);
        setAnswers((prevAnswers) => [...prevAnswers, { question: index + 1, answer: false }]);
      }
    }
  }, [selectedAnswerIndex, currentQuestion]);
  
// useEffect(()=>{
//   if(selectedAnswerIndex !== null){
//     if(selectedAnswerIndex ===  currentQuestion?.correctAnswerIndex){
//       setProgress((progress)=> progress+0.2)
//       setAnswerStatus(true)
//       answers.push({question:index +1, answer:true})
//     }else{
//       setProgress((progress)=> progress+0.2)
//       setAnswerStatus(false)
//       answers.push({question:index +1, answer:false})
//     }
//   }
// },[selectedAnswerIndex])

useEffect(()=>{
setSelectedAnswerIndex(null)
setAnswerStatus(null)
},[index])

  const currentQuestion=questions[index]
    return(
      <View style={styles.container}>
      <ProgressBar progress={progress} width={368} height={12} color="#06C295" borderRadius={20} position="absolute" top={50} right={30} left={30} borderWidth={2} />
        <View>
        <Text style={styles.question}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
          //   <Pressable
          //   key={item.id}
          //   onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
          //   style={
          //     answerStatus === null
          //       ? styles.neutral
          //       : selectedAnswerIndex === index && index === currentQuestion.correctAnswerIndex
          //       ? styles.correctanswer
          //       : selectedAnswerIndex !== null && selectedAnswerIndex === index
          //       ? styles.wronganswer
          //       : styles.neutral
          //   }
          // >
           
          // </Pressable>
          
           <Pressable
           key={item.id}
           onPress={() =>
             selectedAnswerIndex === null && setSelectedAnswerIndex(index)
           }
           style={
             selectedAnswerIndex === index &&
             index === currentQuestion.correctAnswerIndex ? styles.correctanswer : selectedAnswerIndex != null && selectedAnswerIndex === index ? styles.wronganswer : styles.neutral}>
             <Text style={styles.alpha}>{item.options}</Text>
             <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
           </Pressable>
          ))}
        </View>
      </View>
      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 15,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 50,
              }
        }
      >
      {index + 1 >= questions.length ? (
          <Pressable  onPress={() => 
            navigation.navigate("Congrats", {
            answers: answers 
          })
           }
            style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"flex-end", marginRight:20}}
          >
            <Text style={styles.next}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"flex-end", marginRight:20}}
          >
            <Text style={styles.next}>Next Question</Text>
          </Pressable>
        )}
     
    </View>
    </View>
    );
  }


  // css styles 
  const styles=StyleSheet.create({
    container:{
      backgroundColor:"#F6F9F8",
    },
  question:{
    color: "#2F2A2A",
    fontWeight: 700,
    textAlign: "center",
    marginTop: 50,
    fontSize:20,
    marginHorizontal:24,
    marginBottom:60,
    marginTop:100,
  },
  option:{
    paddingVertical: 16,
    paddingLeft:30,
    marginHorizontal: 24,
    marginVertical:4,
    borderColor: "#06C295",
    borderRadius:12,
    borderWidth: 1.5,
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  alpha:{
    marginRight: 20,
    backgroundColor:"#BAF1E4",
    borderRadius: 40,
    fontWeight:700,
    paddingHorizontal:8,
    paddingVertical:4,
  },
  next:{
    fontSize:14,
    fontWeight:700,
    color: "#06C295"
  },
  correctanswer:{
    paddingVertical: 24,
    paddingLeft:30,
    marginHorizontal: 24,
    marginVertical:4,
    borderColor: "#06C295",
    borderRadius:12,
    borderWidth: 1.5,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: "#25DB63",
    },
    wronganswer:{
      paddingVertical: 24,
      paddingLeft:30,
      marginHorizontal: 24,
      marginVertical:4,
      borderColor: "#06C295",
      borderRadius:12,
      borderWidth: 1.5,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      backgroundColor: "#E41D1D",
        
      },
      neutral:{
        paddingVertical: 24,
        paddingLeft:30,
        marginHorizontal: 24,
        marginVertical:4,
        borderColor: "#06C295",
        borderRadius:12,
        borderWidth: 1.5,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        }

  })
  
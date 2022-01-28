import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import mtl from './assets/Profiles/mtl.jpg';
import themes from './assets/Themes/themes';
import Position from 'react-native/Libraries/Components/Touchable/Position';

const deviceWidth = Dimensions.get('window').width;

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/


  return (  

  <View style={styles.parentContainer}>

        <View style={styles.navigationBar}>
            <Image style={styles.menuLight}
             source={require('./assets/Icons/menu_light.png')}
             resizeMode='contain'/>

            <Text style={styles.ensomText}>ensom</Text>

        <Image
            style={styles.sunImage}
            resizeMode='contain'
            source={require('./assets/Icons/sun.png')}
            />    

        </View>

        <View style={styles.mainContainer}>
          
                <View style={styles.profilePictureContainer}>
                
                    <Image
                    style={{width:'100%', height:'100%', borderRadius: 100 / 10}}
                    source={require('./assets/Profiles/mtl.jpg')}
                    resizeMode='contain'
                    />

                    <Text style={styles.mtlText}>MTL</Text>
                    <Text style={styles.milesAwayText}>2 miles away</Text>

                </View>
            
            <View style={styles.hottestTakeContainer}>
   
                  <Text style={styles.hottestText}>My hottest take</Text>

                  <View style={styles.hottestTakeSubContainer}>
  
                        <Image 
                          style={styles.audioPlay}
                          source={require('./assets/Icons/player_light.png')}
                          resizeMode='contain'
                          />

                        <Image
                          style={styles.audioWave}
                          source={require('./assets/Icons/audio_waveform_light.png')}
                          resizeMode='contain'
                        />

                  </View>

            </View>

        </View>

    <View style={styles.lastContainer}>

          <View style={styles.lastContainerSub1}>
          
                    <Image
                      style={{width:'85%', height:'85%'}}
                      source={require('./assets/Icons/discover_light_legacy.png')}
                      resizeMode='contain'/>

                    <Image
                      style={{width:'85%', height:'85%'}}
                      source={require('./assets/Icons/heart_light.png')}
                      resizeMode='contain'/>

                    <Image
                      style={{width:'85%', height:'85%'}}
                      source={require('./assets/Icons/messages_light.png')}
                      resizeMode='contain'/>
          </View>
        
          <View style={styles.lastContainerSub2}>
            
              <Text style={styles.lastContainerText}>Discover</Text>
              <Text style={{position: 'relative', fontSize: 20, fontFamily: "Sydney", color: 'white', marginRight: 20 }}>
                Matches
              </Text>
              <Text style={styles.lastContainerText}>DMs</Text>

          </View>

    </View>

  </View>
    
  );
}


const styles = StyleSheet.create({

  parentContainer: {
    flex: 1,
    backgroundColor: themes.light.bg,
    justifyContent: 'space-between'
  
},

  navigationBar: {
    width:'100%', 
    height: 105, 
    backgroundColor: themes.light.bg,
    flexDirection: 'row', 
    justifyContent: "space-around",
    marginTop: 30  },

  mainContainer: {
    flexGrow: 1, 
    flexDirection: 'column', 
    justifyContent:'space-between', 
    backgroundColor: themes.light.bg,
    alignItems: 'center', 
    marginBottom: 125,

  },

  profilePictureContainer: {
    flexDirection: 'row',
    width: deviceWidth * 0.85,
    height: deviceWidth * 0.85, 
    backgroundColor: '#EBECF0', 
    justifyContent: 'flex-start', 
    shadowColor: themes.light.shadows.shadowColor,
    shadowOpacity: themes.light.shadows.shadowOpacity,
    borderRadius: 100/10,
    shadowRadius: themes.light.shadows.shadowRadius,
    shadowOffset: themes.light.shadows.shadowOffset
    
  },
  
  hottestTakeContainer: {
    width: deviceWidth * 0.85,
    height: '27.5%', 
    position: 'relative', 
    backgroundColor: 'white', 
    flexDirection: 'column',
    alignContent: 'flex-start',
    shadowColor: themes.light.shadows.shadowColor,
    shadowOpacity: themes.light.shadows.shadowOpacity,
    borderRadius: 200/10,
    shadowRadius: themes.light.shadows.shadowRadius,
    shadowOffset: themes.light.shadows.shadowOffset
  },

  lastContainer: {
    height: 100, 
    marginTop:'auto',
    backgroundColor: 'black', 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'space-around'

  },

  lastContainerSub1: {
    height: 50,
    backgroundColor: 'black', 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  lastContainerSub2: {
    height: 50,
    backgroundColor: 'black', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 10
  },

  lastContainerText: {
    position: 'relative', 
    fontSize: 20, 
    fontFamily: "Sydney", 
    color: 'white', 
  },

  menuLight: {
    width:'10%', 
    height:'50%', 
    alignSelf: 'center',
  },

  ensomText: {
    position: 'relative', 
    fontSize: 40, 
    fontFamily: "Sydney", 
    color: 'black', 
    fontWeight: 'bold', 
    alignSelf: 'center'
  },

  sunImage: {
    width:'10%', 
    alignSelf: 'center', 
    height:'50%'
  },

  mtlText: {
    position: 'absolute', 
    fontSize: 32, 
    fontFamily: "Sydney", 
    color: '#FFFFFF', 
    paddingLeft: 10
  },

  milesAwayText: {
    position: 'absolute', 
    fontSize: 16, 
    fontFamily: "Sydney", 
    color: '#FFFFFF', 
    alignSelf:'flex-end', 
    paddingLeft: 6
  },

  hottestText: {
    position: 'absolute', 
    fontSize: 25, 
    fontFamily: "Sydney", 
    color: 'black', 
    alignSelf: 'flex-start', 
    paddingLeft: 15,
    paddingTop: 15
  },

  audioPlay: {
    height: '100%',
    width: '50%',
  },

  audioWave: {
    width:'130%', 
    height:'100%',
  },

  hottestTakeSubContainer: {
    height: 50, 
    marginTop: 'auto',
    flexDirection: 'row',
    alignContent: 'space-between',
    marginRight: 175,
    marginBottom: 7
  }
});

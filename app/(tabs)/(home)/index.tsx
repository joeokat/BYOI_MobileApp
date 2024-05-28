import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame11808843}>
        <View style={styles.Ellipse}>
            <Image source={require("../../../assets/images/Ellipse 1.png")} />
        </View>
        <View style={styles.Welcome}>
        <Text style={{fontSize: 14,color:'white',fontFamily:'Poppins-Bold'}}>Welcome to</Text>
        <Text style={{fontSize:16,color: 'white',fontFamily:'Poppins-Bold'}}>BYOI Learning</Text>
        </View>
      </View>
      <View style={styles.Frame17321}>
          <View style={styles.resIcon}>
              <Link href="#" style={{position:'absolute', width: 24, height: 30, left:14,top: 5, alignSelf: 'center' }}>
                <Image source={require("../../../assets/images/solar_play-broken.png")} style={{position:'absolute', resizeMode:'cover', width: 24, height: 24, left:5 }} />              
              </Link>
          </View>
          <View style={styles.resIcon}>
                <Link href='../Pages/alumini' style={{position:'absolute', width: 35, height: 40, left:5 }}>
                <Image source={require("../../../assets/images/Group.png")} style={{position:'absolute',resizeMode:'contain', width: 35, height: 30, left:5 }}/>
                </Link>   
          </View>
      </View>
      <View style={styles.ads}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(157,77,82,0.37)','rgba(16,30,59,1)','rgba(148,176,97,0.51)']} style={{left:22, top:0,height:151,width:342, borderRadius:20}}>
          <View style={styles.announcement}>
          <View style={styles.CTA}>
              <Text style={styles.JoinAClass}>Join a Class For Free</Text>
              <Image source={require("../../../assets/images/teenyicons_arrow-up-outline.png")} />
            </View>
            <View style={{ width: 255,height: 85,top: 20}}>
              <Text style={styles.Learn}>Learn the most creative</Text>
                <MaskedView maskElement={<Text style={{ fontSize: 15,fontWeight: 100,top: 10, fontFamily: 'Poppins-Bold' }} >in-demand skills</Text>} style={{height: 30,}}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5525B', '#F6BF47', '#4BCCA5']} style={{height: 30, }}>
                  <Text></Text>
                  </LinearGradient>
                </MaskedView> 
              <Text style={styles.Learn}>curated for you.</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styler.personalised}>
        <View style={styler.heading}>
          <Text style={styler.forYou}>Personalized For You</Text>
          <Text style={styler.MoreComing}>more coming soon</Text>
        </View>
        <View style={styler.ForYou}>
          <View style={styler.More}>
            <View style={styler.Group12}>
              <View style={styler.Rectangle12}>
                <Image source={require("../../../assets/images/Rectangle 15.png")}/>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', top: 107,left: 15, width: 160,gap: 4}}>
                <View>
                  <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>Product Design</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:150, }}>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4, width: 60}}>
                    <Image source={require('../../../assets/images/ant-design_play-circle-outlined.png')}  />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>8 Hours</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4,right: 10}}>
                    <Image source={require('../../../assets/images/ci_group.png')} />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>76k learners</Text>
                  </View>
                </View>
                <View style={{backgroundColor: 'rgba(245, 80, 91, 0.21)',height:19,width: 63,borderRadius:8,alignContent:'center'}}>
                  <Text style={{color: '#F5505B',alignSelf: 'center',fontFamily:'Poppins-Regular', fontSize:10}}>Expert</Text>
                </View>
              </View>
            </View>
            <View style={styler.Group12}>
              <View style={styler.Rectangle12}>
                <Image source={require("../../../assets/images/Rectangle 15 (1).png")}/>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', top: 107,left: 15, width: 160,gap: 4}}>
                <View>
                  <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>React</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:150, }}>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4, width: 60}}>
                    <Image source={require('../../../assets/images/ant-design_play-circle-outlined.png')}  />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>6 Hours</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4,right: 10}}>
                    <Image source={require('../../../assets/images/ci_group.png')} />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>482k learners</Text>
                  </View>
                </View>
                <View style={{backgroundColor: 'rgba(66, 159, 248, 0.2)',height:19,width: 91,borderRadius:8,alignContent:'center'}}>
                  <Text style={{color: '#429FF8',alignSelf: 'center',fontFamily:'Poppins-Regular', fontSize:10}}>Professional</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styler.More}>
            <View style={styler.Group12}>
              <View style={styler.Rectangle12}>
                <Image source={require("../../../assets/images/Rectangle 15 (2).png")}/>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', top: 107,left: 15, width: 160,gap: 4}}>
                <View>
                  <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>React Native</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:150, }}>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4, width: 60}}>
                    <Image source={require('../../../assets/images/ant-design_play-circle-outlined.png')}  />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>4 Hours</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4,right: 10}}>
                    <Image source={require('../../../assets/images/ci_group.png')} />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>262k learners</Text>
                  </View>
                </View>
                <View style={{backgroundColor: 'rgba(75, 204, 165, 0.2)',height:19,width: 98,borderRadius:8,alignContent:'center'}}>
                  <Text style={{color: '#97C93F',alignSelf: 'center',fontFamily:'Poppins-Regular', fontSize:10}}>Foundation</Text>
                </View>
              </View>
            </View>
            <View style={styler.Group12}>
              <View style={styler.Rectangle12}>
                <Image source={require("../../../assets/images/Rectangle 15 (3).png")}/>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', top: 107,left: 15, width: 160,gap: 4}}>
                <View>
                  <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>Flutter</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:150, }}>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4, width: 60}}>
                    <Image source={require('../../../assets/images/ant-design_play-circle-outlined.png')}  />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>2 Hours</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', gap: 4,right: 10}}>
                    <Image source={require('../../../assets/images/ci_group.png')} />
                    <Text style={{color: 'white',fontFamily: 'Poppins-Light',fontSize: 10}}>186k learners</Text>
                  </View>
                </View>
                <View style={{backgroundColor: 'rgba(255, 187, 28, 0.2)',height:19,width: 78,borderRadius:8,alignContent:'center'}}>
                  <Text style={{color: '#FFBB1C',alignSelf: 'center',fontFamily:'Poppins-Regular', fontSize:10}}>Intermediate</Text>
                </View>
              </View>
            </View>
          </View>
          <View></View>
        </View>
      </View>
      <View></View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        position: "relative",
        width: 390,
        height: 844,
        backgroundColor: "#030A1E",
    },
    frame11808843:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        gap: 8,
        
        position: "absolute",
        width: 209,
        height: 56,
        left: 20,
        top: 38,
    },
    Ellipse:{
        width: 56,
        height: 56,
        flexGrow: 0,
    },
    Welcome:{
        width: 141,
        height: 54,
        fontFamily: "Poppins-Bold",
        color: "#FFFFFF",
        flex: 0,
        flexGrow: 0,
    },
    Frame17321:{
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: 3,
      gap: 3,
      position: "absolute",
      width: 109,
      height: 56,
      left: 257,
      top: 38,
      backgroundColor: "#12182B",
      borderRadius: 100,
    },
    resIcon:{
      width: 50,
      height: 50,
      backgroundColor: "#030A1E",
      borderRadius: 24,
      alignContent:'center'
    },
    ads:{
      position: "absolute",
      width: 342,
      height: 151,
      left: 0,
      top: 126,
    },
    announcement:{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 0,
      
      position: "absolute",
      width: 302,
      height: 109,
      left: 20,
    },
    CTA:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      
      top: 20,
      padding: 0,
      gap: 8,
      
      width: 302,
      height: 24,
    },
    JoinAClass:{
      color: '#E5D7A3',
      width: 153,
      height: 21,
      
      fontFamily: 'Poppins-Light',
      fontStyle: "normal",
      
      fontSize: 14,
      lineHeight: 21,
    },
    Learn:{ 
      fontFamily: 'Poppins-Regular',
      fontStyle: "normal",
      top: 10,
      color: 'white',
      fontSize: 20,
      lineHeight: 30,
      
    }
})
const styler =StyleSheet.create({
  personalised:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 24,
    position: "absolute",
    width: 342,
    height: 430,
    left: 24,
    top: 301,
  },
  heading:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    gap: 0,
    width: 342,
    height: 24,
  },
  forYou:{
    width: 168,
    height: 24,
    fontFamily: 'Poppins-Regular',
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  MoreComing:{
    width: 145,
    height: 18,
    fontFamily: 'Poppins-Regular',
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "right",
    color: "#E5D7A3",
  },
  ForYou:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 12,
    width: 342,
    height: 382,
  },
  More:{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    gap: 12,
    width: 342,
    height: 179,
  },
  Group12:{
    width: 165,
    height: 179,
  },
  Rectangle12:{
    position: "absolute",
    width: 165,
    height: 179,
    left: 0,
    top: 0,
    backgroundColor: "#12182B",
    borderRadius: 20,
    
  },
  Frame11:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 128,
    height: 61,
    left: 15,
    top: 107,
  },
  ProductDesign:{
    width: 106,
    height: 15,
    fontFamily: 'Poppins-Light',
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  Frame11808840:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    gap: 0,
    position: "absolute",
    width: 128,
    height: 15,
    left: 0,
    marginTop: 21, 
  },
  Frame11808839:{
    flexDirection: "row",
    alignItems: 'center',
    padding: 0,
    gap: 0,
    position: "absolute",
    width: 50,
    height: 15, 
  },
  Frame11808838:{
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    padding: 0,
    gap: 3,
    position: "absolute",
    width: 73,
    height: 15, 
  },
  Frame9:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingLeft: 15,
    gap: 10,
    width: 61,
    height: 19, 
  },
})
export default index
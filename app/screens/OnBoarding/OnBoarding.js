import React, { useEffect, useRef } from "react";
import { onBoardingsData } from "../../assets/data/dummydata";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { theme, images } from "../../constants";

const { COLORS, FONTS, SIZES } = theme;
const { OnBoarding1, OnBoarding2, OnBoarding3 } = images;

//Setting first value for animation
// Passed to render dots
const scrollX = new Animated.Value(0);

/*########### Main Function ##########*/
const OnBoarding = () => {
  // State for scroll complete
  const [completed, setCompleted] = React.useState(false);


  const scrollRef = useRef();
  //Initialising Animation Listener
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardingsData.length - 1) {
        setCompleted(true);
      }
      
    });
  }, []);

  //$$$$$$$$$$ Rendering Pictures and Text $$$$$$$$$$$$$
  function renderContent() {
    
    return (
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      >
        {onBoardingsData.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            <View
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>

            <View
              style={{
                position: "absolute",
                bottom: "10%",

                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  fontFamily: "SemiBold",
                  fontSize: SIZES.body1,
                  lineHeight: 32,
                  textAlign: "center",
                  marginTop: SIZES.body1,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: SIZES.body3,
                  textAlign: "center",
                  marginTop: SIZES.body1,
                }}
              >
                {item.description}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 120,
                height: 60,
                paddingLeft: 20,
                justifyContent: "center",
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: COLORS.violet,
              }}
              onPress={() => {
                /*##### Accessing method of scroll view using react Ref #####*/
                scrollRef.current.scrollToEnd()
                setCompleted(true)
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.body2,
                  color: COLORS.white,
                }}
              >
                {completed ? "Lets Go" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.rootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

//$$$$$$$$$$$$$ Rendering Dots $$$$$$$$$$$$$

function renderDots() {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.dotContainer}>
      {onBoardingsData.map((item, index) => {
        /*  Opacity control of dots. This will be 
            Passed to Animated View         
        */
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        /*  Size control of dots. This will be 
            Passed to Animated View 
        */
        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [SIZES.base, 15, SIZES.base],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={[styles.dots, { width: dotSize, height: dotSize }]}
          ></Animated.View>
        );
      })}
    </View>
  );
}

//$$$$$$$$$$$$$ Style sheets $$$$$$$$$$$$$

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  rootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "32%" : "20%",
  },
  dotContainer: {
    flexDirection: "row",
    height: SIZES.padding,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnBoarding;

import { StatusBar } from 'expo-status-bar';
import { Animated, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import '../styles'
import Bulb from '../public/img/bulb.svg'
import Cash from '../public/img/cash.svg'
import CatieSrc from '../public/img/catie.png'
import Close from '../public/img/close.svg'
import Rocket from '../public/img/rocket.svg'

import SwitchSelector from 'react-native-switch-selector';
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators';
import { grey } from 'react-native-ios-kit/src/styles/colors';

const CloseButton = ({ navigation }) => {
    return (
        < Pressable style={styles.closeButton} onPress={() => navigation.navigate("Home")}>
            <Close />
        </Pressable>
    );
}
const PricingHeader = () => {
    return (

        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Financial coaching and education in your pocket</Text>
            <Text style={styles.subheaderText}>Upgrade to get the most out of Product</Text>
        </View>
    )
}
const PricingOptionsSwitch = () => {
    return (
        <View style={styles.pricingOptions}>
            <SwitchSelector
                options={[
                    { label: 'Monthly', value: false },
                    { label: 'Annually', value: true }
                ]}
                initial={0}
                onPress={value => setAnnual(value)}
                fontSize={small}
                selectedColor={black}
                buttonColor={primary}
                textColor={white}
                backgroundColor={secondary}
                hasPadding={false}
                height={30}
            />
            {annual &&
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>Best Value</Text>
                </View>
            }
        </View>
    )
}
const PricingCarousel = () => {
    tiers = [
        {
            title: 'Product Pro',
            priceMonthly: '$9.99/Month',
            priceAnnually: '$5.83/Month (69.99/year)',
            detailItems: [
                {
                    image: <Cash style={styles.tierDetailImage} />,
                    text: 'Unlimited Accounts',
                    subtext: 'Connect all of your accounts (limit on free tier is 3)',
                },
                {
                    image: <Bulb style={styles.tierDetailImage} />,
                    text: 'Proactive tips',
                    subtext: 'Get proactive financial insights from Product AI',
                },
                {
                    image: <Rocket style={styles.tierDetailImage} />,
                    text: 'New AI Tools',
                    subtext: 'You’ll get early access to our must powerful AI tools',
                },
            ]
        },
        {
            title: 'Product Pro + Coaching',
            priceMonthly: '$79.99/Month',
            priceAnnually: '$66.67/Month (879.99/year)',
            detailItems: [
                {
                    image: <Image style={styles.tierDetailImage} source={CatieSrc} />,
                    text: 'Human Coaching',
                    subtext: 'Unlimited calls and chats with your very personal finance coach',
                },
                {
                    image: <Rocket style={styles.tierDetailImage} />,
                    text: 'All Pro Features',
                    subtext: 'Unlimited accounts, proactive financial tips from Product AI, and our new, most powerful AI tools',
                },
            ]
        },
    ]
    scrollX = new Animated.Value(0);
    return (
        <View style={styles.carouselContainer}>
            <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * .95}
                snapToAlignment='center'
                contentOffset={{ x: width * .05, y: 0 }}
                decelerationRate='fast'
                contentContainerStyle={{
                    alignItems: 'center',
                    width: (width * .9) * tiers.length + 2 * (width * .1),
                    justifyContent: 'center'
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true })}
            >
                {tiers.map((tier, idx) => (
                    (
                        <View key={idx} style={styles.tierContainer}>
                            <View style={styles.tierHeaderContainer}>
                                <Text style={styles.tierTitle}>{tier.title}</Text>
                                <Text style={styles.tierPrice}>
                                    {
                                        annual ? tier.priceAnnually : tier.priceMonthly
                                    }
                                </Text>
                            </View>
                            <View style={styles.tierDetailsContainer}>
                                {tier.detailItems.map((item, i) => (

                                    <View key={i} style={styles.tierDetailItem}>
                                        {item.image}
                                        <View style={styles.tierDetailTextContainer}>
                                            <Text style={styles.tierDetailText}>{item.text}</Text>
                                            <Text style={styles.tierDetailSubtext}>{item.subtext}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )
                ))}
            </Animated.ScrollView >

            <View style={styles.carouselIndicator}>

                <RNAnimatedScrollIndicators
                    numberOfCards={tiers.length}
                    scrollWidth={width}
                    activeColor={tertiary}
                    inActiveColor={secondary}
                    scrollAnimatedValue={scrollX}
                />
            </View>
        </View>
    )
}
const ContinueButton = ({ navigation }) => {
    return (
        <Pressable style={styles.continueButton} onPress={() => navigation.navigate('Paid')}>
            <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
    );
}


const Pricing = ({ navigation }) => {
    [annual, setAnnual] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: black }}>
            <View style={styles.container}>
                <CloseButton navigation={navigation} />
                <PricingHeader />
                <PricingOptionsSwitch />
                <PricingCarousel />
                <ContinueButton navigation={navigation} />
            </View >
        </SafeAreaView>
    )
}

export default Pricing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: black,
        display: 'flex',
        alignItems: "center",
        paddingVertical: 60,
    },


    // CLOSE BUTTON
    closeButton: {
        position: 'absolute',
        height: 30,
        width: 30,
        right: width * .08,
        backgroundColor: secondary,
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },


    // CONTINUE BUTTON
    continueButton: {
        backgroundColor: primary,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        width: width * .8,
    },
    continueButtonText: {
        fontSize: medium,
    },


    // HEADER
    headerContainer: {
        paddingHorizontal: 30,
    },
    headerText: {
        color: white,
        fontSize: xlarge,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    },
    subheaderText: {
        color: tertiary,
        fontSize: medium,
        textAlign: 'center',
        padding: 4,
    },


    // PRICING
    pricingOptions: {
        width: width * .4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    badge: {
        backgroundColor: secondary,
        borderRadius: 12,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    badgeText: {
        color: primary,
        fontSize: xsmall,
        fontWeight: 'bold'
    },


    // CAROUSEL
    carouselContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    carouselIndicator: {
        flex: 1,
        padding: 10,
    },


    // TIER
    tierContainer: {
        width: width * .85,
        height: height * .45,
        borderRadius: 9,
        backgroundColor: secondary,
        margin: 5,
    },
    tierHeaderContainer: {
        margin: 25,

    },
    tierTitle: {
        color: primary,
        fontSize: large,
        fontWeight: "bold",
        margin: 2,
    },
    tierPrice: {
        fontSize: large,
        color: white,
    },
    tierDetailsContainer: {
        flex: 1,
        justifyContent: 'space-sevenly',

    },
    tierDetailItem: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    tierDetailImage: {
        marginLeft: 15,
        marginRight: 30,
        height: 30,
        width: 30,
    },
    tierDetailTextContainer: {
        flexShrink: 1,
        paddingHorizontal: 20,
    },
    tierDetailText: {
        color: white,
        fontSize: large,
        padding: 3,
        fontWeight: 'bold',
    },
    tierDetailSubtext: {
        color: white,
        fontSize: medium,
        color: tertiary,
        padding: 4,
        flexShrink: 1,
    },
});

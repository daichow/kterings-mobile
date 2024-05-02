import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Pressable } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Props {
    image: ImageSourcePropType,
    name: string,
    category: string,
    distance: string
    rating: number
}

const Product: React.FC<Props> = ({ image, name, category, distance, rating }) => {
    return (
        // <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
        <Pressable onPress={() => {
            router.navigate({
                pathname: '/productscreen/', params: {
                    image: image,
                    name: name,
                    category: category,
                    distance: distance,
                    rating: rating

                }
            });
        }}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image
                        source={image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.infoContainer}>
                        <View>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.subtitle}>{category} • {distance}</Text>
                        </View>
                        {/* Assume rating is passed as prop */}
                        <View style={styles.ratingContainer}>
                            {/* <StarIcon style={styles.starIcon} /> */}
                            <FontAwesome name="star" size={16} style={styles.starIcon} />
                            <Text style={styles.rating}>4.5</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
        // </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        marginRight: 20,
        elevation: 5,
        shadowOffset: { width: 1, height: 1 },
        borderRadius: 10,
        shadowColor: 'black',
        // shadowOpacity: 0.4,
        shadowRadius: 10,
        borderColor: "#E9E9E9",
        borderWidth: 1, // Add border to maintain the rounded shape
        borderBottomWidth: 3,
    },
    cardHeader: {
        // Add styling for your card header if needed
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
        // Add more styling for your image if needed
    },
    cardContent: {
        padding: 16,
        // Add more styling for your card content if needed
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // Add more styling for your info container if needed
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'TT Chocolates Trial Bold',
        // Add more styling for your title if needed
    },
    subtitle: {
        fontSize: 10,
        color: '#888',
        fontFamily: 'TT Chocolates Trial Regular',
        // Add more styling for your subtitle if needed
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginRight: 10,
        // Add more styling for your rating container if needed
    },
    starIcon: {
        // Add styling for your star icon if needed
        color: '#FFBF00',
    },
    rating: {
        fontSize: 8,
        fontWeight: 'bold',
        marginLeft: 4,
        fontFamily: 'TT Chocolates Trial Bold',
        // Add more styling for your rating if needed
    },
});

export default Product;

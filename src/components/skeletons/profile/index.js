import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const ProfileSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={style.banner} />
      <View style={style.user}>
        <View style={style.image} />
      </View>
      <View style={style.content}>
        <View style={style.name} />
        <View style={style.description} />
        <View style={style.message} />
      </View>
    </SkeletonPlaceholder>
  );
};

const style = StyleSheet.create({
  banner: {
    height: 200,
    width: '100%',
  },
  user: {
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 100,
    marginTop: -40,
  },
  content: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    height: 20,
    width: 120,
  },
  description: {
    height: 20,
    width: 140,
    marginTop: 10,
  },
  message: {
    height: 20,
    width: 190,
    marginTop: 40,
  },
});

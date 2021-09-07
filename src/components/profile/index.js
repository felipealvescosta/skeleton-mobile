import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';

export const Profile = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOTrefEd0HBCwVccfI_dXjqAD0Hkirq70fWn4SMNS2_ILPPFKoFrQz1gvevy2TJyKfUI&usqp=CAU',
        }}
        style={style.banner}
      />
      <View style={style.user}>
        <Image
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQEhmTLaU6y7lA/profile-displayphoto-shrink_200_200/0/1620174937832?e=1636588800&v=beta&t=3sk4ybec57x8inmOTG7Ui_JVA8IEpAepVw8JqJOc5Uk',
          }}
          style={style.image}
        />
      </View>
      <View style={style.content}>
        <Text style={style.name}>Olá, Felipe Alves</Text>
        <Text style={style.description}>Mobile Developer</Text>
        <Text style={style.message}>Apenas um exemplo do Skeleton/Shimmer</Text>
      </View>
    </View>
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
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  content: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
  },
  message: {
    marginTop: 40,
  },
});

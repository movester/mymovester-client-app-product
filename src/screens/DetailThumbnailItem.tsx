import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StretchingItem } from '../types/model/stretching';
import { STRETCHING_MAIN_CATEGORY_TEXT, STRETCHING_SUB_CATEGORY_TEXT, STRETCHING_EFFECT_TEXT } from '../constants/text';

interface Props {
  stretchingItem: StretchingItem;
  onPress: (id: number) => void;
}

export default function DetailThumbnailItem({ stretchingItem, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(stretchingItem.id)}>
      <Image
        source={{ uri: stretchingItem.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{stretchingItem.title}</Text>
        <View style={styles.meta}>
          <Text style={styles.metaText}>
            {STRETCHING_MAIN_CATEGORY_TEXT[stretchingItem.mainCategory as keyof typeof STRETCHING_MAIN_CATEGORY_TEXT]} |{' '}
            {STRETCHING_SUB_CATEGORY_TEXT[stretchingItem.subCategory as keyof typeof STRETCHING_SUB_CATEGORY_TEXT]}
          </Text>
          <Text style={styles.metaText}>
            {STRETCHING_EFFECT_TEXT[stretchingItem.effect as keyof typeof STRETCHING_EFFECT_TEXT]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#eee',
  },
  textWrapper: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  meta: {
    flexDirection: 'column',
    gap: 2,
  },
  metaText: {
    fontSize: 12,
    color: '#666',
  },
});

import React from 'react';
import { Pressable } from 'react-native';
// import { Box, Typography } from 'movester-design-system';
import { colors } from '../constants/style'; // 웹과 동일한 컬러셋
import { labeItemType } from '../screens/StretchingPage';
// import Box from 'movester-design-system/dist/lib/Box';
// import Typography from 'movester-design-system/dist/lib/Typography';

interface Props {
  labelItems: labeItemType[];
  selectedItem: labeItemType;
  setSelectedItem: (item: labeItemType) => void;
}

export default function CategoryButton({ labelItems, selectedItem, setSelectedItem }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={8}
      borderRadius={8}
      overflow="hidden"
      backgroundColor={colors.g000}
      border={`1px solid ${colors.g000}`}
    >
      {labelItems.map((item) => {
        const isSelected = selectedItem.labelId === item.labelId;
        return (
          <Pressable key={item.labelId} onPress={() => setSelectedItem(item)}>
            <Box
              width={120}
              height={36}
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor={isSelected ? colors.softPrimaryColor : colors.f000}
            >
              <Typography
                variants="body2"
                color={isSelected ? colors.f000 : colors.vividPrimaryColor}
              >
                {item.label}
              </Typography>
            </Box>
          </Pressable>
        );
      })}
    </Box>
  );
}

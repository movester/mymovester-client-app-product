import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { apiFetchGetStretchings } from '../apis/stretching';
import { StretchingItem } from '../types/model/stretching';
import DetailThumbnailItem from './DetailThumbnailItem';
import CategoryButton from '../components/CategoryButton';

const PAGE_SIZE = 10;

export type labeItemType = { label: string; labelId: string };

export default function StretchingPage() {
const labelItems = [
  { label: '타겟 부위', labelId: 'sections' },
  { label: '효과', labelId: 'effects' },
];

  const [selectedLabel, setSelectedLabel] = useState<labeItemType>(labelItems[0]);
  const [stretchings, setStretchings] = useState<StretchingItem[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true); // 총 데이터가 29개니까 마지막 page에서 막기

  const loadMoreStretchings = async (targetPage: number) => {
    try {
      setIsFetching(true);
      const apiResponse = await apiFetchGetStretchings(targetPage, PAGE_SIZE);
      const newList = apiResponse.stretchingList;

      if (newList.length < PAGE_SIZE) {
        setHasNextPage(false); // 더 이상 가져올 데이터가 없음
      }

      setStretchings((prev) => [...prev, ...newList]);
      setPage(targetPage + 1);
    } catch (e) {
      console.error('API 호출 실패:', e);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    loadMoreStretchings(1); // 페이지 1부터 초기 로딩
  }, []);

  const handleLoadMore = () => {
    if (!isFetching && hasNextPage) {
      loadMoreStretchings(page);
    }
  };

  const renderItem = ({ item }: { item: StretchingItem }) => (
    <DetailThumbnailItem
      stretchingItem={item}
      onPress={(id) => {
        console.log('상세로 이동할 ID:', id);
        // TODO: React Navigation 연결 예정
      }}
    />
  );

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.labelSelector}>
        {labelItems.map((item) => (
          <TouchableOpacity
            key={item.labelId}
            style={[
              styles.labelButton,
              item.labelId === selectedLabel.labelId && styles.selectedButton,
            ]}
            onPress={() => setSelectedLabel(item)}
          >
            <Text style={styles.labelText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <CategoryButton
        labelItems={labelItems}
        selectedItem={selectedLabel}
        setSelectedItem={setSelectedLabel}
      />


      <FlatList
        data={stretchings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          isFetching ? <ActivityIndicator size="small" color="#999" /> : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  labelSelector: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'center',
    gap: 8,
  },
  labelButton: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  selectedButton: {
    backgroundColor: '#eee',
    borderColor: '#333',
  },
  labelText: {
    fontSize: 16,
  },
  list: {
    gap: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  itemBox: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
  },
});

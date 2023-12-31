import type { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { albumKey } from './queries';
import album from '@/services/album';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Album } from '@/types/album';

export function useGetAlbum(albumId: Ref<number>) {
  return useQuery<Album>({
    queryKey: albumKey.id(albumId),
    queryFn: () => album.get(albumId.value),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}

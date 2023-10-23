import { useQuery } from '@tanstack/vue-query';

import album from '@/services/album';
import { albumKey } from './queries';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';

export function useGetAlbums() {
  return useQuery({
    queryKey: albumKey.all,
    queryFn: album.getAll,
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SearchQueryType<T> {
  query: T;
}

const useSearchQuery = <T extends object>({ query }: SearchQueryType<T>) => {
  const [searchQuery, setSearchQuery] = useState<T>(query);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setSearchQuery(query);
  }, [searchParams]);

  const queryHandler = <K extends keyof T>(key: K, value: T[K]) => {
    const updatedQuery = { ...searchQuery, [key]: value };
    setSearchQuery(updatedQuery);
    updateSearchQuery(updatedQuery);
  };

  const updateSearchQuery = (updatedQuery: T) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(updatedQuery).forEach(key => {
      const value = updatedQuery[key as keyof T];
      if (key) {
        params.set(key, value as unknown as string);
      } else {
        params.append(key, value as unknown as string);
      }
    });
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };

  return { searchQuery, queryHandler };
};

export default useSearchQuery;

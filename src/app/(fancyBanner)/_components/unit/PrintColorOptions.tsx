'use client';

import * as styles from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { OptionsType } from '@/types/fancy';
import useSearchQuery from '@/hooks/useSearchQuery';

interface PrintColorOptionsProps {
  selectedColors: OptionsType['subOptions'];
}

interface SearchQueryType {
  selectColor: string;
}

const PrintColorOptions = ({ selectedColors }: PrintColorOptionsProps) => {
  const initialQuery: SearchQueryType = {
    selectColor: '',
  };
  const { searchQuery, queryHandler } = useSearchQuery<SearchQueryType>({
    query: initialQuery,
  });
  if (selectedColors) {
    return (
      <>
        {selectedColors.map(color => {
          return (
            <div>
              <div
                onClick={() => queryHandler('selectColor', color.name)}
                key={color.id}
                style={assignInlineVars({
                  [styles.colorOptionVar]: color.name,
                })}
                className={styles.colorOption}
              ></div>
            </div>
          );
        })}
      </>
    );
  }
};

export default PrintColorOptions;

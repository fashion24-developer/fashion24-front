'use client';

import * as styles from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { OptionsType } from '@/types/fancy';
import { useSelectOption } from '@/hooks/useSelectOption';

interface PrintColorOptionsProps {
  selectedColors: OptionsType;
}

const PrintColorOptions = ({ selectedColors }: PrintColorOptionsProps) => {
  const { selectedOptionHandler } = useSelectOption();

  const getSelectOption = (subOptionId: number, subOption: string) => {
    selectedOptionHandler({
      optionId: selectedColors.id,
      name: selectedColors.name,
      subOptionId: subOptionId,
      selectOptionName: subOption,
    });
  };

  if (selectedColors) {
    return (
      <>
        {selectedColors.subOptions.map(color => {
          return (
            <div>
              <div
                onClick={() => getSelectOption(color.id, color.name)}
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

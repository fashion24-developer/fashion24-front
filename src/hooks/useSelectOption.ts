import { cartAtom } from '@/jotai/atoms/cartAtom';
import { useAtom } from 'jotai';

interface useSelectOptionType {
  optionId: number;
  name: string;
  subOptionId: number;
  selectSubOption: string;
}

//옵션 선택시 사용하는 hook
export function useSelectOption() {
  const [selectOption, setSelectOption] = useAtom(cartAtom);

  const selectedOptionHandler = ({
    optionId,
    name,
    subOptionId,
    selectSubOption,
  }: useSelectOptionType) => {
    const existingOptionIndex = selectOption.options.findIndex(
      option => option.optionId === optionId
    );

    if (existingOptionIndex !== -1) {
      const existingOption = selectOption.options[existingOptionIndex];
      if (existingOption.subOptionId === subOptionId) {
        // 동일한 subOptionId가 존재하므로 아무 작업도 하지 않음
        return;
      } else {
        // subOptionId가 다르므로 기존 항목을 새로운 항목으로 교체
        setSelectOption(prev => {
          const newOptions = [...prev.options];
          newOptions[existingOptionIndex] = {
            optionId,
            name,
            subOptionId,
            selectSubOption,
          };
          return {
            ...prev,
            options: newOptions,
          };
        });
      }
    } else {
      // 동일한 optionId가 존재하지 않으므로 새로운 항목 추가
      setSelectOption(prev => {
        return {
          ...prev,
          options: [
            ...prev.options,
            {
              optionId,
              name,
              subOptionId,
              selectSubOption,
            },
          ],
        };
      });
    }
  };

  return { selectOption, selectedOptionHandler };
}

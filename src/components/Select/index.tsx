import { ChangeEvent, Dispatch, FC, SetStateAction, memo } from 'react';

interface ISelectProps {
    options: string [];
    selectedCurrency: string;
    setCurrency: Dispatch<SetStateAction<string>>
}

const Select: FC<ISelectProps> = ({ options, setCurrency, selectedCurrency}): JSX.Element => {
    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = event.target;
        setCurrency(value);
    }

    return (
        <select onChange={onSelectChange} value={selectedCurrency}>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default memo(Select);
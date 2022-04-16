import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';

interface InputProps {
    type: HTMLInputTypeAttribute;
    initialValue: string;
    changeValue: (value: number) => void;
    placeholder?: string
}

const Input: FC<InputProps> = ({ type, initialValue, changeValue, placeholder}): JSX.Element => {
    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        if (+value >= 0 && +value !== Infinity) {
            changeValue(Number(value));
        }
    }

    return (
        <input type={type} value={initialValue} onChange={onChange} placeholder={placeholder}/>
    );
};

export default Input;
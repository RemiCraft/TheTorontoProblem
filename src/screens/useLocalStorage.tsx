import React from "react"

export default function useLocalStorage(key: string): [number, (val: number) => void]
{
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const valueString = localStorage.getItem(key);
        if (valueString)
        {
            //HEHE
            //setValue(parseInt(valueString));
        }
    }, []);

    React.useEffect(() => {
        if (value)
        {
            localStorage.setItem(key, value.toString());
        }
    }, [value]);

    return [value, setValue];
}
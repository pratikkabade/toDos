import { useState, useEffect } from "react";

type props = {
    id: string;
}

export const CheckBox = ({ id }: props) => {
    const [checked, setChecked] = useState(false);

    const toggle = () => {
        setChecked(!checked)
        // save this locally
        localStorage.setItem(id, checked ? "" : "checked");
    };

    useEffect(() => {
        // get the value from local storage
        const ls = localStorage.getItem(id);

        // if there is a value in local storage, set the checked state to that value
        if (ls === "checked") {
            setChecked(true);
        }
    }, [id]);

    return (
        <div>

            <label
                htmlFor={id}
                className="flex flex-row justify-start">
                <input
                    type='checkbox'
                    id={id}
                    checked={checked}
                    onChange={toggle}
                    className="my-1"
                />
                <div
                    className="ml-1 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300">
                    {id}
                </div>
            </label>

        </div>
    )
};
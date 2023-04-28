import React, { ChangeEventHandler } from "react";
import Label from "../Label";

type Props = {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function TextArea(props: Props) {
  const { label, value, onChange } = props;

  return (
    <div>
      <Label name={label!} important={true} />
      <textarea
        className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border 
                  placeholder-gray-500 text-gray-700
                  focus:outline-none focus:ring-sky-500
                  focus:border-sky-500 focus:z-10 sm:text-sm border-2 border-grey-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

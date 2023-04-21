import React, { ChangeEventHandler } from "react";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function TextArea(props: Props) {
  const { value, onChange } = props;

  return (
    <div>
      <textarea
        className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm border-2 border-sky-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

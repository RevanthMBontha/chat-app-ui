import { twMerge } from 'tailwind-merge';

export function Input({
  beforeComponent,
  value,
  setValue,
  placeholder,
  parentStyle = '',
  inputStyle = '',
}: {
  beforeComponent?: any;
  value?: any;
  setValue?: any;
  placeholder?: string;
  parentStyle?: string;
  inputStyle?: string;
}) {
  const parentClass = twMerge('flex w-full p-4', parentStyle);
  const inputClass = twMerge(
    `w-full h-8 border border-gray-200 rounded-full bg-gray-200 shadow-md focus:bg-gray-50 focus:outline-0 focus:ring-0 focus:shadow-xl placeholder:text-gray-500 ${
      !!beforeComponent ? 'pl-8' : 'pl-4'
    }`,
    inputStyle
  );
  return (
    <div className={parentClass}>
      <div className="absolute top-8 left-6">{beforeComponent}</div>
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

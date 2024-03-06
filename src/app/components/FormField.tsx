type Props = {
  type?: string;
  name: string;
  title: string;
  value: string;
  placeholder: string;
  isTextArea?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField = ({
  type,
  title,
  name,
  value,
  placeholder,
  isTextArea,
  onChange,
}: Props) => {
  return (
    <div className='flexStart flex-col w-full gap-3'>
      <label className='w-full text-black font-bold mt-2'>{title}</label>

      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className='form_field-input'
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          type={type || "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          required
          className='form_field-input'
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;

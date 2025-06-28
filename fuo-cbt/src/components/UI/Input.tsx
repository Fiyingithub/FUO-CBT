interface InputProps {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, className,placeholder, name, value, onChange }: InputProps) => {
  return (
    <div>
      <input type={type} required className={className} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    </div>
  );
};

export default Input;

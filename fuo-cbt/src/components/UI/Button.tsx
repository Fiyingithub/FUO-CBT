interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode ;
  className?: string;
  disabled?: boolean;
  
}

export const Button = ({ label, className,disabled, ...rest }: ButtonProps) => {
  return (
    <button className={className} {...rest} disabled={disabled}>
      {label}
    </button>
  );
};





{
  /* <div>
  <label className="block text-sm text-gray-700 mb-1">Payment Date</label>
  <DatePicker
    selected={formData.paymentDate ? new Date(formData.paymentDate) : null}
    onChange={(date) =>
      setFormData((prev) => ({
        ...prev,
        paymentDate: date.toISOString().split("T")[0],
      }))
    }
    className="w-full p-[5px] border border-gray-300 rounded-md outline-none focus:border-red-600"
    placeholderText="Select Payment Date"
  />
</div>; */
}

// import Select from "react-select";
// import ClipLoader from "react-spinners/ClipLoader";
// import DatePicker from "react-datepicker";

// import * as React from "react";
// import { LoaderSizeProps } from "./helpers/props";
// declare function ClipLoader({ loading, color, speedMultiplier, cssOverride, size, ...additionalprops }: LoaderSizeProps): React.JSX.Element | null;
// export default ClipLoader;


{/* <ClipLoader color="#ffffff" size={20} /> {isEdit ? "Editing..." : "Submitting..."} */}

import React from 'react'

function Inputs({
    type,
    name,
    id,
    label,
    placeholder,
    value,
    options,
    onChange,
    checked,text,accept,className,readOnly,required
  }) {

        return (
          <>
          <span className={` ${type==="textarea"  ? "col-span-2" : type==="checkbox" && "!flex  flex-row-reverse justify-end"} grid gap-2`}>
          {label && <label htmlFor={id}>{label}</label>}
            {type === "select" ? (
              <select value={value} id={id} onChange={onChange} className="border p-2  rounded-lg ">
                  {
                      options?.map((option)=>{
                          return (
                              <option selected={option?.selected} disabled={option?.disable} value={option?.value}>{option?.name}</option>
                          )
                      })
                  }
              </select>
            )
            : type==="textarea"? <textarea   type={type}
            className="outline-none border rounded-lg p-2 "
            placeholder={placeholder}
            value={value}
            id={id}
            name={name}
            onChange={onChange && onChange}>
      
            </textarea>
            : type === "file" ? (
              <span>
                <button className='w-full p-2 border-1 rounded-xl bg-yellow-600 text-white' onClick={handleClick}>
                  {text}
                </button>
                <input
                  type="file"
                  id={id}
                  ref={ref}
                  className="hidden"
                  accept={accept}
                  onChange={onChange}
                />
              </span>
            )
             :(
              
                <input
                  type={type}
                  className={`outline-none  rounded-lg  ${className}`}
                  placeholder={placeholder}
                  value={value}
                  id={id}
                  checked={checked}
                  name={name}
                  onChange={onChange}
                  required={required}
                  readOnly={readOnly}
                />
              )}
              </span>
          </>
        );
      };

export default Inputs
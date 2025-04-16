"use client";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  className?: string;
  rows?: number;
};

export default function TextField({ name, rows = 1, className = "" }: Props) {
  const { control } = useFormContext();

  return (
    <div className={`${className} pb-5 relative text-sm-2`}>
      <label htmlFor={name} className="block uppercase">
        {name}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <textarea
              {...field}
              className="w-full border-b-1 border-gray-300 focus:outline-none focus:border-blue-500 py-1 resize-none"
              rows={rows}
              id={name}
            />
            {fieldState?.error && (
              <p className="text-error absolute bottom-0">
                {fieldState?.error?.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}

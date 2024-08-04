'use client';
import React from 'react';
import TextInput from './TextInput';
import { Calendar } from 'primereact/calendar';
import DropDown from './DropDown';
import PrimaryButton from './PrimaryButton';
import { Controller, useForm } from 'react-hook-form';
import Image from 'next/image';
import { MdPeopleAlt } from 'react-icons/md';
import { IoCalendar } from "react-icons/io5";

export default function BookNowSection({
  imageSrc,
  page,
}: Readonly<{ imageSrc: string; page: 'kenya' | 'zanzibar' }>) {
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
    reset,
    handleSubmit,
  } = useForm();

  const calendarPt = {
    input: {
      root: {
        className: ' text-left h-9 items-center px-3 ',
      },
    },
    dropdownButton: {
      root: {
        className: '  px-2 h-9 bg-[#FBF7F3]',
      },
    },
  };
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2  gap-8 ">
      <div className="relative w-full h-auto pb-full flex-grow overflow-hidden hover:scale-110 transition-transform duration-1000">
        <Image src={imageSrc} alt={''} layout="fill" objectFit="cover" />
      </div>
      <div
        className={`card ${
          page == 'kenya' ? 'bg-[#2C6E63]' : 'bg-[#499fab]'
        } rounded-lg w-full`}
      >
        <form
          action="submit"
          className="grid grid-cols-2 py-4 sm:py-16 px-4 sm:px-16 gap-1 sm:gap-2"
        >
          <h2 className="text-white text-lg sm:text-[28px] font-bold pb-4 col-span-2  ">
            LET'S PLAN YOUR DREAM TRIP TOGETHER!
          </h2>

          <div className="col-span-2 ">
            <Controller
              name={'destination'}
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <DropDown
                  label="DESTINATION"
                  placeholder="Select one..."
                  id={field.value}
                  value={field.value}
                  options={[]}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  error={errors?.[field.name]?.message as React.ReactNode}
                />
              )}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <Controller
              name={'adults'}
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextInput
                  label={'ADULTS'}
                  id={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors?.[field.name]?.message as React.ReactNode}
                  labelIcon={<MdPeopleAlt color='#561217' />}
                ></TextInput>
              )}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Controller
              name={'children'}
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextInput
                  label={'CHILDREN'}
                  id={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors?.[field.name]?.message as React.ReactNode}
                  labelIcon={<MdPeopleAlt color='#561217'/>}
                ></TextInput>
              )}
            />
          </div>

          <div className="col-span-2">
            <Controller
              control={control}
              name={'arrivalDate'}
              render={({ field }) => (
                <div className="flex flex-col">
                  <span className="flex flex-grow justify-start flex-col gap-4 p-input-icon-right ">
                    <label
                      htmlFor="catalogDate"
                      className="font-bold text text-[#FBE5B6]"
                    >
                      {'ARRIVAL DATE'}
                    </label>
                    <Calendar
                      inputId={field.name}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      dateFormat="dd-mm-yy"
                      className="h-9 items-center text text-black"
                      inputClassName="h-9 p-1"
                      icon = {<IoCalendar color='#561217'/>}
                      showIcon
                      showButtonBar
                      readOnlyInput
                      pt={calendarPt}
                    />
                  </span>
                  {errors?.[field.name] ? (
                    <p className="text-red-600 text-right">
                      {errors?.[field.name]?.message as React.ReactNode}
                    </p>
                  ) : (
                    <p className="text text-right">&nbsp;</p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="col-span-2">
            <PrimaryButton label={'BOOK NOW'} className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
}

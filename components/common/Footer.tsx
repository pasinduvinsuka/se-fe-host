'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import TextInput from './TextInput';
import PrimaryButton from './PrimaryButton';
import { Controller, useForm } from 'react-hook-form';

// Footer component definition
export default function Footer() {
  // Initializing form control using react-hook-form
  const {
    control,
    formState: { errors }
  } = useForm();

  return (
    <div className="bg-[#1D564D] relative text-white pt-16 pb-8 h-[600] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/public/media/svgs/common/footer.svg"
        alt="Footer Background"
        layout="fill"
        objectFit="cover"
      />

      {/* Footer Content */}
      <div className="z-10 px-7 md:px-28 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
        {/* First Column with links */}
        <div className="flex flex-col lg:items-center">
          <h6 className="font-bold mb-2">Column One</h6>
          <ul>
            <li className="mb-1">Link One</li>
            <li className="mb-1">Link Two</li>
            <li className="mb-1">Link Three</li>
            <li className="mb-1">Link Four</li>
            <li className="mb-1">Link Five</li>
          </ul>
        </div>

        {/* Second Column with links */}
        <div className="flex flex-col lg:items-center">
          <h6 className="font-bold mb-2">Column Two</h6>
          <ul>
            <li className="mb-1">Link Six</li>
            <li className="mb-1">Link Seven</li>
            <li className="mb-1">Link Eight</li>
            <li className="mb-1">Link Nine</li>
            <li className="mb-1">Link Ten</li>
          </ul>
        </div>

        {/* Third Column with links */}
        <div className="flex flex-col lg:items-center">
          <h6 className="font-bold mb-2">Column Three</h6>
          <ul>
            <li className="mb-1">Link Eleven</li>
            <li className="mb-1">Link Twelve</li>
            <li className="mb-1">Link Thirteen</li>
            <li className="mb-1">Link Fourteen</li>
            <li className="mb-1">Link Fifteen</li>
          </ul>
        </div>

        {/* Subscription Form */}
        <div className="col-span-1 md:col-span-2">
          <h6 className="font-bold mb-2">Subscribe</h6>
          <p className="mb-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex items-center mb-2 relative z-50">
            {/* Controlled Input for Email Subscription */}
            <Controller
              name={'email'}
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextInput
                  label={''}
                  id={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors?.[field.name]?.message as React.ReactNode}
                  placeholder="Enter your email"
                  labelBtn={
                    <PrimaryButton
                      label={'Subscribe'}
                      className="text-[#2c6e63] hover:scale-105"
                      onClick={() => {}}
                    />
                  }
                />
              )}
            />
          </div>
          <p className="text-sm">
            By subscribing you agree to with our{' '}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{' '}
            and provide consent to receive updates from our company.
          </p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="py-3 px-28">
        <hr />
      </div>

      {/* Footer Bottom Content */}
      <div className="relative z-10 container mx-auto px-7 md:px-28 flex flex-col md:flex-row justify-between items-center text-center mt-8">
        <p className="mb-4 md:mb-0">
          © 2024 Safari Expert. All rights reserved.{' '}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="#" className="underline">
            Terms of Service
          </Link>{' '}
          |{' '}
          <Link href="#" className="underline">
            Cookies Settings
          </Link>
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="#">
            <FaFacebook size={24} />
          </Link>
          <Link href="#">
            <FaInstagram size={24} />
          </Link>
          <Link href="#">
            <FaXTwitter size={24} />
          </Link>
          <Link href="#">
            <FaLinkedin size={24} />
          </Link>
          <Link href="#">
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

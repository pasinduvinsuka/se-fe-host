'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useRef, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';
import { PiPhoneCall } from "react-icons/pi";

// Component to display contact information with animated phone icon
const ContactInfo = () => {
  return (
    <div className="flex items-center bg-transparent p-4 rounded-md">
      <motion.div
        className="flex items-center justify-center bg-[#fbe5b6] rounded-full w-12 h-12"
        animate={{
          rotate: [0, 15, -15, 15, -15, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      >
        <PiPhoneCall className="text-2xl text-[#561217]" />
      </motion.div>
      <div className="ml-4">
        <p className="text-sm text-gray-100">Have Questions?</p>
        <p className="text-sm font-bold text-white">+1-(246)-333-0089</p>
      </div>
    </div>
  );
};

// Main NavBar component
export default function NavBar() {
  const pathname = usePathname(); // Hook to get the current path
  const router = useRouter(); // Hook for navigation
  const reportMenu = useRef<Menu>(null); // Ref for Reports menu
  const safariMenuRef = useRef<Menu>(null); // Ref for Safari menu
  const excursionsMenuRef = useRef<Menu>(null); // Ref for Excursions menu

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false); // State for side panel visibility

  // Menu items for Safari
  const SafariMenuItems: MenuItem[] = [
    {
      label: 'Safari Sub 1',
      command: () => {
        router.push('/safati/safarisub1');
      },
    },
    {
      label: 'Safari Sub 2',
      command: () => {
        router.push('/safati/safarisub2');
      },
    },
    {
      label: 'Safari Sub 3',
      command: () => {
        router.push('/safati/safarisub3');
      },
    },
    {
      label: 'Safari Sub 4',
      command: () => {
        router.push('/safati/safarisub4');
      },
    },
  ];

  // Menu items for Excursions
  const ExcursionsMenuItems: MenuItem[] = [
    {
      label: 'Excursion Sub 1',
      command: () => {
        router.push('/excursionsub1');
      },
    },
    {
      label: 'Excursion Sub 2',
      command: () => {
        router.push('/excursionsub2');
      },
    },
    {
      label: 'Excursion Sub 3',
      command: () => {
        router.push('/excursionsub3');
      },
    },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white shadow-sm px-10 md:hidden">
        <div className="flex flex-grow justify-between gap-8 items-center py-2">
          <div className="px-6 text-xl font-semibold flex items-center gap-4">
            <Link href={'/home'}>
              <Image
                src={'./media/svgs/common/safariExpertLogo.svg'}
                width={150}
                height={150}
                sizes="small"
                priority
                alt="Safari Expert logo"
                className="sm:w-[90px] md:w-[100px] xl:w-[120px] 2xl:w-[150px] w-[120px]"
              />
            </Link>
          </div>
          <Button
            icon="pi pi-bars"
            className="text-white"
            onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
          />
        </div>
      </div>

      {/* Side Panel for mobile view */}
      {isSidePanelOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col p-4">
            <Link
              href={'/zanzibar'}
              className={`mb-4 ${
                pathname == '/zanzibar'
                  ? 'text-primaryGreen font-bold'
                  : 'text-gray-800'
              }`}
              onClick={() => setIsSidePanelOpen(false)}
            >
              Zanzibar
            </Link>
            <Button
              className={`mb-4 ${
                pathname.includes('/blending/blendsheet')
                  ? 'text-primaryGreen font-bold'
                  : 'text-gray-800'
              }`}
              unstyled
              onClick={(event) => excursionsMenuRef.current?.toggle(event)}
            >
              Excursions
            </Button>
            <Menu
              model={[
                {
                  items: ExcursionsMenuItems,
                },
              ]}
              popup
              className="bg-white shadow-xl w-64"
              ref={excursionsMenuRef}
              popupAlignment="left"
              pt={{
                submenuHeader: { className: 'pt-0 h-0' },
              }}
            />
            <Link
              href={'/aboutus'}
              className={`mb-4 ${
                pathname == '/aboutus'
                  ? 'text-primaryGreen font-bold'
                  : 'text-gray-800'
              }`}
              onClick={() => setIsSidePanelOpen(false)}
            >
              About Us
            </Link>
            <Button
              className={`mb-4 ${
                pathname.includes('/safari/collectionsheetlist')
                  ? 'text-primaryGreen font-bold'
                  : 'text-gray-800'
              }`}
              unstyled
              onClick={(event) => safariMenuRef.current?.toggle(event)}
            >
              Safari
            </Button>
            <Menu
              model={[
                {
                  items: SafariMenuItems,
                },
              ]}
              popup
              className="rounded bg-white p-4 shadow-xl w-64"
              ref={safariMenuRef}
              popupAlignment="left"
              pt={{
                submenuHeader: { className: 'pt-0 h-0' },
              }}
            />
            <Button
              className={`mb-4 ${
                pathname.includes('/reports')
                  ? 'text-primaryGreen font-bold'
                  : 'text-gray-800'
              }`}
              unstyled
              onClick={(event) => reportMenu.current?.toggle(event)}
            >
              Reports
            </Button>
            <Link
              href={'/contact'}
              className={`mb-4 ${
                pathname == '/contact'
                  ? 'text-primaryGreen font-bold'
                  : 'text-gray-800'
              }`}
              onClick={() => setIsSidePanelOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white shadow-sm px-10 hidden md:flex">
        <div className="flex flex-row justify-between gap-8 items-center py-2">
          <div className="px-6 text-xl font-semibold flex items-center gap-4">
            <Link href={'/home'}>
              <Image
                src={'./media/svgs/common/safariExpertLogo.svg'}
                width={150}
                height={150}
                sizes="small"
                priority
                alt="Safari Expert logo"
                className="sm:w-[90px] md:w-[100px] xl:w-[120px] 2xl:w-[150px] w-[120px]"
              />
            </Link>
          </div>
          <div className="flex flex-row gap-10">
            <Link
              href={'/zanzibar'}
              className={`${
                pathname == '/zanzibar'
                  ? 'text-primaryGreen font-bold text-base underline underline-offset-10'
                  : 'hover:text-primaryGreen hover:font-bold hover:transition-all text-base'
              }`}
            >
              Zanzibar
            </Link>
            <Button
              className={`${
                pathname.includes('/blending/blendsheet')
                  ? 'flex space-between text-primaryGreen font-bold text-base'
                  : 'flex space-between hover:text-primaryGreen hover:font-bold hover:transition-all text-base'
              }`}
              unstyled
              onClick={(event) => excursionsMenuRef.current?.toggle(event)}
            >
              <span
                className={`${
                  pathname.includes('/blendsheet')
                    ? 'underline underline-offset-10'
                    : ''
                }`}
              >
                Excursions{' '}
              </span>
              <i className="pi pi-chevron-down ml-2 text-base pt-1"></i>
            </Button>
            <Menu
              model={[
                {
                  items: ExcursionsMenuItems,
                },
              ]}
              popup
              className="bg-white shadow-xl w-64"
              ref={excursionsMenuRef}
              popupAlignment="left"
              pt={{
                submenuHeader: { className: 'pt-0 h-0' },
              }}
            />
            <Link
              href={'/aboutus'}
              className={`${
                pathname == '/aboutus'
                  ? 'text-primaryGreen font-bold text-base underline underline-offset-10'
                  : 'hover:text-primaryGreen hover:font-bold hover:transition-all text-base'
              }`}
            >
              About Us
            </Link>
            <Button
              className={`${
                pathname.includes('/safari/collectionsheetlist')
                  ? 'flex space-between text-primaryGreen font-bold text-base'
                  : 'flex space-between hover:text-primaryGreen hover:font-bold hover:transition-all text-base'
              }`}
              unstyled
              onClick={(event) => safariMenuRef.current?.toggle(event)}
            >
              <span
                className={`${
                  pathname.includes('/safari')
                    ? 'underline underline-offset-10'
                    : ''
                }`}
              >
                Safari
              </span>
              <i className="pi-chevron-down ml-2 text-base pt-1 text-white"></i>
            </Button>
            <Menu
              model={[
                {
                  items: SafariMenuItems,
                },
              ]}
              popup
              className="rounded bg-white p-4 shadow-xl w-64"
              ref={safariMenuRef}
              popupAlignment="left"
              pt={{
                submenuHeader: { className: 'pt-0 h-0' },
              }}
            />
            <Button
              className={`${
                pathname.includes('/reports')
                  ? 'flex space-between text-primaryGreen font-bold text-base'
                  : 'flex space-between hover:text-primaryGreen hover:font-bold hover:transition-all text-base'
              }`}
              unstyled
              onClick={(event) => reportMenu.current?.toggle(event)}
            >
              <span
                className={`${
                  pathname.includes('/reports')
                    ? 'underline underline-offset-10'
                    : ''
                }`}
              >
                Reports
              </span>
              <i className="pi pi-chevron-down ml-2 text-base pt-1"></i>
            </Button>
            <Link
              href={'/contact'}
              className={`${
                pathname == '/contact'
                  ? 'text-primaryGreen font-bold text-base underline underline-offset-10'
                  : 'hover:text-primaryGreen hover:font-bold hover:transition-all text-base'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-grow justify-end gap-10 items-center">
          <ContactInfo />
          <PrimaryButton
            type={undefined}
            label={'BOOK NOW'}
            icon={undefined}
            className="h-fit"
          />
        </div>
      </div>
    </>
  );
}

import { Badge, Drawer, Input } from 'antd';
import justin from '../assets/justin.svg';
import arrowDown from '../assets/arrowDown.svg';
import hamburger from '../assets/hamburger.svg';
import calendar from '../assets/calendar.svg';
import notificationIcon from '../assets/notification.svg';
import search from '../assets/search.svg';
import { useState } from 'react';

const UserNavigation = ({ LSTheme, openNotification, currentDate }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex gap-[22px] '>
      <div className='hidden lg:block'>
        <Input
          size='large'
          placeholder='Search...'
          prefix={
            <img src={search} alt='search icon' className='w-[18px] h-[18px]' />
          }
        />
      </div>
      <div className='flex gap-5 items-center'>
        <div className='hidden md:flex items-center gap-[10px]'>
          <img
            src={calendar}
            alt='calendar icon'
            className={`header-icon w-5 h-5`}
          />
          <p>{currentDate}</p>
        </div>
        <div
          className='p-3 border border-zinc-300 rounded-[27px] flex cursor-pointer'
          onClick={openNotification}>
          <Badge count={5} size='small'>
            <img
              src={notificationIcon}
              alt='notification icon'
              className={`header-icon w-5 h-5`}
            />
          </Badge>
        </div>
        <div className='hidden lg:block'>
          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            className='text-white border border-[#DADDDD] rounded-[28px] hover:bg-zinc-100 font-medium text-sm text-center flex items-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:border-transparent py-[6px] px-2 gap-3 transition-all ease-in-out duration-300'
            type='button'>
            <div>
              <img src={justin} alt='Profile' className='w-10 h-10' />
            </div>
            <div className='flex flex-col gap-1 items-end'>
              <span className='text-zinc-800 dark:text-white text-base leading-[19px]'>
                Justin Bergson
              </span>
              <span className='text-zinc-500 dark:text-gray-400 leading-[17px]'>
                Justin@gmail.com
              </span>
            </div>
            <img
              src={arrowDown}
              alt='decorative'
              className={`header-icon w-[20px] h-[20px]`}
            />
          </button>

          <div
            id='dropdown'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDefaultButton'>
              <li>
                <a
                  href='/'
                  className='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                  Customers
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='lg:hidden cursor-pointer' onClick={showDrawer}>
          <img
            src={hamburger}
            alt='menu icon'
            className={`header-icon w-8 h-8`}
          />
        </div>
        <Drawer
          className={`${LSTheme === 'dark' ? '!bg-subDark !text-white' : ''}`}
          onClose={onClose}
          open={open}>
          <Input
            size='large'
            placeholder='Search...'
            prefix={
              <img
                src={search}
                alt='search icon'
                className='w-[18px] h-[18px]'
              />
            }
          />

          <div className='flex items-center gap-5 mt-5'>
            <img src={justin} alt='Profile' className='w-20 h-20' />
            <div>
              <p className='text-xl font-bold'>Justin Bergson</p>
              <p>Justin@gmail.com</p>
            </div>
          </div>
          <ul className='my-10'>
            <li className='border-b py-3 hover:text-primary cursor-pointer transition-all ease-in-out duration-300'>
              Profile
            </li>
            <li className='border-b py-3 hover:text-primary cursor-pointer transition-all ease-in-out duration-300'>
              Settings
            </li>
            <li className='border-b py-3 hover:text-primary cursor-pointer transition-all ease-in-out duration-300'>
              Orders
            </li>
          </ul>
          <p className='[@media(min-height:500px)]:fixed bottom-10 text-red-700 cursor-pointer transition-all ease-in-out duration-300 hover:text-red-800'>
            Sign Out
          </p>
        </Drawer>
      </div>
    </div>
  );
};

export default UserNavigation;

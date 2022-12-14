import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export interface tnavigation {
  name: string;
  href: string;
  current: boolean;
}

export interface tuserNavigation {
  name: string;
  href: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export interface IAppHeader {
  navigation: tnavigation[] | null;
  userNavigation: tuserNavigation[] | null;
}

const AppHeader: React.FC<IAppHeader> = ({ navigation, userNavigation }) => {
  //const [loggedIn, setLoggedIn] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <div className="min-w-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-8 h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        width="32"
                        height="32"
                        alt="Workflow"
                      />
                    </div>
                    {navigation && navigation.length > 0 && (
                      <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <a
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                                  'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                              >
                                {item.name}{' '}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <>
                        <button
                          type="button"
                          className="p-1 text-gray-200 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <UserCircleIcon className="w-8 h-8 rounded-full fill-gray-200" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item key="name">
                                <div className="block px-4 py-2 text-sm text-gray-700">
                                  {session?.user?.name
                                    ? session?.user?.name
                                    : 'New User'}
                                </div>
                              </Menu.Item>
                              <Menu.Item key="email">
                                <div className="block px-4 py-2 text-sm text-gray-700">
                                  {session?.user?.email}
                                </div>
                              </Menu.Item>
                              <hr />
                              {userNavigation &&
                                userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link href={item.href}>
                                        <a
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </a>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              <hr />
                              <Menu.Item key="logout">
                                <button
                                  onClick={() => {
                                    signOut({
                                      redirect: true,
                                      callbackUrl: '/',
                                    });
                                  }}
                                  className="block px-4 py-2 text-sm text-gray-700"
                                >
                                  Logout
                                </button>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-200 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation &&
                    navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                </div>

                <div className="pt-4 pb-3 border-t border-gray-700">
                  {session && (
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <UserCircleIcon className="w-8 h-8 rounded-full fill-gray-200" />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {session?.user?.name
                            ? session?.user?.name
                            : 'New User'}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-200">
                          {session?.user?.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-auto text-gray-200 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation &&
                      userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-200 rounded-md hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    <Disclosure.Button
                      key="logout"
                      as="a"
                      href="/api/auth/signout"
                      className="block px-3 py-2 text-base font-medium text-gray-200 rounded-md hover:text-white hover:bg-gray-700"
                    >
                      Logout
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default AppHeader;

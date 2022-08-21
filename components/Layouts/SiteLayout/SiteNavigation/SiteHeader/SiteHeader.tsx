import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export interface ISiteHeader {}

const SiteHeader: React.FC<ISiteHeader> = () => {
  return (
    <>
      <div className="min-w-full min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        width="32"
                        height="32"
                        alt="Workflow"
                      />
                    </div>

                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        <Link
                          key="Documentation"
                          href="https://michael-mowry.gitbook.io/test-gitbook-documentation/"
                          aria-current="page"
                        >
                          <a
                            className={classNames(
                              'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                            )}
                          >
                            Documentation{' '}
                          </a>
                        </Link>
                        <Link
                          key="Tokenomics"
                          href="https://michael-mowry.gitbook.io/test-gitbook-documentation/"
                          aria-current="page"
                        >
                          <a
                            className={classNames(
                              'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                            )}
                          >
                            Tokenomics{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex -mr-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 space-x-4 md:ml-6">
                      <Link key="login" href="/login">
                        <a className="px-3 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md">
                          Login
                        </a>
                      </Link>
                      <Link key="register" href="/register">
                        <a className="px-3 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md">
                          Register
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Disclosure.Button
                    key="Documentation"
                    as="a"
                    href="https://michael-mowry.gitbook.io/test-gitbook-documentation/"
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current="page"
                  >
                    Documentation
                  </Disclosure.Button>
                  <Disclosure.Button
                    key="Tokenomics"
                    as="a"
                    href="https://michael-mowry.gitbook.io/test-gitbook-documentation/"
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current="page"
                  >
                    Tokenomics
                  </Disclosure.Button>
                </div>

                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="px-2 mt-3 space-y-1">
                    <Disclosure.Button
                      key="login"
                      as="a"
                      href="/login"
                      className="block px-3 py-2 text-base font-medium bg-indigo-500 rounded-md hover:text-white hover:bg-gray-700"
                    >
                      Login
                    </Disclosure.Button>
                    <Disclosure.Button
                      key="register"
                      as="a"
                      href="/register"
                      className="block px-3 py-2 text-base font-medium bg-indigo-500 rounded-md hover:text-white hover:bg-gray-700"
                    >
                      Register
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

export default SiteHeader;

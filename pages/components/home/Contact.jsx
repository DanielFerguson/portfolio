import Image from 'next/image';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact() {
    return (
        <div id="contact" className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <Image
                        className="h-96 w-full object-cover lg:absolute lg:h-full"
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=60"
                        layout="fill"
                        alt="Contact splash"
                    />
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                <div className="lg:pr-8">
                    <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let&apos;s work together!</h2>
                        <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                            Have you got a killer idea you need help realising? Need some digital consultancy? I’d love to chat! Reach me through…
                        </p>

                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>Melbourne, Australia</p>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <a href="mailto:gday@danferg.com" className="ml-3 text-indigo-500 font-medium">gday@danferg.com</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
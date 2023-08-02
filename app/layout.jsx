import Image from 'next/image';
import '../styles/globals.css';

import Navigation from './components/Navigation/Navigation.jsx';
import SocialAnimation from './components/SocialAnimation/SocialAnimation';
import AboutMe from './components/AboutMe/page';
import Animation1 from './components/Animation1/page';


export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <section className='w-full h-50 min-h-screen'>
                    <Navigation />
                    <div className='container absolute flex flex-col space-y-9 '>
                        <div className="flex justify-around items-center mb-24">
                            <SocialAnimation />
                            <AboutMe />
                        </div>
                        <div className='flex justify-end'>
                            <Animation1 />
                        </div>
                    </div>
                </section>

                <section className='w-full h-full p-3 text-white'>
                    {children}
                </section>

            </body>
        </html>
    )
};

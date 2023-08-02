import Link from 'next/link'
function AboutMe() {
    return (
        <div className=" text-slate-800 font-semibold">
            <p>
                <span className="text-3xl font-bold">Hello,</span>
                <span className="text-xl">I&apos;m </span>
            </p>
            <h1> 
                <strong className="text-slate-900 text-6xl">Maryam Fazeli</strong>
            </h1>
            <h2 class="text-3xl mt-6">
                I Am Front End Developer
            </h2>
            <p>
                You can download my Resume with this button
            </p>
            <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded my-4">
                Download CV 
            </button>
        </div>
    );
}

export default AboutMe;
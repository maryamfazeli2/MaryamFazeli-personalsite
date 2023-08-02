import {
    PersonVcard, PersonWorkspace, PersonRolodex,
    Telegram, Linkedin, Instagram, Github, House,
    Newspaper, TelephoneInbound
} from 'react-bootstrap-icons';
import Animation1 from '../Animation1/page';

function SocialAnimation() {
    return (

        <section className="integration-section">

            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-md-12 col-sm-12 integration-column offset-lg-3">
                        <div className="integrations-block wow zoomIn animated animated" >
                            <div class="icon-box">
                                <div className="icon github">
                                    <a href="#">
                                        <Github size={90} className='m-3 rounded-full border-8 border-solid  bg-white text-red-700 p-2' />
                                    </a>
                                </div>
                                <div className="icon instagram">
                                    <a href="#">
                                        <img src="/instagram.png" alt="" width={100} height={100} />
                                    </a>
                                </div>
                                <div className="icon fazeli2">
                                    <a href="#">
                                        <img src='/fazeli2.jpg' alt='' width={200} height={200} className='rounded-full border-4 border-white-700 border-solid' />
                                    </a>
                                </div>
                                <div className="icon hashtag">
                                    <a href="#">
                                        <img src="http://html.tonatheme.com/2019/Rivox/images/icons/icon-14.png" width={90} alt="" />
                                    </a>
                                </div>
                                <div className="icon linkedin">
                                    <a href="#">
                                        <Linkedin size={90} className='m-3 rounded-full border-8 border-solid  bg-white text-blue-600 p-2' />
                                    </a>
                                </div>
                                <div className="icon telegram">
                                    <a href="#">
                                        <Telegram size={60} className='m-3 rounded-full border-8 border-solid text-blue-600' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>



        //         <div className='flex row'>
        //                 <Animation1 />
        //             </div>
        //     </div>
        // </div>
    );
}

export default SocialAnimation;
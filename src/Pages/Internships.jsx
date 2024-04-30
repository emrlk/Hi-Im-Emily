import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from 'react-router-dom';
import SectionTitle from "../Components/SectionTitle";
import { internships } from "../Constants/constants";


const Internships = () => {
    return (
        <div id="internships" className="w-full flex justify-center overflow-hidden-web">
            <div className="w-full xl:w-[70%] flex flex-col pb-16">
                <div className="w-full">
                    <SectionTitle title="Internships & Research" subtitle="Impactful Experiences" />
                </div>


                <div className="w-full flex flex-col-reverse sm:flex-row">
                    <div className="w-full md:w-[65%] md:h-full flex items-center mt-10">


                        <LazyMotion features={domAnimation} strict>
                            <m.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                }}
                                style={{ fontFamily: "Body", fontSize: 24 }}
                                className="text-grayscale-50 p-8 text-left flex flex-col gap-10"
                            >
                                <div className="pb-0 pt-0">
                                    <h2
                                        style={{fontFamily: "Nature", fontSize: 48 }}
                                    >{internships[0].name}</h2>
                                </div>
                                <span>{internships[0].description}</span>
                                
                            </m.p>
                        </LazyMotion>
                    </div>
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center">
                        <div className="w-[100%] flex justify-center items-center">
                            <iframe src={internships[0].documentLink} width="640" height="320" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col-reverse sm:flex-row">
                    <div className="w-full md:w-[65%] md:h-full flex items-center mt-10">


                        <LazyMotion features={domAnimation} strict>
                            <m.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                }}
                                style={{ fontFamily: "Body", fontSize: 24 }}
                                className="text-grayscale-50 p-8 text-left flex flex-col gap-10"
                            >
                                <div className="pb-0 pt-0">
                                    <h2
                                        style={{fontFamily: "Nature", fontSize: 48 }}
                                    >{internships[1].name}</h2>
                                </div>
                                <span>{internships[1].description}</span>
                                
                            </m.p>
                        </LazyMotion>
                    </div>
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center">
                        <div className="w-[100%] flex justify-center items-center">
                            <span>
                            <iframe src={internships[1].documentLink} width="320" height="450" allow="autoplay"></iframe>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-col-reverse sm:flex-row">
                    <div className="w-full md:w-[65%] md:h-full flex items-center mt-10">


                        <LazyMotion features={domAnimation} strict>
                            <m.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                }}
                                style={{ fontFamily: "Body", fontSize: 24 }}
                                className="text-grayscale-50 p-8 text-left flex flex-col gap-10"
                            >
                                <div className="pb-0 pt-0">
                                    <h2
                                        style={{fontFamily: "Nature", fontSize: 48 }}
                                    >{internships[2].name}</h2>
                                </div>
                                <span>{internships[2].description} See <Link to="https://reasoned.vercel.app/">ReasonED.</Link></span>
                                
                            </m.p>
                        </LazyMotion>
                    </div>
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center">
                        <div className="w-[100%] flex justify-center items-center">
                            <span>
                            <iframe src={internships[2].documentLink} width="300" height="320" allow="autoplay"></iframe>
                            </span>
                        </div>
                        <div className="w-[100%] flex justify-center items-center">
                            <iframe src="https://drive.google.com/file/d/1Ke8mGQtl7gJF9lGkzrEL_gYRI9iT_6iY/preview" width="300" height="320" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Internships;

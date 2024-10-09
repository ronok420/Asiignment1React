import React from 'react';
import T1 from '../../../Component/T1';
import T2 from '../../../Component/T2';
import T3 from '../../../Component/T3';
import T4 from '../../../Component/T4';
import T5 from '../../../Component/T5';
import T6 from '../../../Component/T6';
import T7 from '../../../Component/T7';
import T8 from '../../../Component/T8';
import T9 from '../../../Component/T9';
import T10 from '../../../Component/T10';
import T11 from '../../../Component/T11';
import T12 from '../../../Component/T12';
import team1 from "../../../assets/images/team/team-01.png";
import team2 from "../../../assets/images/team/team-02.png";
import team3 from "../../../assets/images/team/team-03.png";
import team4 from "../../../assets/images/team/team-04.png";
import T13 from '../../../Component/T13';
import T14 from '../../../Component/T14';
import T15 from '../../../Component/T15';
import T16 from '../../../Component/T16';

const Team = () => {
    return (
        <section id="team" className="overflow-hidden bg-gray-1 dark:bg-dark-2 pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team Members
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Clients
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
              <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:text-white  dark:shadow-none">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <img src={team1} alt="team image" className="h-[120px] w-[120px] rounded-full" />
                  <span
                    className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                  <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <T13></T13>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    Melissa Tatcher
                  </h4>
                  <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                    Marketing Expert
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                    <T14></T14>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                    <T15></T15>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                     <T16></T16>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
              <div className="group mb-8 rounded-xl dark:bg-dark bg-white px-5 pb-10 pt-12 shadow-testimonial  dark:shadow-none">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <img src={team2} alt="team image"
                    className="h-[120px] w-[120px] rounded-full" />
                  <span
                    className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                  <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                   <T1></T1>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    Stuard Ferrel
                  </h4>
                  <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                    Digital Marketer
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                     <T3></T3>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                      <T2></T2>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                      <T4></T4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
              <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <img src={team3} alt="team image"
                    className="h-[120px] w-[120px] rounded-full" />
                  <span
                    className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                  <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                    <T5></T5>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    Eva Hudson
                  </h4>
                  <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                    Creative Designer
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                      <T6></T6>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                      <T7></T7>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                     <T8></T8>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
              <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <img src={team4} alt="team image"
                    className="h-[120px] w-[120px] rounded-full" />
                  <span
                    className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                  <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <T9></T9>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    Jackie Sanders
                  </h4>
                  <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                    Founder of Facebook
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                      <T10></T10>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                    <T11></T11>
                    </a>
                    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
                    <T12></T12>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Team;
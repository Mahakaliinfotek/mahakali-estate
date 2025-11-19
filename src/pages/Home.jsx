import { useLocation } from "react-router-dom";
import CompanyStrip from "../components/common/CompanyStrip";
import HeroSlider from "../components/common/HeroSlider";
import AboutMahakaliEstate from "../components/homepage/AboutMahakaliEstate";
import BusinessesSection from "../components/homepage/BusinessesSection";
import GovernanceSection from "../components/homepage/GovernanceSection";
import HistorySection from "../components/homepage/HistorySection";
import MediaCSRSection from "../components/homepage/MediaCSRSection";
import PartnerWithUsSection from "../components/homepage/PartnerWithUsSection";
import PeopleCultureSlider from "../components/homepage/PeopleCultureSlider";
import SustainabilityInPractice from "../components/homepage/SustainabilityInPractice";
import SustainabilitySection from "../components/homepage/SustainabilitySection";
import VisionSection from "../components/homepage/VisionSection";
import WhatWeBuild from "../components/homepage/WhatWeBuild";
import Header from "../layouts/Header";
import { useEffect } from "react";

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            }
        }
    }, [location]);
    return (
        <>
            <Header isDark={true} />
            <HeroSlider />
            <CompanyStrip/>
            <AboutMahakaliEstate />
            <WhatWeBuild/>
            <SustainabilityInPractice />
            {/* <GovernanceSection/> */}
            {/* <PartnerWithUsSection/> */}
            <PeopleCultureSlider/>
            <VisionSection/>
            <BusinessesSection/>
            <HistorySection/>
            <SustainabilitySection />
            <MediaCSRSection/>
            <CompanyStrip/>
        </>
    );
}
export default HomePage;
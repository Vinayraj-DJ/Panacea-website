import { Routes, Route } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import TesimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";
// import { SlOptions } from "react-icons/sl";
import SpotlightPage from "../pages/SpotlightPage/SpotlightPage";
import ApplicationDevelopmentSection from "../pages/ServicesPage/ApplicationDevelopment/ApplicationDevelopmentSection";
import DigitalMarketingSection from "../pages/ServicesPage/DigitalMarketingSection/DigitalMarketingSection";
import WebDevelopmentSection from "../pages/ServicesPage/WebDevelopmentSection/WebDevelopmentSection";
import MobileAppSection from "../pages/ServicesPage/MobileAppSection/MobileAppSection";
import WebsiteDesigningSection from "../pages/ServicesPage/WebsiteDesigningSection/WebsiteDesigningSection";
import CMSEcommerceSection from "../pages/ServicesPage/CMSEcommerceSection/CMSEcommerceSection";
import CloudDevOpsSection from "../pages/ServicesPage/CloudDevOpsSection/CloudDevOpsSection";
import TestingAutomationSection from "../pages/ServicesPage/TestingAutomationSection/TestingAutomationSection";
import FullstackDevelopment from "../pages/ServicesPage/ApplicationDevelopment/FullStackDevelopment/FullStackDevelopment";
import DigitalTransformation from "../pages/ServicesPage/ApplicationDevelopment/DigitalTransformation/DigitalTransformation";
import SalesForceConsulting from "../pages/ServicesPage/ApplicationDevelopment/SalesForceConsulting/SalesForceConsulting";
import BIDataAnalytics from "../pages/ServicesPage/ApplicationDevelopment/BIDataAnalytics/BIDataAnalytics";
import SoftwareDevelopment from "../pages/ServicesPage/ApplicationDevelopment/SoftwareDevelopment/SoftwareDevelopment";
import CustomApplication from "../pages/ServicesPage/ApplicationDevelopment/CustomApplication/CustomApplication";
import BigDataServices from "../pages/ServicesPage/ApplicationDevelopment/BigDataServices/BigDataServices";
import SapConsulting from "../pages/ServicesPage/ApplicationDevelopment/SapConsulting/SapConsulting";
import SearchEngineOptimization from "../pages/ServicesPage/DigitalMarketingSection/SearchEngineOptimization/SearchEngineOptimization";
import SocialMediaMarketing from "../pages/ServicesPage/DigitalMarketingSection/SocialMediaMarketing/SocialMediaMarketing";
import EmailMarketing from "../pages/ServicesPage/DigitalMarketingSection/EmailMarketing/EmailMarketing";
import PPCMarketing from "../pages/ServicesPage/DigitalMarketingSection/PPCMarketing/PPCMarketing";
import ContentMarketing from "../pages/ServicesPage/DigitalMarketingSection/ContentMarketing/ContentMarketing";
import PhpDevelopment from "../pages/ServicesPage/WebDevelopmentSection/PhpDevelopment/PhpDevelopment";
import NodeDevelopment from "../pages/ServicesPage/WebDevelopmentSection/NodeDevelopment/NodeDevelopment";
import AngularDevelopment from "../pages/ServicesPage/WebDevelopmentSection/AngularDevelopment/AngularDevelopment";
import ReactDevelopment from "../pages/ServicesPage/WebDevelopmentSection/ReactDevelopment/ReactDevelopment";
import LaravelDevelopment from "../pages/ServicesPage/WebDevelopmentSection/LaravelDevelopment/LaravelDevelopment";
import CodeIgniterDevelopment from "../pages/ServicesPage/WebDevelopmentSection/CodeIgniterDevelopment/CodeIgniterDevelopment";
import CakePhpDevelopment from "../pages/ServicesPage/WebDevelopmentSection/CakePhpDevelopment/CakePhpDevelopment";
import QualityEngineering from "../pages/TestimonialsPage/QualityEngineering/QualityEngineering";
import DevOps from "../pages/ServicesPage/CloudDevOpsSection/DevOps/DevOps";
import AWS from "../pages/ServicesPage/CloudDevOpsSection/AWS/AWS";
import WindowsAzure from "../pages/ServicesPage/CloudDevOpsSection/WindowsAzure/WindowsAzure";
import CloudConsulting from "../pages/ServicesPage/CloudDevOpsSection/CloudConsultingServices/CloudConsultingServices";
import Qualityassurance from "../pages/ServicesPage/TestingAutomationSection/Qualityassurance/Qualityassurance";
import Qualityconsulting from "../pages/ServicesPage/TestingAutomationSection/Qualityconsulting/Qualityconsulting";
import Wordpress from "../pages/ServicesPage/CMSEcommerceSection/Wordpress/Wordpress";
import ECommerce from "../pages/ServicesPage/CMSEcommerceSection/ECommerce/ECommerce";
import WooCommerce from "../pages/ServicesPage/CMSEcommerceSection/WooCommerce/WooCommerce";
import Shopify from "../pages/ServicesPage/CMSEcommerceSection/Shopify/Shopify";
import IosMobileApplication from "../pages/ServicesPage/MobileAppSection/IosMobileApplication/IosMobileApplication";
import AndroidApp from "../pages/ServicesPage/MobileAppSection/AndroidApp/AndroidApp";
import Ipad from "../pages/ServicesPage/MobileAppSection/Ipad/Ipad";
import GameDevelopment from "../pages/ServicesPage/MobileAppSection/GameDevelopment/GameDevelopment";
import MediaQueries from "../pages/ServicesPage/WebsiteDesigningSection/MediaQueries/MediaQueries";
import SeoRanking from "../pages/ServicesPage/WebsiteDesigningSection/ImpactOnSEORanking/ImpactOnSEORanking";
import UserExperience from "../pages/ServicesPage/WebsiteDesigningSection/ImproveUserExpirence/ImproveUserExpirence";
import FlexibleImages from "../pages/ServicesPage/WebsiteDesigningSection/FlexibleImages/FlexibleImages";
import ChildCareManagement from "../pages/ProductsPage/ChildCareManagement/ChildCareManagement";
import Hypare from "../pages/ProductsPage/HyderabadPartyRentals/HyderabadPartyRentals";
import InfluencersApp from "../pages/ProductsPage/InfluencersApp/InfluencersApp";
import MutualFunds from "../pages/ProductsPage/MutualFunds/MutualFunds";
import BabaCarWash from "../pages/ProductsPage/BabaCarWash/BabaCarWash";
import ELearningApp from "../pages/ProductsPage/E-LearningApp/E-LearningApp";
import JewelleryWebsite from "../pages/ProductsPage/JewelleryWebsite/JewelleryWebsite";
import OMRSheetCustomization from "../pages/ProductsPage/OMRSheetCustomization/OMRSheetCustomization";
import TicketBookingApp from "../pages/ProductsPage/TicketBookingAPP/TicketBookingAPP";
import OTTApp from "../pages/ProductsPage/OTTApp/OTTApp";
import SchoolApp from "../pages/ProductsPage/SchoolApp/SchoolApp";
import FitnessApp from "../pages/ProductsPage/FitnessAPP/FitnessAPP";
import GameingApp from "../pages/ProductsPage/GamingAPP/GamingAPP";
import GroceryApp from "../pages/ProductsPage/GroceryDeliveryApp/GroceryDeliveryApp";
import ECommerceApp from "../pages/ProductsPage/ECommerceApp/ECommerceApp";
import ContactUs from "../pages/ContactUs/ContactUs"
import InboundMarketing from "../pages/ServicesPage/DigitalMarketingSection/InboundMarketing/InboundMarketing";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        <Route
          path="/services/application-development"
          element={<ApplicationDevelopmentSection />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketingSection />}
        />
        <Route
          path="/services/website-development"
          element={<WebDevelopmentSection />}
        />
        <Route
          path="/services/mobile-application"
          element={<MobileAppSection />}
        />
        <Route
          path="/services/website-designing"
          element={<WebsiteDesigningSection />}
        />
        <Route
          path="/services/cms-ecommerce"
          element={<CMSEcommerceSection />}
        />
        <Route
          path="/services/clouds-and-devops"
          element={<CloudDevOpsSection />}
        />
        <Route
          path="/services/testing-automation"
          element={<TestingAutomationSection />}
        />

        <Route
          path="/services/application-development/full-stack-development"
          element={<FullstackDevelopment />}
        />

        <Route
          path="/services/application-development/digital-transformation"
          element={<DigitalTransformation />}
        />

        <Route
          path="/services/application-development/sales-force-consulting"
          element={<SalesForceConsulting />}
        />
        <Route
          path="/services/application-development/bi-and-data-analysis"
          element={<BIDataAnalytics />}
        />

        <Route
          path="/services/application-development/software-development"
          element={<SoftwareDevelopment />}
        />

        <Route
          path="/services/application-development/custom-application"
          element={<CustomApplication />}
        />

        <Route
          path="/services/application-development/big-data-services"
          element={<BigDataServices />}
        />

        <Route
          path="/services/application-development/sap-consulting-services"
          element={<SapConsulting />}
        />

        <Route
          path="/services/digital-marketing/search-engine-optimization"
          element={<SearchEngineOptimization />}
        />

        <Route
          path="/services/digital-marketing/social-media-marketing"
          element={<SocialMediaMarketing />}
        />

        <Route
          path="/services/digital-marketing/email-marketing"
          element={<EmailMarketing />}
        />

        <Route
          path="/services/digital-marketing/inbound-marketing"
          element={<InboundMarketing />}
        />
        <Route
          path="/services/digital-marketing/content-marketing"
          element={<ContentMarketing />}
        />

        <Route
          path="/services/digital-marketing/pay-per-click-ppc"
          element={<PPCMarketing />}
        />


        <Route
          path="/services/web-development/php-development"
          element={<PhpDevelopment />}
        />
        <Route
          path="/services/web-development/node-js-development"
          element={<NodeDevelopment />}
        />
        <Route
          path="/services/web-development/angular-js-development"
          element={<AngularDevelopment />}
        />
        <Route
          path="/services/web-development/react-js-development"
          element={<ReactDevelopment />}
        />
        <Route
          path="/services/web-development/laravel-development"
          element={<LaravelDevelopment />}
        />
        <Route
          path="/services/web-development/codeigniter-development"
          element={<CodeIgniterDevelopment />}
        />
        <Route
          path="/services/web-development/cakephp-development"
          element={<CakePhpDevelopment />}
        />

        <Route
          path="/services/testing-automation/quality-engineering"
          element={<QualityEngineering />}
        />

        <Route
          path="/services/clouds-and-devops/devops"
          element={<DevOps />}
        />
      
          <Route
          path="/services/clouds-and-devops/aws"
          element={< AWS/>}
        />

        <Route
          path="/services/clouds-and-devops/windows-azure"
          element={<WindowsAzure />}
        />

        <Route
          path="/services/clouds-and-devops/cloud-consulting-services"
          element={<CloudConsulting />}
        />

        <Route
          path="/services/testing-automation/quality-engineering"
          element={<QualityEngineering />}
        />

        <Route
          path="/services/testing-automation/quality-consulting"
          element={<Qualityconsulting />}
        />

        <Route
          path="/services/testing-automation/quality-assurance"
          element={<Qualityassurance />}
        />

        <Route
          path="/services/cms-ecommerce/wordpress-development"
          element={<Wordpress />}
        />

        <Route
          path="/services/cms-ecommerce/bigcommerce-development"
          element={<ECommerce />}
        />

        <Route
          path="/services/cms-ecommerce/shopify-development"
          element={<Shopify />}
        />

        <Route
          path="/services/cms-ecommerce/woocommerce-development"
          element={<WooCommerce />}
        />

        
        <Route
          path="/services/mobile-application/ios-app-development"
          element={<IosMobileApplication />}
        />

        <Route
          path="/services/mobile-application/android-app-development"
          element={<AndroidApp />}
        />

         
        <Route
          path="/services/mobile-application/ipad-development"
          element={<Ipad />}
        />

        <Route
          path="/services/mobile-application/game-development"
          element={< GameDevelopment/>}
        />

        

        <Route
          path="/services/website-designing/media-queries"
          element={<MediaQueries />}
        />

        <Route
          path="/services/website-designing/flexible-images"
          element={<FlexibleImages />}
        />

         <Route
          path="/services/website-designing/improve-user-experience"
          element={<UserExperience />}
        />

        <Route
          path="/services/website-designing/impact-on-seo-ranking"
          element={< SeoRanking/>}
        /> 

         <Route
          path="/products/child-care-management"
          element={<ChildCareManagement />}
        /> 

         <Route
          path="/products/hyderabad-party-rentals"
          element={<Hypare />}
        /> 

        <Route
          path="/products/influencers-app"
          element={<InfluencersApp />}
        /> 

          <Route
          path="/products/mutual-funds"
          element={<MutualFunds />}
        /> 

        <Route
          path="/products/car-wash-app"
          element={<BabaCarWash/>}
        /> 

         <Route
          path="/products/omr-customization"
          element={<OMRSheetCustomization/>}
        /> 

         <Route
          path="/products/ott-app"
          element={<OTTApp/>}
        /> 

        <Route
          path="/products/ticket-booking-app"
          element={<TicketBookingApp/>}
        /> 

        <Route
          path="/products/school-app"
          element={<SchoolApp/>}
        /> 

        <Route
          path="/products/grocery-delivery"
          element={<GroceryApp/>}
        /> 

        <Route
          path="/products/ecommerce-website"
          element={<ECommerceApp/>}
        /> 

        <Route
          path="/products/jewellery-website"
          element={<JewelleryWebsite/>}
        /> 

        <Route
          path="/products/e-learning-app"
          element={<ELearningApp/>}
        /> 


        <Route
          path="/products/gaming-app"
          element={<GameingApp/>}
        /> 

        
        <Route
          path="/products/fitness-app"
          element={<FitnessApp/>}
        /> 

        <Route
          path="/contactUs"
          element={<ContactUs/>}
        /> 

       











        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/testimonials" element={<TesimonialsPage />} />
        <Route path="/spotlight" element={<SpotlightPage />} />

        {/* Add more if needed */}
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;





